const countdown = document.querySelector('.countdown');
const countdownNumber = document.querySelector('.countdown-number');
const question = document.querySelector('.question');
const actions = document.querySelector('.actions');
const sparkLayer = document.querySelector('.spark-layer');
const wowOverlay = document.querySelector('.wow-overlay');
const rideStage = document.querySelector('.ride-stage');
const rideVideo = document.querySelector('.ride-video');
const birthdayMusic = document.querySelector('.birthday-music');
const rideFog = document.querySelector('.ride-fog');
const rideError = document.querySelector('.ride-error');
const celebrationStage = document.querySelector('.celebration-stage');
const birthdayFinal = document.querySelector('.birthday-final');
const cakeStage = document.querySelector('.cake-stage');
const cakeCandle = document.querySelector('.cake-candle');
const cakeInstruction = document.querySelector('.cake-instruction');
const cakeApplause = document.querySelector('.cake-applause');
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
  '4.JPG', '1.JPG', '2.JPG', '3.JPG', '5.1.JPG', '5.2.jpg', '5.JPG',
  '6.JPG', '7.JPG', '8.JPG', '9.JPG', '10.JPG', '11.PNG', '12.PNG',
  '13.PNG', '14.PNG', '15.JPG', '16.jpg', '17.1.jpg', '17.2.jpg', '17.3.jpg',
  '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg', '21.jpeg', '22.jpeg',
  '23.jpeg', '24.JPG', '25.PNG', '26.jpg', '27.jpg', '28.jpg', '29.jpg',
  'logo.jpg', 'xe.jpg', '30.JPG', '31.jpg', '32.JPG', '33.jpg',
  '1790338832013_253007807605382436_9102123110770422775_bf897023ae73536c334bcee168ff7773.jpg',
  '1790338832152_253007807605382436_9102123110770422775_0cd30d75e23e148d5486e39cf5b90e28.jpg',
  '1790338832118_253007807605382436_9102123110770422775_0c472314d8326541ae98a02dd3442139.jpg',
  '1790338832225_253007807605382436_9102123110770422775_c28c9803ad68fc1a85ed5eb8d96585da.jpg',
  '1790338832242_253007807605382436_9102123110770422775_a9acf2b20daae85f7fbd8560e0e5c527.jpg',
  '1790338832260_253007807605382436_9102123110770422775_996e38e8f6f5256bbd5dfcd82eff1edd.jpg',
  '1790338832296_253007807605382436_9102123110770422775_f266b6514c4e006d4f6f4cf98ee09b83.jpg',
  '1790338832314_253007807605382436_9102123110770422775_49f778f4ae9f1a3b44f15266590faf81.jpg',
  '1790338832347_253007807605382436_9102123110770422775_e80441289bf8d83060268e24d2167917.jpg',
  'IMG_5542.PNG', 'IMG_2154.PNG', 'IMG_9615.PNG',
];
const photoCaptions = {
  '4.JPG': 'Cúc hàaa',
  '1.JPG': '🤣',
  '2.JPG': 'Đẹp troaiii',
  '3.JPG': 'ỉu địu thục nữ zị đóa',
  '5.1.JPG': 'Được chụp zới em gái nè hẹ hẹ',
  '5.2.jpg': 'Sao hai hong ẵm em???',
  '5.JPG': 'Vễ huông quá nè hí hí',
  '6.JPG': 'Chuẩn bị thành đại za',
  '7.JPG': 'Mặt lúc nì hiền he',
  '8.JPG': 'Khoe ly matcha xì ta búc',
  '9.JPG': 'Ờmmm',
  '10.JPG': 'Nhonnn quạaa',
  '11.PNG': 'Hay si tư',
  '12.PNG': 'Zalo pít bắt khoảnh khắc quá nè',
  '14.PNG': 'Hấy cưngg...',
  '15.JPG': 'Si tư típ',
  '16.jpg': 'Lúc nì Ngân hum có quà nên lấy hiện kim 😊',
  '17.jpeg': 'Ái chà chà tình củm quóoo',
  '17.1.jpg': 'Ăn Tết zới mamy iuu',
  '17.2.jpg': 'Tốt nghiệp (ké)',
  '17.3.jpg': 'Áo nổi quá hong thấy con tôm đâu',
  '18.jpeg': 'Nó Hongkong mà nó điện ảnh nàm thaoo',
  '21.jpeg': 'Cầm zàng bị run tay :)))',
  '22.jpeg': 'Phé mi lì',
  '23.jpeg': 'Nguyên dàn zai xênh gái đẹp',
  '24.JPG': 'Ờmmmmm',
  '25.PNG': 'Cúp lé gà bông 18 chủi',
  '26.jpg': 'Lái xe vìa quơ nè',
  '27.jpg': 'Bà chủ nữ công gia trưởng của Mr Quân',
  '28.jpg': 'Chông zợ hài được đi ăn với em gái',
  '29.jpg': 'Được em gái chụp hình checkin Skytree hé hé',
  'logo.jpg': 'Zà đây là signature của Mr Quân (gặp là pít của ảnh)',
  'xe.jpg': 'Siu phẩmm ngầu he ngầu he😎',
  '30.JPG': 'Trộm zía có đam mê mua giày cho em gái (đôi thứ n)',
  '1790338832013_253007807605382436_9102123110770422775_bf897023ae73536c334bcee168ff7773.jpg': 'Được hai cho cái bằng ĐH zài trăm củ (biết ơn hai nhìu nhắmm)',
  '1790338832118_253007807605382436_9102123110770422775_0c472314d8326541ae98a02dd3442139.jpg': 'Được hai cho đi Enoshima',
  '1790338832152_253007807605382436_9102123110770422775_0cd30d75e23e148d5486e39cf5b90e28.jpg': 'Được anh chị hai iu dấu cho đi Nhật nè',
  '1790338832225_253007807605382436_9102123110770422775_c28c9803ad68fc1a85ed5eb8d96585da.jpg': 'mùi nì thơmm',
  '1790338832242_253007807605382436_9102123110770422775_a9acf2b20daae85f7fbd8560e0e5c527.jpg': 'quà sinh nhựt nì ngonn',
  '1790338832260_253007807605382436_9102123110770422775_996e38e8f6f5256bbd5dfcd82eff1edd.jpg': 'Báo cưng của hai nè :)))',
  '1790338832296_253007807605382436_9102123110770422775_f266b6514c4e006d4f6f4cf98ee09b83.jpg': 'Quàng châu cách cách của hai lun nè',
  '1790338832314_253007807605382436_9102123110770422775_49f778f4ae9f1a3b44f15266590faf81.jpg': 'nó nhìn hai kìa',
  '1790338832347_253007807605382436_9102123110770422775_e80441289bf8d83060268e24d2167917.jpg': 'lúc mới lụm con báo của hai vìa nè',
  'IMG_2154.PNG': 'hai nhớ em cớp cí nì ngay trên tay hai hong😁',
  'IMG_5542.PNG': '2 đứa nó rình gì kìa hai',
  'IMG_9615.PNG': 'Oiii cái nì thì nghe mùi polime gòi khà khà',
};
let albumPages = [];
let albumIndex = 0;
let swipeStart = null;
let rideTransitionStarted = false;
let rideFallbackTimer = null;
let candleLit = false;
let candleBlown = false;

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

