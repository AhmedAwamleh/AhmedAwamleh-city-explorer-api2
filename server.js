const express = require(`express`);
require(`dotenv`).config();
const cors = require(`cors`);
const axios = require(`axios`);


const { handleWeather } = require(`./module/weather`);
const { handleMovie } = require(`./module/movies`);

const app = express();
app.use(cors());


app.get(`/weather`, handleWeather);

app.get(`/movies`, handleMovie);




function errorMes(error, res) {
    res.status(200).send({ error: `wrong Input` })
}

app.listen(process.env.PORT, () => {
    console.log(`Server is Working `)
})









