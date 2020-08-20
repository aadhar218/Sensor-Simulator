/* the below file is the main file for receiving the data from the csv file and then with respect to the particular tab displays the data by publishing it first to the mqtt server 
and then subscring it and storing it the json format and then sending the same data to the frontend using apis.
the climate_sensor.js file contains the class for the sensor functions and can be canged as the per the requirements.
the app works on the local host 4000 and can be deployed anywhere on the internet
*/

'use strict';
const express = require('express');
const app = express();
const fs = require('fs');
const sensor = require("./climate_sensor.js");
const { response } = require('express');
app.listen(4000,() => console.log("listening"));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

// api is used to get data from the JSON file
app.get("/api", (request, response) => {
  fs.readFile('./newCustomer.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
    try {
        const customer = JSON.parse(jsonString);
        response.json(customer);
      } catch(err) {
        console.log('Error parsing JSON string:', err)
      }

    

})
  });

// mqtt server is connected 
const mqtt = require('mqtt');
const { json } = require('express');
const { get } = require('https');
const client = mqtt.connect('mqtt:34.210.160.212');
var devID1 = '';
var devID2 = '';
var tab=0;



// api2 is used to get values from frontenc of sensor 2

// function is used to get the current tab and then send the value accordingly
async function get_tab(){

app.post('/api3', (request,response)=>{

  console.log(request.body);
  const data = request.body;
  tab = data.t;
})
  if(tab===1){
    app.post('/api1', (request,response)=>{

      console.log(request.body);
      const data = request.body;
      
        devID1 = data.devid;
    
     
    })
    getdata_sensor1(); 
  }
  else if( tab===2){
    app.post('/api2', (request,response)=>{

      console.log(request.body);
      const data = request.body;
    
      devID2 = data.devid;
      
    })
    getdata_sensor2(); 
  }

}

setInterval(get_tab,1000);

// this function is used to get the sensor 1 data from the csv file and then send it to the device driver functions
var x = 0;
async function getdata_sensor1(){
  x++;
    fs.readFile('./sensors-1.csv', 'utf8', (err, jsonString) => {
      if (err) {
          console.log("Error reading file from disk:", err)
          return
      }
      try {
          const data = jsonString;
          const row = data.split('\n');
          const data1 = row[x].split(',');
          const sensor1 = new sensor(devID1,data1[3],data1[4]);
          var temp = sensor1.temp;
          var devid1=sensor1.deviId;
          var hum = sensor1.hum;

          pub_data(temp,hum,devid1);
          
        } catch(err) {
          console.log('Error parsing JSON string:', err)
        }
      });
    

    }   
// this function is used to get the sensor 2 data from the csv file and then send it to the device driver functions
    async function getdata_sensor2(){
      x++;
        fs.readFile('./sensors-1.csv', 'utf8', (err, jsonString) => {
          if (err) {
              console.log("Error reading file from disk:", err)
              return
          }
          try {
              const data = jsonString;
              const row = data.split('\n');
              const data1 = row[x].split(',');
              const sensor2 = new sensor(devID2,data1[3],data1[4]);
              var temp = sensor2.temp;
              var devid=sensor2.deviId;
              var hum = sensor2.hum;
              pub_data(temp,hum,devid);
            } catch(err) {
              console.log('Error parsing JSON string:', err)
            }
          });
        
    
        }   
// function used to publish the data from the sensor to the mqtt publisher
function pub_data(temp,hum,devid){
  var tempdata = { temperature: temp,temperature_max:100, humidity: hum, Humidity_max: 50, DeviceId: devid};
  client.publish('shalaka/app/data',JSON.stringify(tempdata));
}



// to connect to the shalaka topic abnd subscribe to the topic
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
// the send the data to the json file 
function tempdata (message) {
  console.log('Data %s', message);
  
  const jsonString = (message)
  fs.writeFile('./newCustomer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
       // console.log('Successfully wrote file')
    }
  })
 
}




