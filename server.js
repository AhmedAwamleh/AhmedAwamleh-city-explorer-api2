const express=require(`express`);
require(`dotenv`).config();
const cors=require(`cors`);

const app =express();
app.use(cors());

const weatherData=require(`./data/weather.json`);
const { NavItem } = require("react-bootstrap");
app.get(`/weather`,(req,res)=>{
    const searchQuery=req.query.searchQuery;
    const lat=req.query.lat;
    const lon =req.query.lon;

   
    const cityArry=weatherData.find(item=>item.city_name.toLocaleLowerCase() === searchQuery.toLocaleLowerCase())
    try{
        const cityData=cityArry.data.map(item => new Forecast(item))
console.log(cityData)
res.send({cityData});
    }catch(error){
        errorMes(error, res)
    }
    app.get(`*`,(req,res)=>{res.status(404).send(`not found`)})

})
class Forecast{
    constructor(day){
    this.date=day.valid_date;
    this.description=day.weather.description;
    }
}
app.listen(process.env.PORT,()=>{
    console.log(`Server is Working`)
}
    )

    function errorMes(error,res){
res.status(500).send({error:`wrong Input`})
    }











