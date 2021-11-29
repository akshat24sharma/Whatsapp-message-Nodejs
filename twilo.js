const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twilio', (req, res) => {
    const accountSid = 'AC90a20a4aaad06a3de94cd0a2735913d2';
    const authToken = '6a36a1c801f698a98518203de697ff19';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'Hello Akshat it is a msg from node app ',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919717680054'
        })
        .then(message => console.log(message.sid))
        .done();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})