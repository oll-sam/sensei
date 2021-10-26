class Ninja {
    constructor(name, health , speed = 3, strength = 3){
        this.name = name;
        this.health = health
        this.speed = speed
        this. strength = strength
    }
    sayName(){
        console.log(
            `My name is ${this.name}!`
        );
        return this.name
    }
    showStats(){
        console.log(
                `${this.name} | ${this.strength} | ${this.speed} | ${this.health}!`
                );
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed= 10, strength=10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom
    }
    speakWisdom(){
        console.log(
            `Karate training will make you strong and confident, but restraint will make you respected`
        );
    }
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

const ninja2 = new Sensei("Baki Hanna",200);
ninja2.speakWisdom();
ninja1.drinkSake();
ninja2.showStats();



