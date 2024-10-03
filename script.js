<div class="experimental">
    <button id="expButton">Button</button>
</div>

<script>
    // Получаем кнопку и родительский контейнер
    const button = document.getElementById('expButton');
    const experimentalBlock = document.querySelector('.experimental');

    // Устанавливаем стили для контейнера
    experimentalBlock.style.position = 'relative';

    // Устанавливаем стили для кнопки
    button.style.position = 'absolute';
    button.style.right = '0';
    button.style.top = '-30px'; // Смещаем кнопку над контейнером
    button.style.zIndex = '10'; // Устанавливаем более высокий z-index для нахождения поверх элементов
</script>
