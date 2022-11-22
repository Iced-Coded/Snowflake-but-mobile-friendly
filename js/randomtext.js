var word = ['Aw man, the time machine broke.', 'How did we manage to get here?']

function run() {
    var words = word[Math.floor(Math.random() * word.length)];
    document.getElementById("random").innerHTML = words
}