const sonidos = {
  walk: new Audio("../sounds/walk.mp3"),
  plantBomb: new Audio("../sounds/plantBomb.mp3"),
  deathPlayer: new Audio("../sounds/deathPlayer.mp3"),
};

function reproducirSonido(nombre) {
  sonidos[nombre].currentTime = 0; // Reiniciar el sonido si ya está reproduciéndose
  sonidos[nombre].play();
}