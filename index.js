
const express = require('express');
const app = express();
const { response } = require('express');
app.listen(4000,() => console.log("listening"));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
app.get("/api", (request, response) => {
  fs.readFile('./newCustomer.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const customer = JSON.parse(jsonString) 
        response.json(customer);
      } catch(err) {
        console.log('Error parsing JSON string:', err)
      }

    

})
  });

let model = require("./climate_sensor.js");
const mqtt = require('mqtt');
const { json } = require('express');
const client = mqtt.connect('mqtt:34.210.160.212');
  
app.post('/api1', (request,response)=>{
  console.log(request.body);
})
setInterval(serverdata,2000);
function serverdata()
{
  temp = model.devgettemp();
  tempmax=model.devgettempmax();
  hum = model.devgethumi();
  hum_m = model.devgethumimax();
  devid = model.devgetdeviid();
  manuif = model.devgetmanufid();
  tempinc = model.devgettempinc();
  humidityrh = model.devgethumiinrh();
  tempthH = model.devgettempthh();
  tempthL = model.devgettempthl();

  var tempdata = { temperature: temp,temperature_max:tempmax,Temperatureincrease:tempinc, humidity: hum, Humidity_max: hum, RelativeHumidity: humidityrh, DeviceId: devid, ManufactureId:manuif};
  client.publish('shalaka/app/data',JSON.stringify(tempdata));
}
const fs = require('fs')


client.on('connect', () => {
  client.subscribe('shalaka/app/data')
})
client.on('message', (topic, message) => {
  switch (topic) {
    case 'shalaka/app/data':
      return tempdata(message)

  }
  console.log('No handler for topic %s', topic)
})

function tempdata (message) {
  //console.log('temperature data %s', message)
  
  const jsonString = (message)
  fs.writeFile('./newCustomer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
       // console.log('Successfully wrote file')
    }
  })
 
}




