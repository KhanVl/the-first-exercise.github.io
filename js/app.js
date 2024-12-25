const showButton = document.querySelector('.toggle-button:not(.hidden)');
const hideButton = document.querySelector('.toggle-button.hidden');
const additionalItems = document.querySelector('.services-text__more');
// Обработчик для кнопки "Показать все"
showButton.addEventListener('click', function () {
    additionalItems.style.display = 'inline-flex';
    showButton.style.display = 'none'; // Скрываем верхнюю кнопку
    hideButton.style.display = 'inline-flex'; // Показываем кнопку "Скрыть"
});
// Обработчик для кнопки "Скрыть"
hideButton.addEventListener('click', function () {
    additionalItems.style.display = 'none';
    showButton.style.display = 'inline-flex'; // Показываем верхнюю кнопку
    hideButton.style.display = 'none'; // Скрываем кнопку "Скрыть"
});
