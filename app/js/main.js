$(function () {

  $('.header-top__menu-btn, .menu a').on('click', function () {
    $('.header-top__menu-btn').toggleClass('header-top__menu-btn--active');
    $('.menu').toggleClass('menu__active');
  });

  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Thank you!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  $('.table-box').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
        breakpoint: 1500,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });

});


var wow = new WOW({
  boxClass: 'wow', // animated element css class (default is wow)
  animateClass: 'animated', // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();



// let calenParent = document.querySelector('.calendar__items');

// let months = document.querySelectorAll('td');
// // let monthsTr = document.querySelector

// console.log(months);


// calenParent.addEventListener('click', (e) => {
//   let style = window.getComputedStyle(e.target);
//   console.log(style);



//   for (let td of months) {
//     console.log(td.getComputedStyle.background);
//     // if (td.getComputedStyle.background-color === style) {
//     //   console.log(egegv);
//     // }
//   }
// });