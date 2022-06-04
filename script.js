const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
//Button click
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    //client height
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0;
        }
    //Down arrow functionality
    }else if(direction =='down'){
        activeSlideIndex--
        //If less than 0 it will set the slide to the last slide in the index.
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }

    }
//slide motion
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}