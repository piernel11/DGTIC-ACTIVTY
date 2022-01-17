
$(document).ready(function(){

  //code pour l'initialisation de la sidenav
     $('.sidenav').sidenav();

    //inistialisation du modal
     $('.modal').modal();

    $('.collapsible').collapsible();

     $('.tooltipped').tooltip();
    
     $('.datepicker').datepicker();
    

    //slides des images
    // en jquery  ca donnerait : $('.slider').slider();
     var slider = document.querySelectorAll('.slider');
     M.Slider.init(slider, {
       indicators:false,
       height:400,
       transition:500,
       interval:6000
     });

    //galery
       $('.materialboxed').materialbox();

     //select dans les formulaires
     $('select').formSelect();

    // //caroussel
     $('.carousel').carousel();

    //initialisation du dropdown dans le menu
     $('.dropdown-trigger').dropdown();
    
 /*    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems); */
  

    //inistialisation du modal
     $('.modal').modal();
    
        
    
  });



