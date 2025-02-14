// Inicializar AOS
AOS.init({
  duration: 1000, // Duración de las animaciones
  once: true, // Las animaciones solo ocurren una vez
});

// Efecto de escritura automática con Typed.js
const typed = new Typed('.typed-text', {
  strings: [
    "Feliz Día de los Enamorados ❤️",
    "Te amo más allá de las palabras...",
    "Gracias por ser mi razón para sonreír.",
    "Eres mi sueño hecho realidad."
  ],
  typeSpeed: 50, // Velocidad de escritura
  backSpeed: 30, // Velocidad de borrado
  loop: true, // Repetir indefinidamente
});

// Reproducir música con Howler.js
const sound = new Howl({
  src: ['supieras.mp3'],
  loop: true,
  volume: 0.5, // Volumen al 50%
});

function startMusic() {
  sound.play();
  document.removeEventListener('click', startMusic); // Elimina el evento después de activarse
}

document.addEventListener('click', startMusic);

// Carrusel de fotos
const photos = document.querySelectorAll('.photo');
let currentIndex = 0;

function showNextPhoto() {
  photos[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % photos.length;
  photos[currentIndex].classList.add('active');
}

setInterval(showNextPhoto, 5000); // Cambia cada 5 segundos

// Mensajes aleatorios
const messages = [
  "Eres mi refugio en los días grises.",
  "Mi corazón late por ti, siempre lo ha hecho.",
  "Gracias por ser mi razón para sonreír.",
  "Contigo descubrí lo que significa amar.",
  "Eres el sueño que nunca quise despertar.",
  "En tus ojos veo un mundo lleno de amor.",
  "Te amo más allá de las palabras."
];

const messageElement = document.getElementById('random-message');

function showRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];
}

setInterval(showRandomMessage, 7000); // Cambia cada 7 segundos

// Abrir sobres con Anime.js
function openEnvelope(envelope) {
  const envelopeElement = envelope.querySelector('.envelope');
  const letterElement = envelope.querySelector('.letter');

  if (envelopeElement.classList.contains('closed')) {
    // Animación para abrir el sobre
    anime({
      targets: envelopeElement,
      rotateX: [-180, 0],
      duration: 500,
      easing: 'easeInOutSine'
    });

    // Animación para mostrar la carta
    anime({
      targets: letterElement,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 500,
      delay: 300,
      easing: 'easeInOutSine',
      begin: () => {
        letterElement.style.display = 'block'; // Mostrar la carta
      }
    });

    envelopeElement.classList.remove('closed');
    envelopeElement.classList.add('opened');
  } else {
    // Animación para cerrar el sobre
    anime({
      targets: envelopeElement,
      rotateX: [0, -180],
      duration: 500,
      easing: 'easeInOutSine'
    });

    // Animación para ocultar la carta
    anime({
      targets: letterElement,
      scale: [1, 0],
      opacity: [1, 0],
      duration: 500,
      easing: 'easeInOutSine',
      complete: () => {
        letterElement.style.display = 'none'; // Ocultar la carta
      }
    });

    envelopeElement.classList.remove('opened');
    envelopeElement.classList.add('closed');
  }
}

// Pétalos de rosa cayendo
const petalsContainer = document.querySelector('.petals');

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración aleatoria
  petalsContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 5000); // Elimina el pétalo después de 5 segundos
}

setInterval(createPetal, 300); // Crea un pétalo cada 300ms