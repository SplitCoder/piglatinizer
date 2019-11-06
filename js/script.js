$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    $("button").click(function(){
        let intake = $(".input").val();
            let sentence = intake.split(" ");
            let ExeptionLetters = ["a", "e", "i", "o", "u"];
        sentence.forEach(function(word){
            let FirstL=word[0].toLowerCase();
                if (ExeptionLetters.includes(FirstL)) {
                    let word1= word + "ay ";
                    $(".output").append(word1);
                }else {
                    var word2= word.slice(1) + word + "ay ";
            }
                                $(".output").append(word2);
        });
    });
});