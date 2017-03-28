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
});
