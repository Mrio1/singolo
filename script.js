const navList = document.querySelector(".main_navigation--list");
console.log(navList);

const servicesLink = document.querySelector("a[href = '#portfolio']");
console.log(servicesLink);

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