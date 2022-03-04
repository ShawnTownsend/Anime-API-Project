// VARIABLES
const dbzLogo = document.getElementById('dbz-logo');
const onePieceLogo = document.getElementById('one-piece-logo');
const narutoLogo = document.getElementById('naruto-logo');
const homePage = document.getElementById('home-page');
const charSelect = document.getElementById('character-selection');
const char1 = document.getElementById('char1');
const char2 = document.getElementById('char2');
const char3 = document.getElementById('char3');
const char4 = document.getElementById('char4');
const char5 = document.getElementById('char5');
const characterQuote = document.getElementById('character-quote-page');
const charImage = document.getElementById('character-quote-image');
const quotes = document.getElementById('quote');
const arrCharacters = [char1, char2, char3, char4, char5];
const backToHomeButton = document.getElementById('back-to-home');
const backToCharactersButton = document.getElementById('back-to-characters');
const narutoCharactersId = [17, 13, 145, 85, 2007];
const onePieceCharactersId = [40, 62, 61, 305, 724];
const dbzCharactersId = [246, 2159, 914, 913, 76348];
const dbzAudio = new Audio('audio/DBZ-Theme.mp3');
const narutoAudio = new Audio('audio/Naruto-Theme.mp3');
const onePieceAudio = new Audio('audio/One-Piece-LuffysTheme.mp3');
let currentAnime;
let previousBackground;

backToCharactersButton.onclick = () => {
  characterQuote.style.display = 'none';
  charSelect.style.display = 'block';
  document.body.style.backgroundImage = previousBackground;
};

// ANIME SELECT
narutoLogo.addEventListener('click', narutoSelect);
onePieceLogo.addEventListener('click', onePieceSelect);
dbzLogo.addEventListener('click', dbzSelect);

// FOR HOVER EFFECTS
narutoLogo.addEventListener('mouseover', enlargeLogo);
onePieceLogo.addEventListener('mouseover', enlargeLogo);
dbzLogo.addEventListener('mouseover', enlargeLogo);
narutoLogo.addEventListener('mouseout', shrinkLogo);
onePieceLogo.addEventListener('mouseout', shrinkLogo);
dbzLogo.addEventListener('mouseout', shrinkLogo);

// ANIME SELECTION
function narutoSelect() {
  document.body.style.backgroundImage = "url('images/backgrounds/new-naruto-background-pixteller.png')";
  previousBackground = "url('images/backgrounds/new-naruto-background-pixteller.png')";
  homePage.style.display = 'none';
  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
  document.body.style.height = '98vh';
  charSelect.style.display = 'block';
  char1.src = 'images/sprites/naruto-icon.png';
  char2.src = 'images/sprites/sasuke-icon.png';
  char3.src = 'images/sprites/sakura-icon.png';
  char4.src = 'images/sprites/kakashi-icon.png';
  char5.src = 'images/sprites/shikamaru-icon.png';

  char1.alt = 'naruto';
  char2.alt = 'sasuke';
  char3.alt = 'sakura haruno';
  char4.alt = 'kakashi';
  char5.alt = 'shikamaru';
  narutoAudio.volume = 0.15;
  narutoAudio.play();
  narutoAudio.addEventListener('ended', () => {
    narutoAudio.currentTime = 0;
    narutoAudio.play();
  }, false);
  currentAnime = 'Naruto';
}

function onePieceSelect() {
  document.body.style.backgroundImage = "url('images/backgrounds/one-piece-background.png')";
  previousBackground = "url('images/backgrounds/one-piece-background.png')";
  homePage.style.display = 'none';
  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
  document.body.style.height = '98vh';
  charSelect.style.display = 'block';
  char1.src = 'images/sprites/luffy.png';
  char2.src = 'images/sprites/zoro.png';
  char3.src = 'images/sprites/nicorobin.png';
  char4.src = 'images/sprites/sanji.png';
  char5.src = 'images/sprites/usopp.png';

  char1.alt = 'luffy';
  char2.alt = 'zoro';
  char3.alt = 'nico robin';
  char4.alt = 'sanji';
  char5.alt = 'usopp';
  onePieceAudio.volume = 0.15;
  onePieceAudio.play();
  onePieceAudio.addEventListener('ended', () => {
    onePieceAudio.currentTime = 0;
    onePieceAudio.play();
  }, false);
  currentAnime = 'One Piece';
}

function dbzSelect() {
  document.body.style.backgroundImage = "url('images/backgrounds/DBZ-background2.png')";
  previousBackground = "url('images/backgrounds/DBZ-background2.png')";
  homePage.style.display = 'none';
  document.querySelector('header').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
  document.body.style.height = '98vh';
  charSelect.style.display = 'block';
  char1.src = 'images/sprites/goku-icon.png';
  char2.src = 'images/sprites/krillin-icon.png';
  char3.src = 'images/sprites/piccolo3.png';
  char4.src = 'images/sprites/vegeta-icon.png';
  char5.src = 'images/sprites/beerus1.png';

  char1.alt = 'goku';
  char2.alt = 'krillin';
  char3.alt = 'piccolo';
  char4.alt = 'vegeta';
  char5.alt = 'beerus';
  dbzAudio.volume = 0.15;
  dbzAudio.play();
  dbzAudio.addEventListener('ended', () => {
    dbzAudio.currentTime = 0;
    dbzAudio.play();
  }, false);
  currentAnime = 'Dragon Ball Z';
}

// HOVER EFFECTS FOR LOGO
function enlargeLogo(event) {
  event.target.style.cursor = 'pointer';
  event.target.style.height = '250px';
}

function shrinkLogo(event) {
  event.target.style.height = '200px';
}

// GET CHARACTER QUOTE

arrCharacters.forEach((char, index) => {
  char.addEventListener('click', () => {
    charSelect.style.display = 'none';
    characterQuote.style.display = 'block';
    if (currentAnime === 'Naruto') {
      fetchMetaData(index, narutoCharactersId, char.alt);
    } else if (currentAnime === 'Dragon Ball Z') {
      fetchMetaData(index, dbzCharactersId, char.alt);
    } else {
      fetchMetaData(index, onePieceCharactersId, char.alt);
    }
    document.body.style.backgroundImage = `url('images/character-backgrounds/${char.alt}.png')`;
    fetchQuote(char.alt);
  });
});

function randomNumber(length) {
  return Math.floor(Math.random() * length);
}

function fetchQuote(name) {
  fetch(`https://animechan.vercel.app/api/quotes/character?name=${name}`)
    .then((response) => response.json())
    .then((data) => {
      quotes.innerText = data[randomNumber(data.length)].quote;
    });
}
const charName = document.getElementById('name');
const charKanjiName = document.getElementById('name_kanji');
const charNickName = document.getElementById('nickname');
const charURL = document.getElementById('link');

function fetchMetaData(index, array, name) {
  fetch(`https://api.jikan.moe/v4/characters/${array[index]}`)
    .then((response) => response.json())
    .then((data) => {
      charName.innerText = `Name: ${data.data.name}`;
      charKanjiName.innerText = `Kanji: ${data.data.name_kanji}`;
      if (data.data.nicknames[0] !== undefined) {
        charNickName.innerText = `Nickname: ${data.data.nicknames[0]}`;
      }
      charImage.src = data.data.images.jpg.image_url;
      charURL.href = data.data.url;
      charURL.innerText = `Read more about ${data.data.name}`;
    });
}
