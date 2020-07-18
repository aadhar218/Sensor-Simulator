
class climate_sensor 
{
    constructor(){
        this.templow=  Math.floor((Math.random() *0.02) + 1);
        this.temphig=  Math.floor((Math.random() * 10) + 1);
        this.humilow=  Math.floor((Math.random() *0.02) + 1);
        this.humihig=  Math.floor((Math.random() *10) + 1);
        this.tempmax=0x0000
        this.humimax=0x0000
        this.tempthl=0x0000
        this.tempthh=0x00ff
        this.rhthrl=0x0000
        this.rhthrh=0x00ff
        this.measurconfig=0x0000
        this.manufidl=0x0049
        this.manufidh=0x0054
        this.deviidl=0x00d0
        this.deviidh=0x0007
        this.value = 0
    }
    devgettemp(){
        this.templow=  Math.floor((Math.random() *0.1) + 1);
        this.temphig=  Math.floor((Math.random() * 10) + 1);
        return (this.templow*256+this.temphig);
    }
    devgethumi(){
        return this.humihig*256+this.humilow;
    }
    devgettempmax(){
        return this.tempmax;
    }
    devgethumimax(){
        return this.humimax;
    }
    devgettempthl(){
        return this.tempthl;
    }
    devsettempthl(){
        this.tempthl=value;
    }

    devsettempthh(){
        this.tempthh=value;
    }
    devgettempthh(){
        return this.tempthh;
    }
    devgetrhthrl(){
        return this.rhthrl;
    }
    devsetrhthrl(){
        this.rhthrl=value;
    }
    devgetrhthrh(){
        return this.rhthrh;
    }
    devsetrhthrh(){
        this.rhthrh=value;
    }
    devgetmeasurconfig(){
        return this.measurconfig;
    }
    devsetmeasurconfig(){
        this.measurconfig=value;
    }
    devgetmanufid(){
        return this.manufidh*256+this.manufidl;
    }
    devgetdeviid(){
        return this.deviidh*256+this.deviidl;
    }
    devgettempinc(){
        return (((this.temphig*256+this.templow)/65536)*165)-40;
    }
    devgethumiinrh(){
        return ((this.humihig*256+this.humilow)/65536)*100;
    }
}
module.exports = climate_sensor;
