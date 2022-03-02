//FETCH QUOTE
fetch("https://animechan.vercel.app/api/quotes/character?name=naruto")
.then(response => response.json())
.then(data => console.log(data))

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

narutoLogo.addEventListener('click', narutoSelect);
onePieceLogo.addEventListener('click', onePieceSelect);
dbzLogo.addEventListener('click', dbzSelect);

/*
Once logo is clicked, make homepage disappear.
Go to character selection page for anime show.
Add event listeners to each logo.
Inside event listener: Invoke showCharacter function.
*/

function narutoSelect() {
    document.body.style.backgroundImage = "url('images/backgrounds/naruto-background2.jpg')";
    homePage.style.display = 'none';
    document.body.style.height = '98vh';
    charSelect.style.display = 'block';
    char1.src = `images/sprites/naruto2.png`;
    char2.src = `images/sprites/sasuke2.png`;
    char3.src = `images/sprites/sakura2.png`;
    char4.src = `images/sprites/kakashi2.png`;
    char5.src = `images/sprites/shikamaru.png`;
}

function onePieceSelect() {
    document.body.style.backgroundImage = "url('images/backgrounds/one-piece-background.png')";
    homePage.style.display = 'none';
    document.body.style.height = '98vh';
    charSelect.style.display = 'block';
    char1.src = `images/sprites/luffy.png`;
    char2.src = `images/sprites/zoro.png`;
    char3.src = `images/sprites/nami.png`;
    char4.src = `images/sprites/sanji.png`;
    char5.src = `images/sprites/usopp.png`;
}

function dbzSelect() {
    document.body.style.backgroundImage = "url('images/backgrounds/DBZ-background2.png')";
    homePage.style.display = 'none';
    document.body.style.height = '98vh';
    charSelect.style.display = 'block';
    char1.src = `images/sprites/goku.png`;
    char2.src = `images/sprites/krillin.png`;
    char3.src = `images/sprites/piccolo.png`;
    char4.src = `images/sprites/vegeta.png`;
    char5.src = `images/sprites/beerus.png`;
}