const slides = [
  { src: 'https://via.placeholder.com/600x300?text=Slide+1', type: 'image' },
  { src: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'video' },
  { src: 'https://via.placeholder.com/600x300?text=Slide+3', type: 'image' }
];

let currentIndex = 0;

const mediaContainer = document.getElementById('mediaContainer');
const indicators = document.getElementById('indicators');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderMedia() {
  const slide = slides[currentIndex];
  mediaContainer.innerHTML = '';

  const mediaElement = document.createElement(slide.type === 'video' ? 'video' : 'img');
  mediaElement.src = slide.src;

  if (slide.type === 'video') {
    mediaElement.autoplay = true;
    mediaElement.muted = true;
    mediaElement.loop = true;
    mediaElement.playsInline = true;
  } else {
    mediaElement.alt = 'Slide Image';
  }

  mediaContainer.appendChild(mediaElement);
  updateIndicators();
  updateButtons();
}

function updateIndicators() {
  indicators.innerHTML = '';
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'dot' + (index === currentIndex ? ' active' : '');
    dot.addEventListener('click', () => {
      currentIndex = index;
      renderMedia();
    });
    indicators.appendChild(dot);
  });
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length - 1;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderMedia();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    renderMedia();
  }
});

// Initial render
renderMedia();