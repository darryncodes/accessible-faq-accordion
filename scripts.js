const btns = document.querySelectorAll('.btn');
const description = document.querySelectorAll('.accordion__description');

const handleClick = (e) => {
    const accordionItem = e.currentTarget.parentElement;

    accordionItem.classList.toggle('open');

    description.forEach((item) => {
        if (accordionItem.classList.contains('open')) {
            item.setAttribute('aria-hidden', false);
        } else {
            item.setAttribute('aria-hidden', true);
        }
    });
    btns.forEach((btn) => {
        if (btn.parentElement.classList.contains('open')) {
            btn.setAttribute('aria-expanded', true);
        } else {
            btn.setAttribute('aria-expanded', false);
        }
    });
};

document.addEventListener('keydown', (e) => {
    btns.forEach((btn) => {
        if (
            e.key === 'Escape' &&
            btn.parentElement.classList.contains('open')
        ) {
            btn.parentElement.classList.remove('open');
        }
    });
});

btns.forEach((btn) => {
    btn.addEventListener('click', handleClick);
});
