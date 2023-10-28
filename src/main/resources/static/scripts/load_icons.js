//wait until the page loads!
window.onload = async function() {
    await fetchIcons();

    //addCards();

    //set an event handler for submitting a new joke
    // let addJokeButton = document.querySelector("button");
    // addJokeButton.onclick = addJoke;
    //
    // console.log("onload() ended");
};

async function fetchIcons()
{
    let uri = "http://localhost:8080/api/v1/icons";
    let config = {
        method: "get"
    };
    let response = await fetch(uri, config);
    let json = await response.json();
    addCards(json);

    /*    fetch(uri, config)
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(json) {
                console.log(json);
            });*/
}

function addCards(json)
{

    let section = document.querySelector("#icon-grid");
    for (let i = 0; i < json.length; i++)
    {
        //let iconJson = JSON.parse(json[i]);
        addIcon(section, json[i].imagePath);
        //addIcon(section, iconJson.id);
        //let joke = jokesArray[i];
        //addSingleJoke(joke, section);

        //assemble the HTML for a joke using a string-template literal
        /*let html = `<div class="card">
                <h1>Joke #<span id="joke-id">${joke.id}</span></h1>
                <p id="joke-body">${joke.jokeText}</p>
            </div>`;*/

        //section.innerHTML += html; //section.innerHTML = section.innerHTML + html;
    }
}

function addIcon(section, id)
{
    //create HTML elements
    let div = document.createElement("div");
    let img = document.createElement("img");
    //let h1 = document.createElement("h1");
    //let p = document.createElement("p");

    //connect them (parent to child)
    //div.appendChild(h1);
    //div.appendChild(p);

    //add text or HTML attributes
    //h1.textContent = `Joke #${joke.id}`;
    //h1.textContent = id;
    //p.textContent = joke.jokeText;
    div.className = "card";
    img.src = id;

    //add the div to the section
    //div.appendChild(h1);
    div.appendChild(img);
    section.appendChild(div);
}