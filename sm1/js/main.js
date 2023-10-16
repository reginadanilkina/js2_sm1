const headerBtn = document.querySelector('.header_button')
const headerLk = document.querySelector('.header_lk');

headerBtn.addEventListener('mouseover',()=>{
    headerLk.style.display = 'block'
})
headerBtn.addEventListener('mouseout',()=>{
    headerLk.style.display = 'none'
})

const navLink = document.querySelectorAll('.nav_link')

navLink.forEach(element => {
    element.addEventListener('mouseover',()=>{
        console.log(element)
    })
});