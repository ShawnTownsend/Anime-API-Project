//FETCH QUOTE
fetch("https://animechan.vercel.app/api/quotes/character?name=naruto")
.then(response => response.json())
.then(data => console.log(data))

const dbzLogo = document.getElementById('dbz-logo');
const onePieceLogo = document.getElementById('one-piece-logo');
const narutoLogo = document.getElementById('naruto-logo');

narutoLogo.addEventListener('click', narutoSelect);

/*
Once logo is clicked, make homepage disappear.
Go to character selection page for anime show.
Add event listeners to each logo.
Inside event listener: Invoke showCharacter function.
*/

function narutoSelect() {
    document.body.style.backgroundImage = "url('images/backgrounds/naruto-background.png')";
}