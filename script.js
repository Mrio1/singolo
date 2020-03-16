const navList = document.querySelector(".main_navigation--list");

let currentActiveNavLink;

navList.addEventListener('click', function (event) {
    if(event.target.classList.contains('main_navigation--link')){
        if(!event.target.classList.contains('main_navigation--link-active')) {
            let newActiveNavLink = event.target;
            newActiveNavLink.classList.add(event.target.className+'-active');
            if (currentActiveNavLink){
                currentActiveNavLink.classList.remove('main_navigation--link-active');
            }
            currentActiveNavLink = newActiveNavLink;
        }
    } 
})


///////////////SLIDER
let leftArrow = document.querySelector('.slider--arrow_left');
let rightArrow = document.querySelector('.slider--arrow_right');
let sliderList = document.querySelector('.slider--list');
console.log(leftArrow)

let slides = document.querySelectorAll('.slider--item');
let slidesLength = slides.length;
let sliderOffsetLeft = slides[0].offsetLeft;
let sliderCounter = 0;

rightArrow.addEventListener('click', function(){
    sliderCounter++;
    if (sliderCounter >= slidesLength){
        sliderCounter = 0;
    }
    sliderList.style.marginLeft = `${sliderOffsetLeft - 1020*sliderCounter}px`;
    
    console.log(sliderCounter);
})

leftArrow.addEventListener('click', function(){
    sliderCounter--;
    if (sliderCounter < 0){
        sliderCounter = slidesLength - 1;
    }
    sliderList.style.marginLeft = `${sliderOffsetLeft - 1020*sliderCounter}px`;
});

for (let i = 0; i < slidesLength; i++){
    let sliderItems = document.querySelectorAll(`.slider--item${i+1}_image`);
    let sliderItemMode = true;
    //console.log(sliderItem1[0].src.slice(0,-6))
    sliderItems.forEach((element)=>{
        element.addEventListener('click', function(){
            if (sliderItemMode){
                element.src = element.src.slice(0,-6)+'of.png';
                sliderItemMode = false;
            } else {
                element.src = element.src.slice(0,-6)+'on.png';
                sliderItemMode = true;
            }
            
        })
    })
}
