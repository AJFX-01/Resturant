let menuHTML = '';
let expertHTML ='';
let testimonialHTML = '';


getMenu();
getExpert();
getTesti();

// Fucntion to get the menu
function getMenu() {
    menus.forEach((menu) => {
        menuHTML += `
        <div class="box">
            <div class="imgBx">
                <img src="${menu.image}">
            </div>
            <div class="text">
                <h3>${menu.name}</h3>
            </div>
        </div>`
    });
    document.querySelector('.js-menu').innerHTML = menuHTML;
    
}

// function to get the experts
function getExpert() {
    experts.forEach((expert) => {
        expertHTML +=`
        <div class="box">
            <div class="imgBx">
                <img src="${expert.image}">
            </div>
            <div class="text">
                <h3>${expert.name}</h3>
            </div>
        </div>`
    });
    document.querySelector('.js-experts').innerHTML = expertHTML;
}

// function to render the html for testimonial
function getTesti() {
    testimonials.forEach((testi) => {
        testimonialHTML +=`
        <div class="box">
            <div class="imgBx">
                <img src="${testi.image}">
            </div>
            <div class="text">
                <p>${testi.details}</p>
                <h3>${testi.tag}</h3>
             </div>
        </div>`
    });
    document.querySelector('#testi').innerHTML = testimonialHTML;
}