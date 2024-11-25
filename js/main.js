$(function () {
   $('.Calculator-slider').slick({
      arrows: false
   })
   $('.slider-button-next').on('click', function (e) {
      e.preventDefault()
      $('.Calculator-slider').slick('slickNext')
   })
})
/* ----------------------------------------------------------------------------------------------------------------------------- */
const number_2X2_1 = document.getElementById('number_2X2_1')
const number_2X2_2 = document.getElementById('number_2X2_2')
const number_2X2_3 = document.getElementById('number_2X2_3')
const number_2X2_4 = document.getElementById('number_2X2_4')

const number_3X3_1 = document.getElementById('number_3X3_1')
const number_3X3_2 = document.getElementById('number_3X3_2')
const number_3X3_3 = document.getElementById('number_3X3_3')
const number_3X3_4 = document.getElementById('number_3X3_4')
const number_3X3_5 = document.getElementById('number_3X3_5')
const number_3X3_6 = document.getElementById('number_3X3_6')
const number_3X3_7 = document.getElementById('number_3X3_7')
const number_3X3_8 = document.getElementById('number_3X3_8')
const number_3X3_9 = document.getElementById('number_3X3_9')
/* ------------------------------------------------------------------------------------------------------------------------------------- */
const creatBtn = document.getElementById('button-creat')
const Calculator2X2Equals = document.getElementById('Calculator__2X2--equals')

const Answer = number_2X2_1.value*number_2X2_4.value  - number_2X2_3.value*number_2X2_2.value 

creatBtn.onclick = function () {
   Calculator2X2Equals.innerHTML = `<div class="Calculator-slider_2X2--equals" id="Calculator__2X2--equals">= ${number_2X2_1.value}*${number_2X2_4.value}  - ${number_2X2_3.value}*${number_2X2_2.value}  = ${Answer} </div>`
}