document.addEventListener('click', (event) => {
  if (event.target.closest('.cake-stage, .album-stage')) return;
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
  page.dataset.kind = 'photo';
  page.dataset.photoNumber = String(index + 1);
  page.innerHTML = `
    <div class="album-page-face album-page-front">
      <img src="photos/${encodeURIComponent(fileName)}" alt="Kỷ niệm ${index + 1}" loading="lazy" />
      <span class="photo-caption"></span>
    </div>
    <div class="album-page-face album-page-back"></div>
  `;
  page.querySelector('.photo-caption').textContent = photoCaptions[fileName] ?? 'nữa nèee';
  albumBook.insertBefore(page, albumLastPage);

  if (index === 35) {
    const notePage = document.createElement('div');
    notePage.className = 'album-page';
    notePage.dataset.kind = 'note';
    notePage.innerHTML = `
      <div class="album-page-face album-page-front album-note-page">
        <span class="album-note-kicker">A little note for you</span>
        <p><span class="album-note-vietnamese">My bro cho tôi sống<br />như một tiểu thư tài phiệt vì</span> <strong>he is a CHAEBOL ^^</strong></p>
        <span class="album-note-heart" aria-hidden="true">♥</span>
      </div>
      <div class="album-page-face album-page-back"></div>
    `;
    albumBook.insertBefore(notePage, albumLastPage);
  }
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
  const currentPage = albumPages[albumIndex];
  albumPageNumber.textContent = isCover
    ? `Cover · 1 / ${albumPages.length - 1}`
    : isClosingPage
      ? 'To be continue'
      : currentPage.dataset.kind === 'note'
        ? 'A note for you'
        : `Photo ${currentPage.dataset.photoNumber} / ${photoFiles.length}`;
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
albumBook.addEventListener('pointerdown', (event) => {
  if (event.pointerType === 'mouse' && event.button !== 0) return;
  swipeStart = { x: event.clientX, y: event.clientY };
  albumBook.setPointerCapture(event.pointerId);
});
albumBook.addEventListener('pointerup', (event) => {
  if (!swipeStart) return;

  const distanceX = event.clientX - swipeStart.x;
  const distanceY = event.clientY - swipeStart.y;
  swipeStart = null;

  if (Math.abs(distanceX) < 45 || Math.abs(distanceX) <= Math.abs(distanceY)) return;
  flipAlbum(distanceX < 0 ? 'next' : 'prev');
});
albumBook.addEventListener('pointercancel', () => {
  swipeStart = null;
});
updateAlbum();

function showCelebration() {
  if (rideTransitionStarted) return;
  rideTransitionStarted = true;
  if (rideFallbackTimer !== null) clearTimeout(rideFallbackTimer);
  birthdayMusic.currentTime = 0;
  birthdayMusic.muted = false;
  if (birthdayMusic.paused) {
    birthdayMusic.play().catch((error) => {
      console.error('The birthday song could not start playing.', error);
    });
  }

  rideStage.style.opacity = '0';
  celebrationStage.style.opacity = '1';
  celebrationStage.style.transition = 'opacity 0.35s ease';

  setTimeout(() => {
    celebrationStage.style.opacity = '0';
    birthdayFinal.style.opacity = '1';
    birthdayFinal.style.transition = 'opacity 0.35s ease';
    setTimeout(() => {
      birthdayFinal.style.opacity = '0';
      cakeStage.classList.add('show');
    }, 2000);
  }, 1600);
}

cakeCandle.addEventListener('click', () => {
  if (candleBlown) return;

  if (!candleLit) {
    candleLit = true;
    cakeStage.classList.add('lit');
    cakeCandle.setAttribute('aria-label', 'Thổi tắt nến');
    cakeInstruction.textContent = 'Giờ lành đã đến, mời Mr Quân ước nguyện tuổi mới nèo';
    return;
  }

  candleBlown = true;
  cakeStage.classList.remove('lit');
  cakeStage.classList.add('blown');
  cakeCandle.disabled = true;
  cakeInstruction.textContent = 'Ước nguyện đã được gửi đi, úm ba la xì bùaa';
  cakeApplause.currentTime = 0;
  cakeApplause.play().catch((error) => {
    console.error('The applause sound could not start playing.', error);
  });

  setTimeout(() => {
    cakeStage.classList.add('fade-out');
    setTimeout(() => albumStage.classList.add('show'), 850);
  }, 1900);
});

function handleRideVideoError(message, error) {
  if (rideFallbackTimer !== null || rideTransitionStarted) return;
  rideError.classList.add('show');
  console.error(message, error);
  rideFallbackTimer = setTimeout(showCelebration, 1800);
}

function playRideVideo() {
  rideTransitionStarted = false;
  rideFallbackTimer = null;
  rideError.classList.remove('show');
  rideFog.classList.remove('show');
  rideVideo.currentTime = 0;
  rideVideo.ontimeupdate = () => {
    if (Number.isFinite(rideVideo.duration) && rideVideo.duration - rideVideo.currentTime <= 0.5) {
      rideFog.classList.add('show');
    }
  };
  rideVideo.onended = showCelebration;
  rideVideo.onerror = () => {
    handleRideVideoError('The motorcycle video could not be loaded or played.', rideVideo.error);
  };

  rideVideo.play().catch((error) => {
    handleRideVideoError('The motorcycle video could not start playing.', error);
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (countdown.classList.contains('show')) return;

    birthdayMusic.currentTime = 0;
    birthdayMusic.muted = true;
    birthdayMusic.play().catch((error) => {
      console.error('The birthday song could not be prepared for playback.', error);
    });

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
                playRideVideo();
              }, 1000);
            }
          }, 900);
        }
      };

      tick();
    }, 450);
  });
});
