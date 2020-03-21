const navList = document.querySelector(".main_navigation--list");
const navLinks = document.querySelectorAll(".main_navigation--link");
let currentActiveNavLink;
const header = document.querySelector('header');
let headerHeight = header.getBoundingClientRect().height + 5;
let sections = [];

document.querySelectorAll('section').forEach((element)=>{
    sections.push(element);
});
let sectionsCount = sections.length;

navList.addEventListener('click', function (event) {
    if(event.target.classList.contains('main_navigation--link')){
        event.preventDefault();
        let anchorId = event.target.getAttribute('href').slice(1);
        document.getElementById(`${anchorId}`).scrollIntoView({behavior: 'smooth'});
    }
})

document.addEventListener('scroll', function(){
    for (let i =0; i < sections.length; i++){
        if(sections[i].getBoundingClientRect().top < headerHeight && sections[i].getBoundingClientRect().bottom > headerHeight){
            navLinks.forEach((element)=>{
                element.classList.remove('main_navigation--link-active');
            });
            document.querySelector(`a[href="#${sections[i].classList[0]}_anchor"`).classList.add('main_navigation--link-active');
        }
    }
    if (window.innerHeight + scrollY >= document.body.scrollHeight-1){
        navLinks.forEach((element)=>{
            element.classList.remove('main_navigation--link-active');
        });
        document.querySelector(`a[href="#${sections[sectionsCount-1].classList[0]}_anchor"`).classList.add('main_navigation--link-active');
    }
});


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

let sliderItemsImages = document.querySelectorAll(`.slider--item_image`);
console.log(sliderItemsImages);
sliderItemsImages.forEach((element)=>{
    element.addEventListener('click', function(){
        if (element.classList.contains('slider--item_image-active')){
            element.src = element.src.slice(0,-6)+'of.png';
            element.classList.remove('slider--item_image-active')
        } else {
            element.src = element.src.slice(0,-6)+'on.png';
            element.classList.add('slider--item_image-active');
        }
        
    })
})

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

////////QUOTE
const form = document.querySelector('.quote--form');
const popUp = document.querySelector('.popUp');
const popUpMessage = document.querySelector('.popUp--text');
let popUpButton = document.querySelector('.popUp--message_button');
console.log(popUp)

function isPopUpMessageClick(event){
    if (!event.target.classList.contains('popUp--message')){
        console.log("!!!!!!!!!")
        //popUp.style.cssText = 'display: none';
    }
}

form.addEventListener('submit', function(){
    event.preventDefault();
    let theme = 'Без темы';
    let description = 'Без описания';
    if (document.querySelectorAll('.quote_form--input')[2].value){
        theme = document.querySelectorAll('.quote_form--input')[2].value;
    }
    if (document.querySelector('.quote_form--input-large').value){
        description = document.querySelector('.quote_form--input-large').value;
    }
    popUpMessage.innerHTML = `Письмо отправлено<br> Тема: ${theme}<br>Описание: ${description}`;
    popUp.style.cssText = 'display: flex';
    
});

popUpButton.addEventListener('click', function(){
    popUp.style.display = 'none';
    form.reset();
});

popUp.addEventListener('click',function(){
    if(!event.target.classList.contains('.popUp--message')){
        popUp.style.display = 'none';
        form.reset();
    }
})



