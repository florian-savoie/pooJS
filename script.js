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


    function dropdowntest(options) {
        var openElement = null;
        var elements = document.querySelectorAll('.card-text-anchor');
        var dropdown = document.querySelector('#contenuRaccourci');
      
      
      
        if (options.switch === true) {
          var newDiv = document.createElement('div');
          newDiv.classList.add('form-check', 'form-switch', 'mb-2');
          newDiv.style.borderBottom = "1px solid #A0A1B8";
          newDiv.style.padding = "10px 10px 10px 15px ";
          newDiv.innerHTML = ` <input class="form-check-input form-check-input-color" type="checkbox" id="flexSwitchCheckChecked" onclick="updateStateFiche()" checked=""  style="float: right;">
              <label class="form-check-label" for="flexSwitchCheckChecked">Annuler la fiche </label>`;
          dropdown.appendChild(newDiv);
        }
      
        // Parcourez la liste d'éléments et récupérez leur contenu texte
        for (var i = 0; i < elements.length; i++) {
      
          var liaccourci = document.createElement('li');
          var araccourci = document.createElement('a');
          var contenuTexte = elements[i].textContent;
      
          nospace = contenuTexte.replace(/ /g, "_");
          elements[i].setAttribute("id", nospace);
          araccourci.textContent = contenuTexte;
          araccourci.href = "#" + nospace;
          araccourci.classList.add('dropdown-item');
          araccourci.classList.add('dropdown-itemtt');
          liaccourci.appendChild(araccourci);
          dropdown.appendChild(liaccourci);
      
          araccourci.addEventListener("focus", function (event) {
            console.log('ok');
            var nospace = this.textContent.replace(/ /g, "_");
            var targetElement = document.getElementById(nospace);
            if (openElement) {
              openElement.style.border = "";
            }
            if (targetElement) {
              targetElement.parentNode.style.border = "2px red solid";
              openElement = targetElement.parentNode;
            }
          });
        }
        // Récupérez tous les éléments avec la classe "scroll-up-link"
        var scrollUpLinks = document.querySelectorAll(".dropdown-item");
        console.log(scrollUpLinks) ;
        // Ajoutez un gestionnaire d'événements à chaque lien
        scrollUpLinks.forEach(function (link) {
          link.addEventListener("click", function (event) {
           event.preventDefault(); // Empêche le comportement de lien par défaut
            var id = link.textContent.replace(/ /g, "_");
      
            // Récupérez la position actuelle de défilement verticale
            var item = document.getElementById(id);
            var containerhtml = document.getElementById('containercenter');
      
      
      
            var itempostion = item.getBoundingClientRect();
            var containerhtmlposition = containerhtml.getBoundingClientRect();
            var itempostiontop = itempostion.top ;
      
            var containerhtmlpositiontop = containerhtmlposition.top ;
        
            var positionY = itempostiontop - containerhtmlpositiontop;
      
      
      
            // Déplacez la page vers le haut de 50 pixels par rapport à la position actuelle
            containerhtml.scrollTo(0, positionY  - 40);
      
          });
        });
      
      }
      