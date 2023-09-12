/*
var animal = {
cri :'???',
crier : function (){
    return this.cri;
},
fourure : {
    couleur : 'blanc',
    longueur : 'court'
}

}
*/


/*
var Animal = function(nom){
this.nom =  nom;
this.pattes = 4 ;
this.cri = '????';
this.crier = function(){
    return 'le cri :' + this.cri;
} 
}

var poney = new Animal('Rainbow Dash') ; 
poney.pattes = 3 ;
var chien = new Animal('broly') ; 
var chat = new Animal('krilin') ; 
*/
/*
var Animal = function(nom){
    this.nom =  nom;
    }
    Animal.prototype.pattes = 4 ;
    Animal.prototype.cri = '????' ;
    Animal.prototype.crier = function(){
        return this.cri ; 
    }
    Animal.prototype.fourure = {
       couleur : 'blanc',
       longeuru : 'courte'
    }
    var poney = new Animal('Rainbow Dash') ; 
    poney.pattes = 3 ;
    var chien = new Animal('broly') ; 
    var chat = new Animal('krilin') ; 

    var poney = Object.create(Animal) ; 
    poney.marcher = function(){
        return 'cataclop' ;
    }
    var chat = Object.create(Animal) ; 
    chat.marcher = function(){
        return 'ronron' ;
    }
    var roger = Object.create(poney) ; 
    roger.nom = 'roger' ;
    */

    class Student {
      ecole = 'jules ferry'

      constructor(firstname ,lastname){
         this.lastname = lastname ;
         this.firstname = firstname ;
      }
    }
    const john = new Student('jhon','doe')
    const flo = new Student('florian','bostr')