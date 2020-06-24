const express = require('express');
const app = express();


function devgetTemplow(){
    return Math.floor((Math.random() * 100) + 1);
    
}
function devgetHumiditylow(){
    return Math.floor((Math.random() * 100) + 1);
         
     
}
function devgetHumidityhigh(){
    return Math.floor((Math.random() * 100) + 1);
     
 }
function devgetTempHigh(){
    return Math.floor((Math.random() * 100) + 1);
     
}
function devgetTempmax(){
    return 100;
     
}
function devgetTemp_thr_l(){
    return Math.floor((Math.random() * 100) + 1);
     
}
function devsetTemp_thr_h(){
    return Math.floor((Math.random() * 100) + 1);
     
}
function devsethumidity_threshold(){
    return Math.floor((Math.random() * 100) + 1);
     
}
function gettemperature(temp_high,temp_low){
    return (((temp_high*256+temp_low)/65536)*165)-40;
}
 module.exports = {
    devgetTemplow,
    devgetHumiditylow,
    devgetHumidityhigh,
    devgetTempHigh,
    devgetTempmax,
    devgetTemp_thr_l,
    devsethumidity_threshold,
    gettemperature
}