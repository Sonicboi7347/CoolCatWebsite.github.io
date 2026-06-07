const catFacts = [
    "Cats can jump up to six times their height.",
    "Cats spend about 70% of their lives sleeping.",
    "A group of cats is called a clowder.",
    "Cats have over 20 ear muscles.",
    "A cat's nose print is unique like a fingerprint.",
    "The oldest known pet cat lived over 9,000 years ago.",
    "Cats can rotate their ears 180 degrees.",
    "Most cats don't have eyelashes."
];

function showFact() {
    const randomIndex = Math.floor(Math.random() * catFacts.length);

    document.getElementById("fact").textContent =
        catFacts[randomIndex];
}
