// DOM Queries
const welcomeDiv = document.querySelector("#welcome");
const charDiv = document.querySelector("#character-select");
const fightDiv = document.querySelector("#arena");
const title = document.querySelector("#intro");

// Players
const p1Name = document.querySelector("#p1name");
const p2Name = document.querySelector("#p2name");

//Avatars
const ryu = document.querySelector("#ryu");
const akuma = document.querySelector("#akuma");

class Player {
  constructor(name, avatar, ap) {
    this.name = name;
    this.avatar = avatar;
    this.ap = ap;
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
	choosePlayer: function(currAvatar){
  if(!this.playerOneReady){
    document.querySelector("#p1-avatar").innerHTML = currAvatar;
    document.querySelector("#p1Idle").setAttribute("src", `images/${currAvatar}-idle.gif`);
  } else{
    document.querySelector("#p2-avatar").innerHTML = currAvatar;
    document.querySelector("#p2Idle").setAttribute("src", `images/${currAvatar}-idle.gif`);
  }  
  },

  confirm(){
    if(!this.playerOneReady){
      // this.players.push(new Player(p1Name.value, currAvatar, 5));
      document.querySelector("#prompt").innerHTML = "Player 2, choose your fighter"
      this.playerOneReady = true
    } else{
      // this.players.push(new Player(p2Name.value, currAvatar, 5));
      document.querySelector("#prompt").innerHTML = "Let's Fight!!"
      this.playerTwoReady = true
      document.querySelector("#confirm").classList.add('hide');
      document.querySelector("#fight").classList.remove('hide');
    }
  },

  fight: () => {
    charDiv.classList.add("hide");
    fightDiv.classList.remove("hide");
    fightDiv.classList.add("flex");
    title.classList.add("hide");
    
  },
};
