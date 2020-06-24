var mqtt = require('mqtt');
var client  = mqtt.connect("mqtt://34.210.160.212",{clientId:"8db7b73dc7334267a0a0a9049c6e8215"});
 
client.on('connect', function () {
    console.log("connected");
});
 
