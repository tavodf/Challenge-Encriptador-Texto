const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アカサタナハマヤラワガザダバパイキシチニヒミリヰグズヅブプウクスツヌフムユルヱゲゼデベペエケセテネヘメレヲゴゾドボポオコソトノホモヨロンヴ';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet[Math.floor(Math.random() * alphabet.length)];
    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }

    rainDrops[i]++;
  }
};

setInterval(draw, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
