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
        }
    });
})
    
// Gerenciamento do header
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const sentinela = document.querySelector("#sentinela");

    const observer = new IntersectionObserver(
        entries => {
            const entry = entries[0];

            if (entry.isIntersecting) {
                header.classList.add("header-static");
            } else {
                header.classList.remove("header-static");
            }
        },
        {
            root: null,
            threshold: 0,
        }
    );
    observer.observe(sentinela);
});

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