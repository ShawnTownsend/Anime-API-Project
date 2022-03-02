fetch("https://animechan.vercel.app/api/quotes/character?name=naruto")
.then(response => response.json())
.then(data => console.log(data))


document.body.style.backgroundImage = "url('images/backgrounds/dbz-background.jpg')";