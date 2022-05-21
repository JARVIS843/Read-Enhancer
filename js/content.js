var allText = document.getElementsByTagName('p');
for (var i = 0; i < allText.length; i++) {
    var text = allText[i].innerText;
    var newText = '';
    var words = text.split(' ');
    for (var j = 0; j < words.length; j++) {
        var word = words[j];
        var random = Math.floor(Math.random() * word.length);
        var newWord = '';
        for (var k = 0; k < word.length; k++) {
            if (k <= random) {
                newWord += '<b>' + word[k] + '</b>';
            }
            else {
                newWord += word[k];
            }
        }
        newText += newWord + ' ';
    }
    allText[i].innerHTML = newText;
}

