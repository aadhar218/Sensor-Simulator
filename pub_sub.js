var mqtt = require('mqtt')
var client = mqtt.connect({host:'34.210.160.212',port:'1883',client_Id:'80b9f60b9f7347c68cf73d9ecb3b4876'})
var topic = 'hello mqtt'

client.on('message',function (topic,message) {
  message = message.toString()
  console.log(message)
  })

client.on('connect',()=>{
    client.subscribe(topic)
})