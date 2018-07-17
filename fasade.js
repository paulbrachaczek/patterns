let Breakfast = {
    make: function() {
        let meal = 'Twoje dzisiejsze sniadanie to: '
        meal += eggs();
        meal += sandwich();
        meal += drink();
        return meal;
    }
};

let eggs = function() {
   return 'jajecznica';
}

let sandwich = function(){
   return ', tost';
}

let drink = function() {
    return ', kawa.'
}

Breakfast.make();
