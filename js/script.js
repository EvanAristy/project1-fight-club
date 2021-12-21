// DOM Queries
const welcomeDiv = document.querySelector("#welcome");
const charDiv = document.querySelector("#character-select");
const fightDiv = document.querySelector("#arena");
const title = document.querySelector("#intro")

const game = {
    continue: () => {
        welcomeDiv.classList.add('hide');
        charDiv.classList.remove('hide');
    },

    fight: () => {
        charDiv.classList.add('hide');
        fightDiv.classList.remove('hide');
        fightDiv.classList.add('flex')
        title.classList.add('hide')
    }
}

