$(document).ready(function(){

  $('#submit').click(function(){
    var limit = parseFloat($('#limit').val());
    var multiple = parseFloat($('#multiple').val());

    if($.isNumeric(limit)===false||$.isNumeric(multiple)===false){
      alert('Use numbers dummy');
    }
    else if(limit<0||multiple<=0){
      alert('No negative numbers');
    }
    else if(multiple>limit){
      alert('Nope');
    }
    else{
      var array = [];
      for(i=0;i<=limit;i+=multiple){
        array.push(i);
      }
      alert(array);
    }
  });

// Word Puzzle

    $('#submit2').click(function() {

      var sentence = $("#string").val();
      var sentenceSplit = sentence.split("");
      console.log(sentenceSplit);

      for (i=0; i<sentenceSplit.length; i++ ){
        if (sentenceSplit[i] === "a"||sentenceSplit[i] === "o"||sentenceSplit[i] === "e"||sentenceSplit[i] === "i"||sentenceSplit[i] === "u"){
          console.log(sentenceSplit[i]);
          sentenceSplit[i] = "-";
        }
       }
       console.log(sentenceSplit);

      var output = sentenceSplit.join("");
      alert(output);

    });
});
