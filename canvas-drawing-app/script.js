   let x = 0;
let y = 0;
let isDrawing = false;

const canva = document.getElementById("canva");
const context = canva.getContext("2d");
const saveBtn = document.getElementById("save");

const colorPicker = document.getElementById("color");
const sizePicker = document.getElementById("size");
const clearBtn = document.getElementById("clear");

canva.addEventListener("mousedown", e => {
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;
});

canva.addEventListener("mousemove", e => {
    if (isDrawing) {
        drawLine(x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
});

window.addEventListener("mouseup", e => {
    if (isDrawing) {
        drawLine(x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrawing = false;
    }
});

clearBtn.addEventListener("click", () => {
    context.clearRect(0, 0, canva.width, canva.height);
});

function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = colorPicker.value;  
    context.lineWidth = sizePicker.value;      
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();   
    context.closePath();
}


saveBtn.addEventListener("click", () => {
    const dataURL = canva.toDataURL("image/png"); // convert canvas to PNG
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "drawing.png"; // filename
    link.click(); // trigger download
});

function resizeCanvas() {
  canva.width = canva.offsetWidth;
  canva.height = 400; // or dynamically set based on aspect ratio
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();