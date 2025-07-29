// Funcionalidades do carrossel
document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 50,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Quantidade de imagens de acordo com o tamanho
        breakpoints: {
            0:{
                slidesPerView: 1
            },
            769:{
                slidesPerView: 3
            }
        }
    });
})

// Animação das seções 
document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll(".escondido")

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry =>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("animacao");
                    entry.target.classList.remove("escondido");
                }
                else{
                    entry.target.classList.remove("animacao");
                    entry.target.classList.add("escondido");
                }
            })
        },

        {
            root: null,
            threshold: 0,
        }
    );

    elementos.forEach(el => observer.observe(el));
})

    
// Gerenciamento do header
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const sentinelaMQ = document.querySelector("#sentinela-mq");
    const sentinela = document.querySelector("#sentinela");
    const menu = document.querySelector(".menu");

    const observer = new IntersectionObserver(
        entries => {
            const entry = entries[0];

            if (entry.isIntersecting) {
                header.classList.add("header-static");
                menu.classList.add("header-static");

                // Espera a animação para sumir o menu
                menu.addEventListener("transitionend", function onTransitionEnd() {
                    menu.classList.add("menu-none");
                    menu.removeEventListener("transitionend", onTransitionEnd); 
                });
            } 
            else {
                header.classList.remove("header-static");
                menu.classList.remove("header-static");
            }
        },
        {
            root: null,
            threshold: 0,
        }
    );
    observer.observe(sentinela);
    observer.observe(sentinelaMQ);
});

// Menu Hambúrguer 
document.addEventListener("DOMContentLoaded", function() {
    const hamburguer = document.querySelector(".hamburguer");
    const menu = document.querySelector(".menu");

    hamburguer.addEventListener("click", function() {
        if (menu.classList.contains("menu-none")){
            menu.classList.remove("menu-none")
        }
        else {
            menu.classList.add("menu-none")
        }
    })
})