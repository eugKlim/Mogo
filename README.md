# Проект написан на:

- React 18.2.0
- Scss
- Компилятор Vite

<br>

# Что реализовано в этом проекте?

1. При отсутствии контента, футер не прилипает к header.

2. Переиспользуемый аккордион.

3. Слайдер, библиотека splide slider.

4. Адаптация под малые устройства.

5. Переиспользуемый попап, плавность которого сделана через библиотеку react-transition-group

6. Интегрирован google maps.

7. dark mode(с записью в локальное хранилище).

8. burger menu.

9. Фиксация header при скроле.

10. Роутинг по навигацие.
    - Переходя на страницу, если контента меньше чем экран по высоте(нету скрола в низ), то скролл пропадать не будет.
    - Пока страница подгружается, отображается спинер.

11. lazyloading для фото.
 
12. Мета теги через библиотеку react-helmet.

13. На телефонах/планшетах hover блоки будут вызваны при нажатии на кнопку.

14. Теги для скрин ридеров и семантическая верстка ( accessibility ).

15. Использован формат изображений webp.

16. В код css добавлены префиксы для поддержки старых браузеров ( autoprefixer ).

17. Для иконок использован формат изображений svg, и в коде используются технологии grid layout & flex box.

18. Так же написаны свои хуки.

19. Компонентный подход.

20. Стили написанны на фреймворке tailwind и часть кода на scss.


<br>


> В html, написан специальный код, чтобы роутинг на github-pages работал, потому что он не видит пути роутсов, и тогда github начинает искать страницу 404, в этой странице мы перенаправляем его на главную страницу. И так же страницу запрещенно перезагружать, иначе gh pages опять вернется на страницу которую он не может найти. Почему то github pages не любит роутинг(
[Ссылка на сайт](https://eugklim.github.io/Mogo/?/home)


<br>


## Как установить проект себе?
1. Клонировать репозиторий:

```ruby
git clone https://github.com/eugKlim/Mogo.git
```

2. Установить зависимости:

```ruby
npm install
```

3. Запустить проект:

```ruby
npm run dev
```


