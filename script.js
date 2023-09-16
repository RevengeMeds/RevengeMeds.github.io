const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = window.innerWidth / 20; // Approximately 20px per character
const drops = [];

// Initialize drops array with y-coordinates
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    // Fill the screen with semi-transparent black to fade characters out
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.fillStyle = "#00FF00"; // Matrix green color
    ctx.font = "20px Courier";

    for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(33 + Math.random() * 94); // Random character
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Randomly reset the drop back to the top
        if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33); // 30 FPS approximately
