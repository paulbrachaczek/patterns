function gim(){
    if(day === 'monday'){
        return chestFactory;
    }
    if(day === 'friday')
        return bicekFactory;
}

function chestFactory(){
    new Chest();
}

class Chest {
    exisite(){
        console.log('sztanga, atlas, drążek')
    }
}

class Bicek {
    exisite(){
        console.log('sztanga, atlas, drążek')
    }
}