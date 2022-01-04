// DOM Queries
const welcomeDiv = document.querySelector("#welcome");
const charDiv = document.querySelector("#character-select");
const fightDiv = document.querySelector("#arena");
const title = document.querySelector("#intro");
const attackButtons = document.querySelector("#attack-buttons")

// Players
const p1Name = document.querySelector("#p1name");
const p2Name = document.querySelector("#p2name");

let currAvatar = "";
class Player {
  constructor(name, avatar, ap, hp) {
    this.name = name;
    this.avatar = avatar;
    this.ap = ap;
    this.hp = hp;
  }
}

const game = {
  continue: () => {
    welcomeDiv.classList.add("hide");
    charDiv.classList.remove("hide");
    if (p1Name.value === "") {
      document.querySelector("#p1").innerHTML = "Player 1";
    } else {
      document.querySelector("#p1").innerHTML = p1Name.value;
    }
    if (p2Name.value === "") {
      document.querySelector("#p2").innerHTML = "Player 2";
    } else {
      document.querySelector("#p2").innerHTML = p2Name.value;
    }
  },

  players: [],
  playerOneReady: false,
  choosePlayer: function (currAvatar) {
    if (!this.playerOneReady) {
      document.querySelector("#p1-avatar").innerHTML = currAvatar;
      document.querySelector("#p1Idle").setAttribute("src", `images/${currAvatar}-idle.gif`);
    } else {
      document.querySelector("#p2-avatar").innerHTML = currAvatar;
      document.querySelector("#p2Idle").setAttribute("src", `images/${currAvatar}-idle.gif`);
    }
  },

  confirm() {
    if (!this.playerOneReady) {
      document.querySelector("#prompt").innerHTML =
        "Player 2, choose your fighter";
      this.playerOneReady = true;
      this.players.push(new Player(p1Name.value, document.querySelector("#p1-avatar").innerHTML, Math.floor(Math.random()*7) + 2, 50));
    } else {
      document.querySelector("#prompt").innerHTML = "Let's Fight!!";
      this.playerTwoReady = true;
      document.querySelector("#confirm").classList.add("hide");
      document.querySelector("#fight").classList.remove("hide");
      this.players.push(new Player(p2Name.value, document.querySelector("#p2-avatar").innerHTML, Math.floor(Math.random()*7) + 2, 50));
    }
  },

  fight: () => {
    charDiv.classList.add("hide");
    fightDiv.classList.remove("hide");
    fightDiv.classList.add("flex");
    title.classList.add("hide");
    attackButtons.classList.remove("hide")
    attackButtons.classList.add("flex")
    // document.querySelector("#p1").innerHTML = game.players[0].name
    // document.querySelector("#p2").innerHTML = game.players[1].name
    document.querySelector("#avatar1").setAttribute("src", `images/${game.players[0].avatar}-idle.gif`);
    document.querySelector("#avatar2").setAttribute("src", `images/${game.players[1].avatar}-idle.gif`);
    document.querySelector("#name1").innerHTML = game.players[0].name;
    document.querySelector("#name2").innerHTML = game.players[1].name;
  },

  attack1: () => {
    document.querySelector("#avatar1").setAttribute('src', `images/${game.players[0].avatar}-attack${Math.floor(Math.random()*4)+1}.gif`);
    setTimeout(() => {
      document.querySelector("#avatar1").setAttribute('src', `images/${game.players[0].avatar}-idle.gif`);
    }, 3000);
    game.players[1].hp -= game.players[0].ap;
    document.querySelector("#p2health").innerHTML = game.players[1].hp;
    if(game.players[1].hp < 0){
      document.querySelector("#avatar2").setAttribute('src', `images/${game.players[1].avatar}-ko.gif`);
      document.querySelector("#avatar1").setAttribute('src', `images/${game.players[0].avatar}-victory.gif`);
      setTimeout(() => {
        alert(`${game.players[0].name} won using ${game.players[0].avatar}!!!`)
      }, 2000);
    }
  },
  attack2: () => {
    document.querySelector("#avatar2").setAttribute('src', `images/${game.players[1].avatar}-attack${Math.floor(Math.random()*4)+1}.gif`);
    setTimeout(() => {
      document.querySelector("#avatar2").setAttribute('src', `images/${game.players[1].avatar}-idle.gif`);
    }, 3000);
    game.players[0].hp -= game.players[1].ap;
    document.querySelector("#p1health").innerHTML = game.players[0].hp;
    if(game.players[0].hp < 0){
      document.querySelector("#avatar1").setAttribute('src', `images/${game.players[0].avatar}-ko.gif`);
      document.querySelector("#avatar2").setAttribute('src', `images/${game.players[1].avatar}-victory.gif`);
      setTimeout(() => {
        alert(`${game.players[1].name} won using ${game.players[1].avatar}!!!`)
      }, 2000);
    }
  },

// game logic


};
// if(game.players[0].hp < 0){
//   document.querySelector("#avatar1").setAttribute('src', `images/${game.players[0].avatar}-ko.gif`);
//   document.querySelector("#avatar2").setAttribute('src', `images/${game.players[1].avatar}-victory.gif`);
// } else if(game.players[1].hp < 0){
//   document.querySelector("#avatar2").setAttribute('src', `images/${game.players[1].avatar}-ko.gif`);
//   document.querySelector("#avatar1").setAttribute('src', `images/${game.players[0].avatar}-victory.gif`);
// }
