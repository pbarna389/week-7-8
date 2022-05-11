const menuButtonComponent = () => {
    return `
        <button id="menu-btn">
        </button>
    `
};

const beerNavComponent = (inner) => {
    return `
        <nav>
            ${inner}
        </nav>
    `
};

const beerAnchorComponent = (title, id) => {
    return `
        <a href="#${id}">${title}</a>
    `
};

const beerSectionComponent = (title, company, type, id) => {
    return `
        <section id="${id}">
            <h2 class="beerName">Name: ${title}</h2>
            <h3 class="beerCompany">Company: ${company}</h3>
            <h4 class="beerType">Type: ${type}</h4>
        </section>
    `
};

const menuButtonClickEvent = event => {
    event.currentTarget.closest("#root").classList.toggle('menu-opened');
};

const loadEvent = () => {
    const rootEl = document.querySelector('#root');

    rootEl.insertAdjacentHTML('beforeend', menuButtonComponent());

    const menuButtonEl = document.querySelector('#menu-btn');

    menuButtonEl.addEventListener('click', menuButtonClickEvent);

    let beerSections = "";
    let beerCards = beers.cards;
    for (const element of beers.cards) {
        beerSections += beerSectionComponent(element.title, element.sub, element.text);
    };

    rootEl.insertAdjacentHTML('beforeend', beerSections);

    let beerAnchors = "";
    for (const element of beers.cards) {
        beerAnchors += beerAnchorComponent(element.title);
    };

    rootEl.insertAdjacentHTML('beforeend', beerNavComponent(beerAnchors));
};

window.addEventListener('load', loadEvent);

    // beerCards.forEach((element, index) =>
    //     beerSections += beerSectionComponent(element.title, element.sub, element.text, `0${index + 1}`)
    // );

    // !!!!Ez is egy anonym-function - a végére kell a meghíváshoz ()!!!!
    // (function () {
    //     console.log("blablabla")
    // })();