const menuButtonComponent = () => {
    return `
        <button id="menu-btn">
        </button>
    `
}

const loadEvent = () => {
    const rootEl = document.querySelector('#root');

    rootEl.insertAdjacentHTML('beforeend', menuButtonComponent());

    const menuButtonEl = document.querySelector('#menu-btn');

    menuButtonEl.addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('clicked');
    });
};

window.addEventListener('load', loadEvent);