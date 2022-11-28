//Change Navbar Styles on Scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50)
})

//Show or Hide FAQs Answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'fa-plus'){
            icon.className = "fa-solid fa-minus"
        }else{
            icon.className = "fa-solid fa-minus"
        }
    })
})

//Show or Hide Nav Menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)