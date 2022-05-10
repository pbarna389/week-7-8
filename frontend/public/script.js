const menuButtonComponent = () => {
    return `
        <button id="menu-btn">
        </button>
    `
}

const loadEvent = () => {
    const rootEl = document.querySelector('#root');
    // console.log(rootEl.parentElement)

    rootEl.insertAdjacentHTML('beforeend', menuButtonComponent());

    const menuButtonEl = document.querySelector('#menu-btn');

    menuButtonEl.addEventListener('click', function (event) {
        // event.currentTarget.classList.toggle('clicked');
        // rootEl.classList.toggle('white-backg');
        console.log(event.currentTarget.parentElement);
        console.log(event.currentTarget.closest('#root'))

        event.currentTarget.closest("#root").classList.toggle('menu-opened');
    });
};

window.addEventListener('load', loadEvent);