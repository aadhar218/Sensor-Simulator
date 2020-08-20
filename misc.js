unction sendData(value){
    console.log(value.devid);
    if(value.devid == '2000'){
      const sensor1 = new sensor();
      sensor1.devsettempthl(value.tempthrh);
      sensor1.devsettempthh(value.tempthrh);
      sensor1.devsetrhthrh(value.humthrh);
      sensor1.devsetrhthrh(value.humthrl);
      setInterval(sensor1_serverdata,2000);
    }
    else if(value.devid =='3000'){
  
      const sensor2 = new sensor_2();
      sensor2.devsettempthl(value.tempthrh);
      sensor2.devsettempthh(value.tempthrh);
      sensor2.devsetrhthrh(value.humthrh);
      sensor2.devsetrhthrh(value.humthrl);
      setInterval(sensor2_serverdata,2000);
  
    }
  


  }


  Device Id: <input type="text" id="dev" size="10" name="dev" ><br>
  Humidity threshold: <input type="text" id="humt" size="10" name="humt" ><br>
  Temperature threshold: <input type="text" id="tmpt" size="10" name="tmpt" ><br>


function sensor2_serverdata()
{ 
  const sensor2 = new sensor_2();
  var temp = sensor2.devgettemp();
  var tempmax=sensor2.devgettempmax();
  var hum = sensor2.devgethumi();
  var hum_m = sensor2.devgethumimax();
  var devid = sensor2.devgetdeviid();
  var manuif = sensor2.devgetmanufid();
  var tempinc = sensor2.devgettempinc();
  var humidityrh = sensor2.devgethumiinrh();
  var tempthH = sensor2.devgettempthh();
  var tempthL = sensor2.devgettempthl();

  var tempdata = { temperature: temp,temperature_max:tempmax,Temperatureincrease:tempinc, humidity: hum, Humidity_max: hum_m, RelativeHumidity: humidityrh, DeviceId: devid, ManufactureId:manuif};
  client.publish('shalaka/app/data',JSON.stringify(tempdata));
}

function sensor3_serverdata()
{ const sensor3 = new sensor();

  var temp = sensor3.devgettemp();
  var tempmax=sensor3.devgettempmax();
  var hum = sensor3.devgethumi();
  var hum_m = sensor3.devgethumimax();
  var devid = sensor3.devgetdeviid();
  var manuif = sensor3.devgetmanufid();
  var tempinc = sensor3.devgettempinc();
  var humidityrh = sensor3.devgethumiinrh();
  var tempthH = sensor1.devgettempthh();
  var tempthL = sensor1.devgettempthl();

  var tempdata = { temperature: temp,temperature_max:tempmax,Temperatureincrease:tempinc, humidity: hum, Humidity_max: hum_m, RelativeHumidity: humidityrh, DeviceId: devid, ManufactureId:manuif};
  client.publish('shalaka/app/data',JSON.stringify(tempdata));
}