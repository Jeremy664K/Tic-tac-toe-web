let posicion = "";

const restablecer = () => {
  for (let i = 1; i <= 9; i++)
    document.getElementById("position__" + i).innerHTML = "";

  document.querySelector(".article__win").style.display = "none";
}

const escribirTablero = ID => {
  posicion = document.getElementById(ID);

  if (posicion.innerHTML === "") {
    posicion.innerHTML = "𝗫";
    jugadaBot();
    return validar();
  }

  alert("El casillero esta ocupado...");
}

const jugadaBot = () => {
  if ("" != document.getElementById("position__1").innerHTML && "" != document.getElementById("position__2").innerHTML && "" != document.getElementById("position__3").innerHTML && "" != document.getElementById("position__4").innerHTML && "" != document.getElementById("position__5").innerHTML && "" != document.getElementById("position__6").innerHTML && "" != document.getElementById("position__7").innerHTML && "" != document.getElementById("position__8").innerHTML && "" != document.getElementById("position__9").innerHTML)
    return;

  let jugada = document.getElementById("position__" + Math.floor(9 * Math.random() + 1));

  while ("" != jugada.innerHTML)
    jugada = document.getElementById("position__" + Math.floor(9 * Math.random() + 1));

  jugada.innerHTML = "𝗢";
}

const validar = () => {
  let local = document.getElementById("score__local")
  let rival = document.getElementById("score__rival");

  if ("𝗫" == document.getElementById("position__1").innerHTML && "𝗫" == document.getElementById("position__2").innerHTML && "𝗫" == document.getElementById("position__3").innerHTML || "𝗫" == document.getElementById("position__4").innerHTML && "𝗫" == document.getElementById("position__5").innerHTML && "𝗫" == document.getElementById("position__6").innerHTML || "𝗫" == document.getElementById("position__7").innerHTML && "𝗫" == document.getElementById("position__8").innerHTML && "𝗫" == document.getElementById("position__9").innerHTML || "𝗫" == document.getElementById("position__1").innerHTML && "𝗫" == document.getElementById("position__4").innerHTML && "𝗫" == document.getElementById("position__7").innerHTML || "𝗫" == document.getElementById("position__2").innerHTML && "𝗫" == document.getElementById("position__5").innerHTML && "𝗫" == document.getElementById("position__8").innerHTML || "𝗫" == document.getElementById("position__3").innerHTML && "𝗫" == document.getElementById("position__6").innerHTML && "𝗫" == document.getElementById("position__9").innerHTML || "𝗫" == document.getElementById("position__1").innerHTML && "𝗫" == document.getElementById("position__5").innerHTML && "𝗫" == document.getElementById("position__9").innerHTML || "𝗫" == document.getElementById("position__3").innerHTML && "𝗫" == document.getElementById("position__5").innerHTML && "𝗫" == document.getElementById("position__7").innerHTML) {
    local.innerHTML = parseInt(local.innerHTML) + 1;
    document.querySelector(".win__text").innerHTML = "Ganaste...";
    document.querySelector(".article__win").style.display = "flex";

  } else if ("𝗢" == document.getElementById("position__1").innerHTML && "𝗢" == document.getElementById("position__2").innerHTML && "𝗢" == document.getElementById("position__3").innerHTML || "𝗢" == document.getElementById("position__4").innerHTML && "𝗢" == document.getElementById("position__5").innerHTML && "𝗢" == document.getElementById("position__6").innerHTML || "𝗢" == document.getElementById("position__7").innerHTML && "𝗢" == document.getElementById("position__8").innerHTML && "𝗢" == document.getElementById("position__9").innerHTML || "𝗢" == document.getElementById("position__1").innerHTML && "𝗢" == document.getElementById("position__4").innerHTML && "𝗢" == document.getElementById("position__7").innerHTML || "𝗢" == document.getElementById("position__2").innerHTML && "𝗢" == document.getElementById("position__5").innerHTML && "𝗢" == document.getElementById("position__8").innerHTML || "𝗢" == document.getElementById("position__3").innerHTML && "𝗢" == document.getElementById("position__6").innerHTML && "𝗢" == document.getElementById("position__9").innerHTML || "𝗢" == document.getElementById("position__1").innerHTML && "𝗢" == document.getElementById("position__5").innerHTML && "𝗢" == document.getElementById("position__9").innerHTML || "𝗢" == document.getElementById("position__3").innerHTML && "𝗢" == document.getElementById("position__5").innerHTML && "𝗢" == document.getElementById("position__7").innerHTML) {
    rival.innerHTML = parseInt(rival.innerHTML) + 1;
    document.querySelector(".win__text").innerHTML = "Perdiste...";
    document.querySelector(".article__win").style.display = "flex";

  } else if ("" != document.getElementById("position__1").innerHTML && "" != document.getElementById("position__2").innerHTML && "" != document.getElementById("position__3").innerHTML && "" != document.getElementById("position__4").innerHTML && "" != document.getElementById("position__5").innerHTML && "" != document.getElementById("position__6").innerHTML && "" != document.getElementById("position__7").innerHTML && "" != document.getElementById("position__8").innerHTML && "" != document.getElementById("position__9").innerHTML) {
    document.querySelector(".article__win").style.display = "flex";
    document.querySelector(".win__text").innerHTML = "Empate...";

  }
}