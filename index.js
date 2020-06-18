
const express = require('express');
const app = express();
const Datastore = require('nedb');
const { response } = require('express');
app.listen(3000,() => console.log("listening"));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
const database = new Datastore('database.db');
database.loadDatabase();
database.insert({name: 'Simulator',status: 'climate'});
app.get('/api',(request,response)=>{
   

database.find({},(err,data)=>{
    if(err){
        response.end();
        return;
    }
    response.json({data});
});
})
app.post('/api',(request,response)=>{
    const data = request.body;
    response.json(data);
})
var hum_low=0;
var temp_low=0;
var temp_high=0;
var hum_high=0;
var t_m=0;
var t_thr_l=0;
var t_thr_h=100;
var t=0;

function devgetTemplow(){
    temp_low = Math.floor((Math.random() * 100) + 1);
    
}
function devgetHumiditylow(){
     hum_low = Math.floor((Math.random() * 100) + 1);
         
     
}
function devgetHumidityhigh(){
     hum_high = Math.floor((Math.random() * 100) + 1);
     
 }
function devgetTempHigh(){
     temp_high = Math.floor((Math.random() * 100) + 1);
     
}
function devgetTempmax(){
     t_m = 100;
     
}
function devgetTemp_thr_l(){
     t_thr_l = Math.floor((Math.random() * 100) + 1);
     
}
function devsetTemp_thr_h(){
     t_thr_h = Math.floor((Math.random() * 100) + 1);
     
}
function devsethumidity_threshold(){
     h_thr_l = Math.floor((Math.random() * 100) + 1);
     
}
function gettemperature(){
    t = (((temp_high*256+temp_low)/65536)*165)-40
}

  var  myvar = setInterval(load_database,8000);
  
  function load_database()
  {
    devgetTemplow();
    devgetHumiditylow();
    devgetTempHigh();
    devgetTemp_thr_l();
    devgetTempmax();
    devsetTemp_thr_h();
    
    devsethumidity_threshold();
    devgetHumidityhigh();
    database.insert({Temperaturelow: temp_low.toString(),temperature_high:temp_high.toString(),Humiditylow:hum_low.toString(),Humidityhigh:hum_high.toString(),TEMPERATURE: t.toString()});
  }