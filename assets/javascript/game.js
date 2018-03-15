
//ready event
$(document).ready(function() {
  console.log("Let\'s Play!")

var random = Math.floor((Math.random() * 101) + 19); //get computer randomNumber
console.log(random)

$('#box1').text(random);
// appending random number to the box1 id in the html doc

  //global variables
  var btnRuby= Math.floor((Math.random() * 11) + 1);
  var btnSapp= Math.floor((Math.random() * 11) + 1);
  var btnEmer= Math.floor((Math.random() * 11) + 1);
  var btnTopa= Math.floor((Math.random() * 11) + 1);
  //setting up randomNumber for each jewel 1-12

  var currentScoreValue = 0;
  var losses = 0;
  var wins = 0;
  //declare variables for scorekeeping

  $('numberWins').text(wins);
  $('numberlosses').text(losses);

  function resetPage() {
    var random = Math.floor((Math.random() * 101) + 19);
    console.log(random);
     btnRuby= Math.floor((Math.random() * 11) + 1);
     btnSapp= Math.floor((Math.random() * 11) + 1);
     btnEmer= Math.floor((Math.random() * 11) + 1);
     btnTopa= Math.floor((Math.random() * 11) + 1);
    currentScoreValue = 0;
    $('#currentTotal').text(currentScoreValue);
  };

    var btn1Ruby = document.getElementById('btnRuby');
    var btn2Sapp = document.getElementById('btnSapp');
    var btn4Topa = document.getElementById('btnTopa');
    var btn3Emer = document.getElementById('btnEmer');


  $('.gem').click(function(){// something is messed up here
    btnRuby;
    btnSapp;
    btnEmer;
    btnTopa;
    currentScoreValue = currentScoreValue + currentTotal;
    $('#currentTotal').text(currentScoreValue);

    //if conditionals
    if (currentScoreValue === random) {
      alert("You Win!")
      scoreWin(); //calling score fucntion already created
      return(currentScoreValue)
      resetPage();


    } else if (currentScoreValue > random) {
      alert("You Lost!")
      scoreLose();
      return(currenScoreValue)
      resetPage();
}
});
});

function scoreWin() {
  wins++;
  $('#numberWins').text(wins);
}

function scoreLose() {
  losses++;
  $('#numberlosses').text(losses);
}
