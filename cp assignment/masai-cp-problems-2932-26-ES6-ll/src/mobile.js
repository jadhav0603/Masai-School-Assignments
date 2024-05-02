class Mobile {
    #unlockPin;
    constructor (model, number, unlockPin){
        this.model = model
        this.number = number
        this.#unlockPin = unlockPin
    }

    get getUnlockPin(){
        return this.#unlockPin ;
    }

    set unlockPin(value){
        this.#unlockPin = value;
    }

    sendSMS(text){
        return text;
    }
}

const ans = new Mobile ('I-Phone 14', '960710', 12345)
  
export default Mobile
