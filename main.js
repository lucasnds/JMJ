const cardInners = document.querySelectorAll('.card__inner');

cardInners.forEach(cardInner => {
    cardInner.addEventListener('click', event => {
        cardInner.classList.toggle('is-flipped');
    });
});