
// Header toogle start
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', ()=> {
    document.querySelector('body').classList.toggle('toggle-header')
    MenuBtn.classList.toggle('fa-xmark')
})

console.log('Hello world')
// Header toogle end

//#####################

// #### Typing animation start
let type = new Typed('.TypingAnimation', {
    strings: ['Hold your best moment', 'capture your moment'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,

})

// #### Typing animation end

//############################