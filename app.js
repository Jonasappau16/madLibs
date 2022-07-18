function createParagraph(){
    var wordOne= document.getElementById('1').value;
    var wordTwo=document.getElementById('2').value;
    var wordThree=document.getElementById('3').value;
    var wordFour=document.getElementById('4').value;
    var wordFive=document.getElementById('5').value;
    var wordSix=document.getElementById('6').value;
    var wordSeven=document.getElementById('7').value;
    var wordEight=document.getElementById('8').value;
     


var paragraph="I would like to say a few " + wordOne + " words about the most important invention of the twentieth century. I am not referring to " + wordTwo + " or even to the discovery of " + wordThree + " The most  " + wordFour + " inverntion,in my opinion ,is sneakers.If it were not for sneakers our " + wordFive + " would be dirty,cold and " + wordSix + " .Sneankers keep me from skidding if the " + wordSeven + " are slippery,and when i run ,they keep me from stubbing my " + wordEight + " "

// var paragraph = 'However the sentence starts ' + wordOne + ' the string continues here.  Here is the next word ' + wordTwo + ' . And this will continue on until the end of the ' + wordFour + ' MadLib'


    document.getElementById('answer').innerHTML = paragraph;
}
