
//ready event
$(document).ready(function() {
  console.log("Let\'s Play!")

    var random = Math.floor((Math.random() * 50) + 1); //get computer randomNumber
    console.log(random)
    $('#box1').text(random); //grab box 1 div in html and replace randomNumber in that div in html

    //store current wins and losses when the page refreshes to a new game
    $(window).load(function() {
      $('#numberWins').text(window.localStorage.getItem('wins')); //calling global variable
        $('#numberlosses').text(window.localStorage.getItem('losses'));
    });

  //global variables
  var currentScoreValue = 0;
  var currentNumb = 0;
  var losses = window.localStorage.getItem('losses') || 0; //calling losses and wins or setting it to 0
  var wins = window.localStorage.getItem('wins') || 0;

  //find gem class in html to click and parsing integer of the value attribute of whatever "this" button is clicked
  $('.gem').click(function() {
    currentNumb += parseInt($(this).attr("value"));
    console.log(currentNumb)
    $("#currentTotal").text(currentNumb); //finding current total in html and replacing current number on screen

    //if conditionals
    if (currentNumb === random) {
      alert("You Win!")
      scoreWin(); //calling score fucntion already created
      return(currentNumb)


    } else if (currentNumb > random) {
      alert("You Lost!")
      scoreLose();
      return(currentNumb)


    }
    //creating score function so it can be called.  adding 1 to wins and losses to keep track in html
    function scoreWin() {
      wins++;
      window.localStorage.setItem('wins', wins);//storing wins in 'localStorage'aka google webpage
      $('#numberWins').text(window.localStorage.getItem('wins'));
    }

    function scoreLose() {
      losses++;
      window.localStorage.setItem('losses', losses);
      $('#numberlosses').text(window.localStorage.getItem('losses'));

    }





  });
});
