$(document).ready(function(){
    // let sekunt=document.querySelector(".welcome-text-logo");
    // setInterval(function(){
    // let now=new Date();
    // let sekuntlar=now.getSeconds();
    // let sekuntDegres=(sekuntlar/60)*720;
    // sekunt.style.transform=`rotate(${sekuntDegres}deg)`;
    // },1000);
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.hamburger').click(function(){
      $('.hamburger').toggleClass('is-active');
      $('.hamburger').toggleClass('clicked');
      $(".header-nav-ul").toggleClass("header-nav-ul-dn");
    });

    $(".hamburger").click(function(){
      $(".nav-ul").slideToggle("slow");
    });
    $('.responsive').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
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
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('.testimonials-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
      $(".slick-arrow").text("");
      $(".testimonials .wrapper .testimonials-slick ul li button").text("");
      let rasmlar=["img/welcome-img.png","img/welcome-img1.png","img/welcome-img2.png"];
      let q=0;
    $(".welcome .wrapper .welcome-header .welcome-carousel .slick-next").click(function(){
      q++;
      if(q>=rasmlar.length)q=0;
      $(".welcome .wrapper .welcome-img img").attr("src",rasmlar[q]);
    });
    $(".welcome .wrapper .welcome-header .welcome-carousel .slick-prev").click(function(){
      q++;
      if(q>=rasmlar.length)q=0;
      $(".welcome .wrapper .welcome-img img").attr("src",rasmlar[q]);
    });
});