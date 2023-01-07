var modal = document.getElementById("reg-modal");
var modal_s = document.getElementById("reg-modal-s");

var btn = document.getElementById("reg-mod");
var btn_s = document.getElementById("reg-mods");

var rm_close = document.getElementById("rm-close");

btn.onclick = function() {
  modal.classList.remove('d-none')
  
}
btn_s.onclick = function() {
    modal.classList.remove('d-none')
    
}

rm_close.onclick = function() {
    modal.classList.add('d-none')
}

window.onclick = function(event) {
  console.log('sadasd')
  
}

window.onclick = function(event) {
  if (event.target == modal_s) {
    modal_s.classList.add('d-none');
    $('#sidebar').toggleClass('sidebar-show');

  }
  else if (event.target == modal) {
    document.getElementById("reg-modal").classList.add('d-none');
  }
}


$("#all-c").click(function(e) {
  console.log(e.target.parentElement.parentElement.parentElement.nextElementSibling)
  $('#ac-slide').slideToggle()

  //$(e.target.parentElement.parentElement.parentElement.nextElementSibling).slideToggle();
  
});
$("#all-c-s").click(function(e) {
  console.log(e.target)
  $('#ac-slides').slideToggle()
  //$(e.target.parentElement.parentElement.nextElementSibling).slideToggle();
  
});

let sidebar_btn = $('#sidebar-btn');

sidebar_btn.click(function(){
  $('#sidebar').toggleClass('sidebar-show');
  modal_s.classList.remove('d-none')
})


$('.sec3-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint:500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $(document).ready(function() {
    $('#sidebar-btn').on('click', function() {
      $('#sidebar').toggleClass('visible');
    });
  });


  let mega_menu = $('.mega-t');

  mega_menu.click(function(e){
    $(e.target.parentElement.nextElementSibling).slideToggle();
    
  })


  

if ($(window).width() < 410) {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
        $('.header-top').addClass('d-none');
    } else {
        $('.header-top').removeClass('d-none');
    }
  });
}