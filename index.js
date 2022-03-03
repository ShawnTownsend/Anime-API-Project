//FETCH QUOTE
// fetch("https://animechan.vercel.app/api/quotes/character?name=naruto")
// .then(response => response.json())
// .then(data => console.log(data))

//VARIABLES
const dbzLogo = document.getElementById("dbz-logo");
const onePieceLogo = document.getElementById("one-piece-logo");
const narutoLogo = document.getElementById("naruto-logo");
const homePage = document.getElementById("home-page");
const charSelect = document.getElementById("character-selection");
const char1 = document.getElementById("char1");
const char2 = document.getElementById("char2");
const char3 = document.getElementById("char3");
const char4 = document.getElementById("char4");
const char5 = document.getElementById("char5");
const characterQuote = document.getElementById("character-quote-page");
const charImage = document.getElementById("character-quote-image");
const quotes = document.getElementById("quote");
const arrCharacters = [char1, char2, char3, char4, char5];
const backToHomeButton = document.getElementById("back-to-home");
const backToCharactersButton = document.getElementById('back-to-characters');
const narutoCharactersId = [17, 13, 145, 85, 2007];
const onePieceCharactersId = [40, 62, 61, 305, 724];
const dbzCharactersId = [264, 2159, 914, 913, 76348];
let currentAnime;


backToCharactersButton.onclick = () => {
    characterQuote.style.display = 'none';
    charSelect.style.display = 'block';
}

//ANIME SELECT
narutoLogo.addEventListener("click", narutoSelect);
onePieceLogo.addEventListener("click", onePieceSelect);
dbzLogo.addEventListener("click", dbzSelect);

//FOR HOVER EFFECTS
narutoLogo.addEventListener("mouseover", enlargeLogo);
onePieceLogo.addEventListener("mouseover", enlargeLogo);
dbzLogo.addEventListener("mouseover", enlargeLogo);
narutoLogo.addEventListener("mouseout", shrinkLogo);
onePieceLogo.addEventListener("mouseout", shrinkLogo);
dbzLogo.addEventListener("mouseout", shrinkLogo);

//ALGO.
/*
Once logo is clicked, make homepage disappear.
Go to character selection page for anime show.
Add event listeners to each logo.
Inside event listener: Invoke showCharacter function.
*/
// For every anime fetched
// Get id of each character
// Push id to array

// Fetch user metadata, also fetch the bio

//ANIME SELECTION
function narutoSelect() {
    document.body.style.backgroundImage = "url('images/backgrounds/naruto-background3.jpeg')";
    homePage.style.display = 'none';
    document.body.style.height = '98vh';
    charSelect.style.display = 'block';
    char1.src = `images/sprites/naruto.png`;
    char2.src = `images/sprites/sasuke.png`;
    char3.src = `images/sprites/sakura.png`;
    char4.src = `images/sprites/kakashi.png`;
    char5.src = `images/sprites/shikamaru2.png`;
    
    char1.alt = "naruto";
    char2.alt = "sasuke";
    char3.alt = "sakura haruno";
    char4.alt = "kakashi";
    char5.alt = "shikamaru";
    currentAnime = 'Naruto'
}

function onePieceSelect() {
  document.body.style.backgroundImage =
    "url('images/backgrounds/one-piece-background.png')";
  homePage.style.display = "none";
  document.body.style.height = "98vh";
  charSelect.style.display = "block";
  char1.src = `images/sprites/luffy2.png`;
  char2.src = `images/sprites/zoro2.png`;
  char3.src = `images/sprites/nicorobin.png`;
  char4.src = `images/sprites/sanji2.png`;
  char5.src = `images/sprites/usopp2.png`;

  char1.alt = "luffy";
  char2.alt = "zoro";
  char3.alt = "nico robin";
  char4.alt = "sanji";
  char5.alt = "usopp";
  currentAnime = 'One Piece'
}

function dbzSelect() {
  document.body.style.backgroundImage =
    "url('images/backgrounds/DBZ-background2.png')";
  homePage.style.display = "none";
  document.body.style.height = "98vh";
  charSelect.style.display = "block";
  char1.src = `images/sprites/goku.png`;
  char2.src = `images/sprites/krillin.png`;
  char3.src = `images/sprites/piccolo.png`;
  char4.src = `images/sprites/vegeta.png`;
  char5.src = `images/sprites/beerus.png`;

  char1.alt = "goku";
  char2.alt = "krillin";
  char3.alt = "piccolo";
  char4.alt = "vegeta";
  char5.alt = "beerus";
  currentAnime = 'Dragon Ball Z'
}


//HOVER EFFECTS FOR LOGO
function enlargeLogo(event) {
  event.target.style.cursor = "pointer";
  event.target.style.height = "250px";
}

function shrinkLogo(event) {
  event.target.style.height = "200px";
}

/*
make one function that fetchs quote
uses string interpolation 
and checks which character on what show you clicked, and then string interpolates and then calls th function
{sasuke}
{naruto page}
ok now go and fetch this
function fetchQuote() {

}
*/

//GET CHARACTER QUOTE

arrCharacters.forEach((char,index) => {
  char.addEventListener("click", () => {
    charSelect.style.display = "none";
    characterQuote.style.display = "block";
    charImage.src = char.src;
    fetchQuote(char.alt);
    if (currentAnime === 'Naruto') {
      fetchMetaData(index, narutoCharactersId, char.alt);
    } else if (currentAnime === 'Dragon Ball Z') {
      fetchMetaData(index, dbzCharactersId, char.alt);
    } else {
      fetchMetaData(index, onePieceCharactersId, char.alt);
    }
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
      console.log(data)
    });
}

function fetchMetaData(index, array, name) {
  fetch(`https://api.jikan.moe/v4/characters/${array[index]}`)
  .then(response => response.json())
  .then(data => {
    const about = data.data.about.split(`\n`);
    about.length = 8;
    about.join('\n')
    document.getElementById('about').innerText = about;
    document.getElementById('link').href = data.data.url;
    document.getElementById('link').innerText = `Read more about ${name}`
    document.getElementById('name').innerText = name[0].toUpperCase() + name.substring(1);
    document.getElementById('anime').innerText = currentAnime;
  })
}

