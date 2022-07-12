const sliderContainer = document.querySelector('.slider-container')
const slideLeft = document.querySelector('.left-slide')
const slideRight = document.querySelector('.right-slide')
const leftBtn = document.querySelector('.down-button')
const rightBtn = document.querySelector('.up-button')
const slidesLength = slideLeft.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

leftBtn.addEventListener('click', () => changeSlide('down'))
rightBtn.addEventListener('click', () => changeSlide('up'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if(direction === 'up') {
    activeSlideIndex++
    if(activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  } else if(direction === 'down') {
    activeSlideIndex--
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLength -1
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}