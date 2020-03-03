var speech ="I'm a good person. I don't snor at night";
var wordCount = 0;

for(i=0; i<speech.length; i++){
    var char = speech[i];
    if(char == " ") {
        wordCount++;
    }
}
console.log(wordCount);

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var count = 0;
for(var i = 0; i < sentence.length; i++){
    var letter = sentence[i];
    if(letter == "a"){
        count++;
    }
}
console.log(count);