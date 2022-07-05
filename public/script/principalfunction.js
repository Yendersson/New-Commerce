// MOBILE MENU VARIABLES
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');



for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

    // MOBILE MENU FUNCTION
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
}


// ACCORDION VARIABLES
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');



for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function () {
        const clickedBtn = this.nextElementSibling.classList.contains('active');

        for (let i = 0; i < accordion.length; i++) {
            if (clickedBtn) break;
            if (accordion[i].classList.contains('active')) {
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');

            }

        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');

    });
}

/*********************************************MODAL FUNCTION******************************************************** */

let modal = document.querySelectorAll('.inicio');
modal.forEach(boton =>{
    boton.addEventListener('click', ()=>{
        document.querySelector('.modal').classList.add('modal-show');
    })
})


document.querySelector('#close').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.modal').classList.remove('modal-show');

})

document.querySelector('#form').addEventListener('submit', (e)=>{
    e.preventDefault()
})

/*****************************************FORM FUNCTION********************************************** */

const form = document.querySelector('#form');
let btnLogin = document.querySelector('#btn-login');
const formRegistro = document.querySelector('#form-register');
const btnRegistro = document.querySelector('#register');
const btnIncio = document.querySelector('#login');
formRegistro.style.display='none';
btnIncio.style.display = 'none';

btnLogin.addEventListener('click', (e)=>{
    e.preventDefault();

    fetch("http://localhost:8080/user/login",{
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: form.email.value,
        password: form.password.value
    })
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        // console.log(data.usuario.name);
        if(data.error == null){
            console.log('id', data.others._id);
            localStorage.setItem('_id', data.others._id);

            console.log(data.accessToken);
            document.cookie = `token=${data.accessToken}`;

        //    location.href = '/';
            // localStorage.setItem('user', data.usuario.name);

        }else{
            document.querySelector('#alerta').innerHTML = data.error
        }
    })

})

btnRegistro.addEventListener('click', ()=>{
    form.style.display = 'none';
    formRegistro.style.display = 'block';
    btnRegistro.style.display = 'none';
    btnIncio.style.display = 'block';

})

btnIncio.addEventListener('click', ()=>{
    form.style.display = 'block';
    formRegistro.style.display='none';
    btnIncio.style.display = 'none';
    btnRegistro.style.display = 'block';
});


let btnRegister = document.querySelector('#btn-register');



btnRegister.addEventListener('click', (e)=>{
    e.preventDefault();

    fetch("https://ncapirest.glitch.me//newcommerce/v1/user/register",{
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: formRegistro.name.value,
        email: formRegistro.email.value,
        password: formRegistro.password.value
    })
    })
    .then(res=>res.json())
    .then(data=>{

        if(data.error = null){
        console.log(data)
        // console.log(data.usuario.name);
        }else{
            document.querySelector('#alerta').innerHTML = data.error
        }
    })

})