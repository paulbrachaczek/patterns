class vodFactory{
    create(name){
        let vod;

        switch(name){
            case 'Netflix':
                vod = new Netflix(name);
                break;
            case 'Hbo':
            case 'HBOgo':
            case 'HBO':
                vod = new Hbo('HBOgo');
                break;
            case 'Showmax':
                vod = new Showmax(name);
                break;
            default:
                console.log('vod not exist');

            
        }

        return vod;
        
    }
}

class Netflix {
    constructor(name, price, series){
        this.name = name;
        this.price = [39, 49];
        this.series = ['House of cards', 'BoJack Horseman', 'Master on none', 'The Crown', 'Strangers things']
    }
}

class Hbo {
    constructor(name, price, series){
        this.name = name;
        this.price = [20];
        this.series = ['True Detective', 'Game of thrones', 'Sopranos', 'John Adams']
    }
}

class Showmax {
    constructor(name, price, series){
        this.name = name;
        this.price = [19];
        this.series = ['Handman`s Tale', 'Fargo', 'Botoks']
    }
}

const factory = new vodFactory();
const hbo = factory.create('HboGo');
const netflix = factory.create('Netflix');