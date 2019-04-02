 let supriseModule = (function () {
 
    // privates
   
    let _gifts = ['kotek', 'piesek', 'małpka', 'rózga'];
   
    let _getSuprise = function() {
      return _gifts[Math.floor(Math.random()*_gifts.length)];
    };
   
    //public
    return {
      
      getSuprice: _getSuprise
      
    };
})();

(function(){
  supriseModule.getSuprise();
})();



  