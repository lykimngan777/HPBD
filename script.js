const countdown = document.querySelector('.countdown');
const countdownNumber = document.querySelector('.countdown-number');
const question = document.querySelector('.question');
const actions = document.querySelector('.actions');
const sparkLayer = document.querySelector('.spark-layer');
const wowOverlay = document.querySelector('.wow-overlay');
const rideStage = document.querySelector('.ride-stage');
const celebrationStage = document.querySelector('.celebration-stage');
const birthdayFinal = document.querySelector('.birthday-final');
const buttons = document.querySelectorAll('.cta-btn');
const albumStage = document.querySelector('.album-stage');
const albumBook = document.querySelector('.album-book');
const albumPrev = document.querySelector('.album-prev');
const albumNext = document.querySelector('.album-next');
const albumPageNumber = document.querySelector('.album-page-number');
const albumDots = document.querySelector('.album-dots');
const albumLastPage = document.querySelector('.album-last-page').closest('.album-page');

const numbers = ['3', '2', '1'];
const photoFiles = [
  '1.JPG', '2.JPG', '3.JPG', '4.JPG', '5.JPG', '5.1.JPG', '5.2.jpg',
  '6.JPG', '7.JPG', '8.JPG', '9.JPG', '10.JPG', '11.PNG', '12.PNG',
  '13.PNG', '14.PNG', '15.JPG', '16.jpg', '17.jpeg', '17.1.jpg', '17.2.jpg',
  '17.3.jpg', '18.jpeg', '19.jpeg', '20.jpeg', '21.jpeg', '22.jpeg',
  '23.jpeg', '24.JPG', '25.PNG', '26.jpg', '27.jpg', '28.jpg', '29.jpg',
  '30.JPG', '31.jpg', '32.JPG', '33.jpg',
  '1790338832013_253007807605382436_9102123110770422775_bf897023ae73536c334bcee168ff7773.jpg',
  '1790338832118_253007807605382436_9102123110770422775_0c472314d8326541ae98a02dd3442139.jpg',
  '1790338832152_253007807605382436_9102123110770422775_0cd30d75e23e148d5486e39cf5b90e28.jpg',
  '1790338832225_253007807605382436_9102123110770422775_c28c9803ad68fc1a85ed5eb8d96585da.jpg',
  '1790338832242_253007807605382436_9102123110770422775_a9acf2b20daae85f7fbd8560e0e5c527.jpg',
  '1790338832260_253007807605382436_9102123110770422775_996e38e8f6f5256bbd5dfcd82eff1edd.jpg',
  '1790338832296_253007807605382436_9102123110770422775_f266b6514c4e006d4f6f4cf98ee09b83.jpg',
  '1790338832314_253007807605382436_9102123110770422775_49f778f4ae9f1a3b44f15266590faf81.jpg',
  '1790338832347_253007807605382436_9102123110770422775_e80441289bf8d83060268e24d2167917.jpg',
  'IMG_2154.PNG', 'IMG_5542.PNG', 'IMG_9615.PNG',
];
let engineSound = null;
let albumPages = [];
let albumIndex = 0;
let touchStartX = 0;

const createSpark = (x, y) => {
  const spark = document.createElement('span');
  spark.className = 'spark';

  const hue = Math.floor(Math.random() * 360);
  const size = Math.random() * 12 + 8;
  const dx = (Math.random() - 0.5) * 240;
  const dy = (Math.random() - 0.6) * 220 - 30;

  spark.style.left = `${x}px`;
  spark.style.top = `${y}px`;
  spark.style.width = `${size}px`;
  spark.style.height = `${size}px`;
  spark.style.background = `hsl(${hue}, 90%, 65%)`;
  spark.style.setProperty('--dx', `${dx}px`);
  spark.style.setProperty('--dy', `${dy}px`);

  sparkLayer.appendChild(spark);

  setTimeout(() => spark.remove(), 900);
};

function playBikeSound() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  if (!engineSound) {
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.value = 68;
    gain.gain.value = 0.045;

    lfo.type = 'sine';
    lfo.frequency.value = 4;
    lfoGain.gain.value = 20;

    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    lfo.start();

    engineSound = { ctx, osc, gain, lfo, lfoGain };
  }

  if (engineSound.ctx.state === 'suspended') {
    engineSound.ctx.resume();
  }
}

