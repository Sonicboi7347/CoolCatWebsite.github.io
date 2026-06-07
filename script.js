const catFacts = [
    "Cats spend about 70% of their lives sleeping.",
    "A cat's nose print is unique like a fingerprint.",
    "Cats can jump six times their height.",
    "Cats have over 20 ear muscles.",
    "The oldest known pet cat lived over 9,000 years ago.",
    "A group of cats is called a clowder.",
    "Cats can rotate their ears 180 degrees.",
    "Some cats can run over 48 km/h.",
    "Cats have excellent night vision.",
    "Cats use whiskers to help navigate tight spaces."
    "I love Cats"
    "Cats are cool as hell"
];

function showFact() {
    const randomFact =
        catFacts[Math.floor(Math.random() * catFacts.length)];

    document.getElementById("fact").textContent = randomFact;
}
