class Breakfast {
    
    constructor() {
        this.eggs = new Eggs();
        this.sandwich = new Sandwich();
        this.drink = new Drink();
    }

    make() {
        this.meal = 'Twoje sniadanie to:'
        this.meal += this.eggs.make();
        this.meal += this.sandwich.make();
        this.meal += this.drink.make();
        return this.meal;
    }
}

class Eggs {

    make() {
        return ' jajecznica';
    }
}

class Sandwich {
    make() {
        return ', tost';
    }
}

class Drink {
    make() {
        return ', kawa.';
    }
}

let test = new Breakfast();
test.make();

