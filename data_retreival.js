const express = require('express');
const app = express();
var hum_low=0;
var temp_low=0;
var temp_high=0;
var hum_high=0;
var t_m=0;
var t_thr_l=0;
var t_thr_h=100;
var t=0;
export function devgetTemplow(){
    temp_low = Math.floor((Math.random() * 100) + 1);
    
}
export function devgetHumiditylow(){
     hum_low = Math.floor((Math.random() * 100) + 1);
         
     
}
export function devgetHumidityhigh(){
     hum_high = Math.floor((Math.random() * 100) + 1);
     
 }
export function devgetTempHigh(){
     temp_high = Math.floor((Math.random() * 100) + 1);
     
}
export function devgetTempmax(){
     t_m = 100;
     
}
export function devgetTemp_thr_l(){
     t_thr_l = Math.floor((Math.random() * 100) + 1);
     
}
export function devsetTemp_thr_h(){
     t_thr_h = Math.floor((Math.random() * 100) + 1);
     
}
export function devsethumidity_threshold(){
     h_thr_l = Math.floor((Math.random() * 100) + 1);
     
}
export function gettemperature(){
    t = (((temp_high*256+temp_low)/65536)*165)-40;
}
