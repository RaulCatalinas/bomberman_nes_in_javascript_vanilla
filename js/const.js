const imgSprites = new Image();
imgSprites.src = "../sprites.png";

const cellSize = 64; //tamaño de cada celda

const columns = 25;
const rows = 13;
let walls = [];

let enemies = [];
let totalEnemies = 6;

let isGameOver = false;

canvas.width = columns * cellSize;
canvas.height = rows * cellSize;
canvas.style.backgroundColor = "#2e8b00";
