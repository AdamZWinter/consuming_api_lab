//wait until the page loads!
window.onload = async function() {
    //await fetchIcons();

    addCards()

    //set an event handler for submitting a new joke
    // let addJokeButton = document.querySelector("button");
    // addJokeButton.onclick = addJoke;
    //
    // console.log("onload() ended");
};

function addCards()
{

    let section = document.querySelector("#icon-grid");
    for (let i = 0; i < 25; i++)
    {
        addIcon(section);
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

function addIcon(section)
{
    //create HTML elements
    let div = document.createElement("div");
    //let h1 = document.createElement("h1");
    //let p = document.createElement("p");

    //connect them (parent to child)
    //div.appendChild(h1);
    //div.appendChild(p);

    //add text or HTML attributes
    //h1.textContent = `Joke #${joke.id}`;
    //p.textContent = joke.jokeText;
    div.className = "card";

    //add the div to the section
    section.appendChild(div);
}