function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display="inline";
        btn.innerHTML="Читать далее";
        more.style.display="none";
    } else{
        dots.style.display="none";
        btn.innerHTML="Скрыть";
        more.style.display="inline";
    }
    
};


document.getElementById('toggleButton').addEventListener('click', function() {
    const block = document.getElementById('myBlock');
    if (block.style.display === 'none' || block.style.display === '') {
        block.style.display = 'flex';
        this.textContent = 'Скрыть блок';
    } else {
        block.style.display = 'none';
        this.textContent = 'Показать блок';
    }
});




function initSwiper() {
    if (window.innerWidth < 768) {
        swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1.5,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (swiper) {
        swiper.destroy(); // Уничтожаем Swiper, если он уже инициализирован
        swiper = null; // Обнуляем переменную
    }
}

window.addEventListener('resize', initSwiper);
window.addEventListener('load', initSwiper);