const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twilio', (req, res) => {
    const accountSid = 'Your AccountSID';
    const authToken = 'Your Auth Token';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'Hello Akshat it is a msg from node app ',
            from: 'whatsapp:twilio registerd number', //this is the numbers provided to me by the free twilio account, you have to register for free
            to: 'whatsapp:Your Number'
        })
        .then(message => console.log(message.sid))
        .done();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
