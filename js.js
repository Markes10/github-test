var swiper = new Swiper(".mySwiper", {
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  effect: "creative",
  creativeEffect: {
  prev: {
  shadow: true,
  translate: ["-20%", 0, -1],
  },
  next: {
   translate: ["100%", 0, 0],
  },
  },
  });


//tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//nav js//
(function($) { 
  $(function() { 
  
  //  open and close nav 
  $('#navbar-toggle').click(function() {
    $('nav ul').slideToggle();
  });
  
  
  // Hamburger toggle
  $('#navbar-toggle').on('click', function() {
    this.classList.toggle('active');
  });
  
  
  // If a link has a dropdown, add sub menu toggle.
  $('nav ul li a:not(:only-child)').click(function(e) {
    $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
    // Close dropdown when select another dropdown
    $('.navbar-dropdown').not($(this).siblings()).hide("slow");
    e.stopPropagation();
  });
  
  
  // Click outside the dropdown will remove the dropdown class
  $('html').click(function() {
    $('.navbar-dropdown').hide();
  });
  }); 
  })(jQuery); 


//popup//
function closeForm() {
  $('.form-popup-bg').removeClass('is-visible');
  
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#btnOpenForm').on('click', function(event) {
    event.preventDefault();

    $('.form-popup-bg').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.form-popup-bg').on('click', function(event) {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["email"].value;
    if ( $(event.target).is('.form-popup-bg') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
    else if ($(event.target).is('#submit') && x =="" && y =="" && z ==""){
      alert("Name must be filled out");
      return false;
      
    }
    else if($(event.target).is('#submit') && x !="" && y !="" && z !=""){
      event.preventDefault();
      $(this).removeClass('is-visible');

      $(document).ready(function($) {
      
          $('.submit-popup-bg').addClass('is-visible');
        
       
       });
    }
  });  
 });

/*submit*/
    //close popup when clicking x or off popup
    $('.submit-popup-bg').on('click', function(event) {
      if ($(event.target).is('.submit-popup-bg') || $(event.target).is('#close')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    }); 

