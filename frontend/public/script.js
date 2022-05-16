//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

const loadEvent = async () => {
    const rootEl = document.querySelector('#root');

    // fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    //     .then(response => {
    //         return response.json();
    //     }).then(data => {
    //         console.log(data.date);

    //         rootEl.insertAdjacentHTML('beforeend', `
    //             <img src="${data.hdurl}"</img>
    //         `)
    //     })

    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    const responseJson = await response.json();

    rootEl.insertAdjacentHTML('beforeend', `
                <img src="${responseJson.hdurl}"</img>`);

};

window.addEventListener('load', loadEvent);