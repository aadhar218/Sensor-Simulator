
class climate_sensor 
{
    constructor(deviId,temp,hum){
       this._deviId  = deviId;
       this._temp = temp;
       this._hum = hum;

    }

    get temp(){
       
        return this._temp;
    }
    set temp(newtemp){
        this._temp = newtemp;
    }
    get deviId(){
        return this._deviId;
    }
    set deviId(newdevid){
        this._devId = newdevid;
    }
    get hum(){
        return this._hum;
    }
    set hum(newhum){
        this._hum = newhum;
    }

    
}
module.exports = climate_sensor;