function stopBikeSound() {
  if (!engineSound) return;
  engineSound.osc.stop();
  engineSound.lfo.stop();
  engineSound = null;
}

document.addEventListener('click', (event) => {
  if (event.target.closest('.album-stage')) return;
  const x = event.clientX;
  const y = event.clientY;

  for (let i = 0; i < 18; i++) {
    createSpark(x, y);
  }
});

photoFiles.forEach((fileName, index) => {
  const page = document.createElement('div');
  page.className = 'album-page';
  page.dataset.page = String(index + 1);
  page.innerHTML = `
    <div class="album-page-face album-page-front">
      <img src="photos/${encodeURIComponent(fileName)}" alt="Kỷ niệm ${index + 1}" loading="lazy" />
      <span class="photo-caption">Memory ${index + 1}</span>
    </div>
    <div class="album-page-face album-page-back"></div>
  `;
  albumBook.insertBefore(page, albumLastPage);
});

albumPages = [...document.querySelectorAll('.album-page')];
albumPages.forEach((page, index) => {
  const dot = document.createElement('span');
  dot.className = 'album-dot';
  dot.setAttribute('aria-hidden', 'true');
  albumDots.appendChild(dot);
  page.style.zIndex = String(albumPages.length - index);
});

function updateAlbum(direction = 'next') {
  albumPages.forEach((page, index) => {
    page.classList.toggle('flipped', index < albumIndex);
  });

  const isCover = albumIndex === 0;
  const isClosingPage = albumIndex === albumPages.length - 1;
  albumPageNumber.textContent = isCover
    ? `Cover · 1 / ${albumPages.length - 1}`
    : isClosingPage
      ? 'The end'
      : `Photo ${albumIndex} / ${photoFiles.length}`;
  albumPrev.disabled = albumIndex === 0;
  albumNext.disabled = albumIndex === albumPages.length - 1;
  albumDots.querySelectorAll('.album-dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === Math.min(albumIndex, albumPages.length - 1));
  });
  albumBook.dataset.direction = direction;
}

function flipAlbum(direction) {
  const nextIndex = direction === 'next'
    ? Math.min(albumIndex + 1, albumPages.length - 1)
    : Math.max(albumIndex - 1, 0);

  if (nextIndex === albumIndex) return;
  albumIndex = nextIndex;
  updateAlbum(direction);
}

albumPrev.addEventListener('click', () => flipAlbum('prev'));
albumNext.addEventListener('click', () => flipAlbum('next'));
albumBook.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') flipAlbum('prev');
  if (event.key === 'ArrowRight' || event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    flipAlbum('next');
  }
});
albumBook.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });
albumBook.addEventListener('touchend', (event) => {
  const distance = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(distance) < 40) return;
  flipAlbum(distance < 0 ? 'next' : 'prev');
}, { passive: true });
updateAlbum();

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (countdown.classList.contains('show')) return;

    playBikeSound();
    question.classList.add('hidden');
    actions.classList.add('hidden');

    setTimeout(() => {
      countdown.classList.remove('show');
      void countdown.offsetWidth;

      let index = 0;
      const tick = () => {
        if (index < numbers.length) {
          countdownNumber.textContent = numbers[index];
          countdown.classList.remove('show');
          void countdown.offsetWidth;
          countdown.classList.add('show');

          setTimeout(() => {
            countdown.classList.remove('show');
            index += 1;
            if (index < numbers.length) {
              tick();
            } else {
              wowOverlay.style.opacity = '1';
              wowOverlay.style.transition = 'opacity 0.2s ease';

              setTimeout(() => {
                wowOverlay.style.opacity = '0';
                rideStage.style.opacity = '1';
                rideStage.style.transition = 'opacity 0.2s ease';

                setTimeout(() => {
                  rideStage.style.opacity = '0';
                  celebrationStage.style.opacity = '1';
                  celebrationStage.style.transition = 'opacity 0.35s ease';
                  stopBikeSound();

                  setTimeout(() => {
                    celebrationStage.style.opacity = '0';
                    birthdayFinal.style.opacity = '1';
                    birthdayFinal.style.transition = 'opacity 0.35s ease';
                    setTimeout(() => {
                      birthdayFinal.style.opacity = '0';
                      albumStage.classList.add('show');
                    }, 2200);
                  }, 1600);
                }, 4200);
              }, 1000);
            }
          }, 900);
        }
      };

      tick();
    }, 450);
  });
});
