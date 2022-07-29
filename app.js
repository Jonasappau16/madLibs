console.log("you stupid pos");

function createParagraph(){
    var wordOne = document.getElementById('textOne').value;
    var wordTwo = document.getElementById('textTwo').value;
    var wordThree = document.getElementById('textThree').value;
    var wordFour = document.getElementById('textFour').value;
    var wordFive = document.getElementById('textFive').value;
    var wordSix = document.getElementById('textSix').value;
    var wordSeven = document.getElementById('textSeven').value;
    var wordEight = document.getElementById('textEight').value;
     


var paragraph="I would like to say a few  " + wordOne + " words about the most important invention of the twentieth century. I am not referring to " + wordTwo + " or even to the discovery of " + wordThree + " The most  " + wordFour + " inverntion,in my opinion ,is sneakers.If it were not for sneakers our " + wordFive + " would be dirty,cold and " + wordSix + " .Sneankers keep me from skidding if the " + wordSeven + " are slippery,and when i run ,they keep me from stubbing my " + wordEight + "."

// var paragraph = 'However the sentence starts ' + wordOne + ' the string continues here.  Here is the next word ' + wordTwo + ' . And this will continue on until the end of the ' + wordFour + ' MadLib'
console.log(paragraph)

    document.getElementById('answer').innerHTML = paragraph;
}

// console.log('app.js is connected')

// function createParagraph() {
//     console.log("create paragraph has been logged")
//     var wordOne = document.getElementById("textOne").value;
//     var wordTwo = document.getElementById("textTwo").value;
//     var wordThree = document.getElementById("textThree").value;
//     var wordFour = document.getElementById("textFour").value;
//     var wordFive = document.getElementById("textFive").value;
//     var wordSix = document.getElementById("textSix").value;
//     var wordSeven = document.getElementById("textSeven").value;
//     var wordEight = document.getElementById("textEight").value;
    

//     console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight)

//     var paragraph = "<p> Today, every student has a computer small enough to fit into his " + wordOne + " ." + " He can solve any math problem by simply pushing the computer\'s little " + wordTwo + "." + " Computers can add, multiply, divide, and " + wordThree + "." + " They can also " + wordFour + " better than a human.  Some computers are "+ wordFive + ". " + "Others have " + wordSix + " screen that shows all kinds of " + wordSeven +" and " + wordEight + " figures.</p>"

//     console.log(paragraph);

//     document.getElementById("answer").innerHTML = paragraph;
// }