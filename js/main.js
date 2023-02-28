const labelActive1 = document.querySelector('.hero-left__radio-1');
const labelActive2 = document.querySelector('.hero-left__radio-2');
const labelActive3 = document.querySelector('.hero-left__radio-3');
const labelActive4 = document.querySelector('.hero-left__radio-4');

const radioButtons1 = document.querySelector('.radio-1')
const radioButtons2 = document.querySelector('.radio-2')
const radioButtons3 = document.querySelector('.radio-3')
const radioButtons4 = document.querySelector('.radio-4')

radioButtons1.addEventListener('click', () => {
    labelActive1.classList.add('label-hover')
    labelActive2.classList.remove('label-hover')
    labelActive3.classList.remove('label-hover')
    labelActive4.classList.remove('label-hover')
})

radioButtons2.addEventListener('click', () => {
    labelActive1.classList.remove('label-hover')
    labelActive2.classList.add('label-hover')
    labelActive3.classList.remove('label-hover')
    labelActive4.classList.remove('label-hover')
})
radioButtons3.addEventListener('click', () => {
    labelActive1.classList.remove('label-hover')
    labelActive2.classList.remove('label-hover')
    labelActive3.classList.add('label-hover')
    labelActive4.classList.remove('label-hover')
})
radioButtons4.addEventListener('click', () => {
    labelActive1.classList.remove('label-hover')
    labelActive2.classList.remove('label-hover')
    labelActive3.classList.remove('label-hover')
    labelActive4.classList.add('label-hover')
})