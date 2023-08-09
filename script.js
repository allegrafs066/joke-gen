document.getElementById('new-joke').addEventListener('click', getJoke);

function getJoke() {
    fetch('https://v2.jokeapi.dev/joke/Programming')
    .then(response => response.json())
    .then(data => {
        let joke;
        if(data.type === "single") {
            joke = data.joke;
        } else { // for two-part jokes
            joke = `${data.setup} ... ${data.delivery}`;
        }
        // Display the joke on your webpage
        document.getElementById('joke-text').innerText = joke;
    });
}

// Optionally, load a joke on initial page load:
getJoke();
