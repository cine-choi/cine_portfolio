$(function(){
  // slick Slider - Welcome 
  $('.slideshow').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });
// TypeIt - welcome
$('#typing').typeIt({
  strings: ["Passion.", "Diligence.", "Creative Idea."],
  speed: 100,
  autoStart: true,
  breakLines: false,
 });
})

$(function(){
  $('.skiils-desc').eq(0).show()
  $('.skills-title').click(function(){
    $(this).next().stop().slideDown()
    $(this).parent().siblings().children('.skiils-desc').stop().slideUp()
    $(this).parent().addClass('active')
    $(this).parent().siblings().removeClass('active')
  })
})
  //  Header Scroll Change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50 ) {
      $('header, .btn-top').addClass('active')
  
    }
    else {
      $('header, .btn-top').removeClass('active')
    }
  })

$(function(){
  $('.skiils-desc').eq(6).show()
  $('.skills-title2').click(function(){
    $(this).next().stop().slideDown()
    $(this).parent().siblings().children('.skiils-desc').stop().slideUp()
    $(this).parent().addClass('active')
    $(this).parent().siblings().removeClass('active')
  })
})

$(function(){


  const btn_tab = $('.recomm_tab a.btn_tab');
  const recomm_list = $('.recomm_list');

  btn_tab.click(recomm);

  function recomm(e){
    e.preventDefault();

    const idx = $(this).index();
    console.log(idx)

    btn_tab.removeClass('On');
    $(this).addClass('On');

    recomm_list.removeClass('Act');
    recomm_list.eq(idx).addClass('Act');
  }

  // header trigger
$('.trigger').click(function(){
  $(this).toggleClass('active')
  $('.menu').toggleClass('active')
})
$('.menu a, section').click(function(){
  $('.menu, .trigger').removeClass('active')
})

})



