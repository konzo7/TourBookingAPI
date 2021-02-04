import express from 'express';
const app = express();
const port = process.env.PORT || 8091;

app.get('/', (req, res, next) => {
    res.send({some: "This is a Tour Booking API."});
})

app.listen(port, () => { console.log(`Server listening on port ${port}`); });