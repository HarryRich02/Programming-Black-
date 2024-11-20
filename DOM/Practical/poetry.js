function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

function generate_poetry() {
    const poetry = document.querySelector("#poetry");
    const adjectives = ["sharp", "beautiful", "true", "hypnotic", "black", "ill-fated", "interesting", "talented", "direful"];
    const nouns = ["teaching", "voice", "jellyfish", "cream", "wave", "planes", "brake", "ink", "pizzas"];
    const verbs = ["trap", "instruct", "count", "borrow", "pat", "inject", "race", "grate", "greet"];
    const adverbs = ["equally", "hopefully", "merrily", "definitely", "elegantly", "mockingly", "rigidly", "hardly", "basically"];
    poetry.innerHTML = "<p>The " + adjectives[getRandomInt(0, 9)] + " " + nouns[getRandomInt(0, 9)] + " " + verbs[getRandomInt(0, 9)] + " " + adverbs[getRandomInt(0, 9)] + ".</p>";
};

document.querySelector("#generate").addEventListener("click", generate_poetry)