//DISAPPEAR HOME PAGE BACKGROUND
document.body.style.backgroundImage = "url('images/backgrounds/naruto-background.png')";

//FETCH QUOTE
fetch("https://animechan.vercel.app/api/quotes/character?name=naruto")
.then(response => response.json())
.then(data => console.log(data))


