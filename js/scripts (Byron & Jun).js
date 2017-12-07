//BEL
var titleCase = function(string) {
  var str = string.split(' ');
  var vowels = new RegExp(/[aeiou]/i);
  var consonants = new RegExp(/[^aeiou]/i);
  //console.log(str);
  debugger;
  for (var i = 0; i < str.length; i++) {
    debugger;
    if(str[i].charAt(0).match(vowels)){
      //Checks for vowels and adds way to end
      //console.log("string test: " + str[i]);
      str[i] = str[i] + "way";
      debugger;
    } else if(str[i].charAt(0) === "q" && str[i].charAt(1) === "u") {
        str[i] = str[i].slice(2) + str[i].slice(0, 2) + "ay";
        debugger;
    } else if(str[i].charAt(0).match(consonants)){
      //Checks for consonants and moves consecutive consonants to the end and adds ay
      var numCons = 0;
      for (index = 0; index < str[i].length; index++) {
        debugger;


        if (str[i].charAt(index).match(consonants)) {
          numCons++;
          //console.log("numCons: " + numCons);
          debugger;
        } else if (str[i].charAt(index).match(vowels)) {
          str[i] = str[i].slice(numCons) + str[i].slice(0, numCons) + "ay";
          //console.log("elsed: " + str[i] + " numCons: " + numCons);
          break;
        }

      }
      debugger;
    } else {
      //console.log("Reached Else");
    }
  }
  debugger;
  return str.join(' ');
}
//UL
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    debugger;
    var string = $("#stringInput").val();
    //var stringArray = titleCase(string);

    debugger;
    var stringArray = titleCase(string);
    $("#result").text(stringArray);

  });
});
