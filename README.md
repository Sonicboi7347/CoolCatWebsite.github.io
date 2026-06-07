# CoolCatWebsite.github.io
It's a website about cats cuz I love cats a ton
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CatHub Pages 🐱</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:linear-gradient(135deg,#ffe5ec,#ffd6a5);
    color:#333;
}

header{
    text-align:center;
    padding:60px 20px;
    background:#ff8fab;
    color:white;
}

header h1{
    font-size:3rem;
}

header p{
    margin-top:10px;
    font-size:1.2rem;
}

.cat{
    font-size:4rem;
    animation:bounce 2s infinite;
}

@keyframes bounce{
    50%{
        transform:translateY(-15px);
    }
}

.container{
    max-width:1000px;
    margin:auto;
    padding:40px 20px;
}

.card{
    background:white;
    padding:25px;
    margin:20px 0;
    border-radius:15px;
    box-shadow:0 4px 12px rgba(0,0,0,0.1);
}

.card h2{
    color:#ff5d8f;
    margin-bottom:10px;
}

.steps li{
    margin:10px 0;
    line-height:1.6;
}

button{
    background:#ff5d8f;
    color:white;
    border:none;
    padding:12px 20px;
    border-radius:10px;
    cursor:pointer;
    margin-top:15px;
    font-size:1rem;
}

button:hover{
    background:#ff3370;
}

footer{
    text-align:center;
    padding:30px;
    background:#ff8fab;
    color:white;
    margin-top:40px;
}

#fact{
    margin-top:15px;
    font-weight:bold;
    color:#444;
}
</style>
</head>
<body>

<header>
    <div class="cat">🐱</div>
    <h1>Welcome to CatHub Pages!</h1>
    <p>Learn how to publish your website using GitHub Pages.</p>
</header>

<div class="container">

    <div class="card">
        <h2>🐾 What is GitHub?</h2>
        <p>
            GitHub is a platform where programmers store, share, and collaborate on code.
            It is widely used by developers and can also host websites for free using GitHub Pages.
        </p>
    </div>

    <div class="card">
        <h2>🐾 Steps to Create Your Website</h2>
        <ol class="steps">
            <li>Create a free GitHub account.</li>
            <li>Click the <strong>Repositories</strong> tab.</li>
            <li>Click <strong>New Repository</strong>.</li>
            <li>Name it: <strong>yourusername.github.io</strong></li>
            <li>Select <strong>Add a README file</strong>.</li>
            <li>Create the repository.</li>
            <li>Upload your website files.</li>
            <li>Make sure your main page is named <strong>index.html</strong>.</li>
            <li>Commit your changes.</li>
            <li>Visit <strong>yourusername.github.io</strong> in a browser.</li>
        </ol>
    </div>

    <div class="card">
        <h2>🐾 Cat Fact Generator</h2>
        <p>Click the button to discover a random cat fact!</p>
        <button onclick="showFact()">Show Cat Fact</button>
        <p id="fact"></p>
    </div>

    <div class="card">
        <h2>🐾 Why Use GitHub Pages?</h2>
        <ul>
            <li>Free website hosting.</li>
            <li>Easy updates.</li>
            <li>Professional portfolio building.</li>
            <li>Perfect for HTML, CSS, JavaScript, and p5.js projects.</li>
        </ul>
    </div>

</div>

<footer>
    <h3>🐱 CatHub Pages</h3>
    <p>Upload your web projects and show them to the world!</p>
</footer>

<script>
function showFact(){
    const facts = [
        "Cats can jump up to six times their height.",
        "A group of cats is called a clowder.",
        "Cats spend about 70% of their lives sleeping.",
        "A cat's nose print is unique like a fingerprint.",
        "Cats have over 20 muscles controlling their ears.",
        "The oldest known pet cat lived over 9,000 years ago."
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fact").textContent = randomFact;
}
</script>

</body>
</html>
