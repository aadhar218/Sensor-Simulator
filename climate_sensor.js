const express = require('express');
const app = express();
var templow=  Math.floor((Math.random() *2) + 1);
var temphig=  Math.floor((Math.random() * 100) + 1);
var humilow=  Math.floor((Math.random() *2) + 1);
var humihig=  Math.floor((Math.random() *100) + 1);
var tempmax=0x0000
var humimax=0x0000
var tempthl=0x0000
var tempthh=0x00ff
var rhthrl=0x0000
var rhthrh=0x00ff
var measurconfig=0x0000
var manufidl=0x0049
var manufidh=0x0054
var deviidl=0x00d0
var deviidh=0x0007
function devgettemp(){
    templow=  Math.floor((Math.random() *0.1) + 1);
    temphig=  Math.floor((Math.random() * 10) + 1);
    return (templow*256+temphig);
}
function devgethumi(){
    return humihig*256+humilow;
}
function devgettempmax(){
    return tempmax;
}
function devgethumimax(){
    return humimax;
}
function devgettempthl(){
    return tempthl;
}
function devsettempthl(value){
    tempthl=value;
}

function devsettempthh(value){
    tempthh=value;
}
function devgettempthh(){
    return tempthh;
}
function devgetrhthrl(){
    return rhthrl;
}
function devsetrhthrl(value){
    rhthrl=value;
}
function devgetrhthrh(){
    return rhthrh;
}
function devsetrhthrh(value){
    rhthrh=value;
}
function devgetmeasurconfig(){
    return measurconfig;
}
function devsetmeasurconfig(value){
    measurconfig=value;
}
function devgetmanufid(){
    return manufidh*256+manufidl;
}
function devgetdeviid(){
    return deviidh*256+deviidl;
}
function devgettempinc(){
    return (((temphig*256+templow)/65536)*165)-40;
}
function devgethumiinrh(){
    return ((humihig*256+humilow)/65536)*100;
}

module.exports = {
    devgetdeviid,
    devgethumi,
    devgetmanufid,
    devgettemp,
    devgethumiinrh,
    devgettempmax,
    devgettempinc,
    devsetmeasurconfig,
    devgetmeasurconfig,
    devsetrhthrl,
    devgetrhthrh,
    devsetrhthrh,
    devgetrhthrh,
    devsettempthl,
    devsettempthh,
    devgetrhthrl,
    devgettempthh,
    devgettempthl,
    devgethumimax
}
