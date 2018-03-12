
//ready event
$(document).ready(function() {
  console.log("Let\'s Play!")

    var random = Math.floor((Math.random() * 50) + 1);
    console.log(random)
    $('#box1').text(random);

    $(window).load(function() {
        $('#numberWins').text(window.localStorage.getItem('wins'));
          $('#numberlosses').text(window.localStorage.getItem('losses'));
    });


  var currentScoreValue = 0;
  var currentNumb = 0;
  var losses = window.localStorage.getItem('losses') || 0;
  var wins = window.localStorage.getItem('wins') || 0;

  $('.gem').click(function() {
    currentNumb += parseInt($(this).attr("value"));
    console.log(currentNumb)
    $("#currentTotal").text(currentNumb);


    if (currentNumb === random) {
      alert("You Win!")
      scoreWin();
      return(currentNumb)


    } else if (currentNumb > random) {
      alert("You Lost!")
      scoreLose();
      return(currentNumb)


    }
    function scoreWin() {
      wins++;
      window.localStorage.setItem('wins', wins);
      $('#numberWins').text(window.localStorage.getItem('wins'));
    }

    function scoreLose() {
      losses++;
      window.localStorage.setItem('losses', losses);
      $('#numberlosses').text(window.localStorage.getItem('losses'));

    }





  });
});
