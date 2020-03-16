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
const leftArrow = document.querySelector('.slider--arrow_left');
const rightArrow = document.querySelector('.slider--arrow_right');
const sliderList = document.querySelector('.slider--list');
const slides = document.querySelectorAll('.slider--item');
const slidesLength = slides.length;
let sliderOffsetLeft = slides[0].offsetLeft;
let sliderCounter = 0;

rightArrow.addEventListener('click', function(){
    sliderCounter++;
    if (sliderCounter >= slidesLength){
        sliderCounter = 0;
    }
    sliderList.style.marginLeft = `${sliderOffsetLeft - 1020*sliderCounter}px`;
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

////////////PORTFOLIO
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function mixGridElements(){
    const gridElements = document.querySelectorAll('.portfolio--samples_item');
    let numberArr = [];
    for (let i = 1; i <= gridElements.length; i++){
        numberArr.push(i);
    }
    gridElements.forEach((element)=>{
        let orderNum = randomInteger(0,numberArr.length-1);
        numberArr = numberArr.slice(0, orderNum).concat(numberArr.slice(-orderNum));
        element.style.order = numberArr[orderNum];
    })
}

const filterItems = document.querySelectorAll(".filter--item");
let currentActiveFilterItem = false;
filterItems.forEach((element)=>{
    element.addEventListener('click', function(event){
        event.preventDefault();
        if (!currentActiveFilterItem){
            mixGridElements();
            currentActiveFilterItem = element;
            element.classList.add('filter--item-active');
        } else if (currentActiveFilterItem != element){
            mixGridElements();
            element.classList.add('filter--item-active');
            currentActiveFilterItem.classList.remove('filter--item-active');
            currentActiveFilterItem = element;
        }
    })
})

const portfolioGrid = document.querySelector('.portfolio--samples');
const portfolioSamples = document.querySelectorAll('.portfolio--samples_item');
let activeSamplesItem = false;

portfolioGrid.addEventListener('click',function(event){
    let target = event.target;
    if(target.classList.contains('portfolio--samples_item')){
        if (!activeSamplesItem){
            activeSamplesItem = target;
            target.classList.add('portfolio--samples_item-active');
        } else if (activeSamplesItem !== target){
            target.classList.add('portfolio--samples_item-active');
            activeSamplesItem.classList.remove('portfolio--samples_item-active');
            activeSamplesItem = target;
        }
    }
})
