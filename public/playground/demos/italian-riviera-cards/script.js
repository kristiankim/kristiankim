const cards = [...document.querySelectorAll('.place-card')];
const cardList = document.querySelector('.cards');

function activateCard(selectedCard, { animate = true } = {}) {
  if (selectedCard.classList.contains('is-active')) return;

  if (!animate) cardList.classList.add('is-keyboard-switch');

  cards.forEach((card) => {
    const active = card === selectedCard;
    card.classList.toggle('is-active', active);
    card.setAttribute('aria-expanded', String(active));
  });

  if (!animate) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => cardList.classList.remove('is-keyboard-switch'));
    });
  }
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => activateCard(card));
  card.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
    const next = cards[(index + direction + cards.length) % cards.length];
    activateCard(next, { animate: false });
    next.focus();
  });
});
