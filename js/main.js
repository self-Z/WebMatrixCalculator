$(function () {
   $('.Calculator-slider').slick({
arrows: false
   })
   $('.slider-button-next').on('click', function(e){
      e.preventDefault()
$('.Calculator-slider').slick('slickNext')
   })
})


