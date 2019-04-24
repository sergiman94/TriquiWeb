
let toggleTurn = (turn) => {
    if (turn === "X") {
      document.getElementById("X").classList.add("hide-button");
      document.getElementById("O").classList.remove("hide-button");
    }
    else if (turn === "O") {
      
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.remove("hide-button");
    }
  }

  // permitir caida del boton 

  let allowDrop = (ev) => {
    ev.preventDefault();
    console.log("quieto");
  }
  
  // generar movimiento primer jugador

  let generarMovimiento = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    
    console.log("moviendo");
  }
 
  // generar movimiento segundo jugador

  let generarMovimiento2 = (ev) => {
    ev.preventDefault();
    if (document.getElementById(ev.target.id).hasChildNodes()) {
      return;
    }
    var play = ev.dataTransfer.getData("text");
    var playElement = document.createElement("P")
    var playText = document.createTextNode(play);
    playElement.appendChild(playText);
    ev.target.appendChild(playElement);
    toggleTurn(play);
    console.log("Move made: " + play);
    
    let grid = [[],[],[]];
    
    for (i = 1; i < 10; i++) {
      var box = document.getElementById("box" + i).innerHTML;
      box = box.replace("<p>", "");
      box = box.replace("</p>", "");
      if (i <= 3) {
        grid[0].push(box);
      }
      else if (i > 3 && i <= 6) {
        grid[1].push(box);
      }
      else {
        grid[2].push(box);
      }
    }
    for (i = 0; i<grid.length; i++) {
      console.log(grid[i]);
    } 

    // estado del juego, ganado/perdido
    let gameState = "";

    // verificaciones para generar puntaje en el juego

    if (grid[0].join("") === "XXX" || grid[0].join("") === "OOO") {
      console.log("winner!");
      gameState = "winner";
      alertWin("¡");
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.add("hide-button");
      document.getElementById("box1").firstChild.classList.add("winanimation");
      document.getElementById("box2").firstChild.classList.add("winanimation");
      document.getElementById("box3").firstChild.classList.add("winanimation");
      document.getElementById("Reset").setAttribute("style", "");
      
    }
    if (grid[1].join("") === "XXX" || grid[1].join("") === "OOO") {
      console.log("winner!");
      gameState = "winner";
      alertWin("¡");
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.add("hide-button");
      document.getElementById("box4").firstChild.classList.add("winanimation");
      document.getElementById("box5").firstChild.classList.add("winanimation");
      document.getElementById("box6").firstChild.classList.add("winanimation");
      document.getElementById("Reset").setAttribute("style", "");
      
    }
    if (grid[2].join("") === "XXX" || grid[2].join("") === "OOO") {
      console.log("winner!");
      gameState = "winner";
      alertWin("¡");
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.add("hide-button");
      document.getElementById("box7").firstChild.classList.add("winanimation");
      document.getElementById("box8").firstChild.classList.add("winanimation");
      document.getElementById("box9").firstChild.classList.add("winanimation");
      document.getElementById("Reset").setAttribute("style", "");
      
    }
    if (grid[0][0] + grid[1][0] +  grid[2][0] === "XXX" || grid[0][0] + grid[1][0] +  grid[2][0] === "OOO") {
      console.log("winner!");
      gameState = "winner";
      alertWin("¡");
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.add("hide-button");
      document.getElementById("box1").firstChild.classList.add("winanimation");
      document.getElementById("box4").firstChild.classList.add("winanimation");
      document.getElementById("box7").firstChild.classList.add("winanimation");
      document.getElementById("Reset").setAttribute("style", "");
      
    }
    if (grid[0][1] + grid[1][1] +  grid[2][1] === "XXX" || grid[0][1] + grid[1][1] +  grid[2][1] === "OOO") {
      console.log("winner!");
      gameState = "winner";
      alertWin("¡");
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.add("hide-button");
      document.getElementById("box2").firstChild.classList.add("winanimation");
      document.getElementById("box5").firstChild.classList.add("winanimation");
      document.getElementById("box8").firstChild.classList.add("winanimation");
      document.getElementById("Reset").setAttribute("style", "");
      
    }
    if (grid[0][2] + grid[1][2] +  grid[2][2] === "XXX" || grid[0][2] + grid[1][2] +  grid[2][2] === "OOO") {
      console.log("winner!");
      gameState = "winner";
      alertWin("¡");
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.add("hide-button");
      document.getElementById("box3").firstChild.classList.add("winanimation");
      document.getElementById("box6").firstChild.classList.add("winanimation");
      document.getElementById("box9").firstChild.classList.add("winanimation");
      document.getElementById("Reset").setAttribute("style", "");
      
    }
    if (grid[0][0] + grid[1][1] +  grid[2][2] === "XXX" || grid[0][0] + grid[1][1] +  grid[2][2] === "OOO") {
      console.log("winner!");
      gameState = "winner";
      alertWin("¡");
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.add("hide-button");
      document.getElementById("box1").firstChild.classList.add("winanimation");
      document.getElementById("box5").firstChild.classList.add("winanimation");
      document.getElementById("box9").firstChild.classList.add("winanimation");
      document.getElementById("Reset").setAttribute("style", "");
      
    }
    if (grid[0][2] + grid[1][1] +  grid[2][0] === "XXX" || grid[0][2] + grid[1][1] +  grid[2][0] === "OOO") {
      console.log("winner!");
      gameState = "winner";
      alertWin("¡");
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.add("hide-button");
      document.getElementById("box3").firstChild.classList.add("winanimation");
      document.getElementById("box5").firstChild.classList.add("winanimation");
      document.getElementById("box7").firstChild.classList.add("winanimation");
      document.getElementById("Reset").setAttribute("style", "");
      
    }
    if ((grid[0].join("") + grid[1].join("") + grid[2].join("")).length === 9 && gameState !== "winner") {
      document.getElementById("Reset").setAttribute("style", "");
      document.getElementById("O").classList.add("hide-button");
      document.getElementById("X").classList.add("hide-button");
      console.log("There is a draw!!");
    }
    
  }
  
  // al oprimir boton de resetear, inicializamos todo en cero
let resetGame = () => {

    document.getElementById("X").classList.remove("hide-button");
    document.getElementById("O").classList.remove("hide-button");
    
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");
    var box7 = document.getElementById("box7");
    var box8 = document.getElementById("box8");
    var box9 = document.getElementById("box9");
   
    if (box1.hasChildNodes()) {
      box1.removeChild(box1.firstChild);
    }
    if (box2.hasChildNodes()) {
      box2.removeChild(box2.firstChild);
    }
    if (box3.hasChildNodes()) {
      box3.removeChild(box3.firstChild);
    }
    if (box4.hasChildNodes()) {
      box4.removeChild(box4.firstChild);
    }
    if (box5.hasChildNodes()) {
      box5.removeChild(box5.firstChild);
    }
    if (box6.hasChildNodes()) {
      box6.removeChild(box6.firstChild);
    }
    if (box7.hasChildNodes()) {
      box7.removeChild(box7.firstChild);
    }
    if (box8.hasChildNodes()) {
      box8.removeChild(box8.firstChild);
    }
    if (box9.hasChildNodes()) {
      box9.removeChild(box9.firstChild);
    }
    document.getElementById("Reset").setAttribute("style", "display: none;");
    // playRestart();
  }

  // alerta de cuando gana

  function alertWin(player){
    let alert = document.getElementById('alertWin');
    alert.innerHTML = player.toUpperCase() + ' ' + alert.innerHTML;
    alert.style.display = 'block';
}