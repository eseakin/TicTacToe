//victory conditions
var checkRows = function(board) {

};
var checkColumns = function(board) {

};
var checkDiagForward = function(board) {

};
var checkDiagBack = function(board) {

};

//initialize
$(document).ready(function() {
	//player moves
	var move = 'O';
	var XO = function() {
		if (move === 'O') {
			move = 'X'
		} else {
			move = 'O'
		}
		return move;
	}

//build board
	$('#app').append('<div id=gameBox></div>');
	for (var i = 0; i < 3; i++) {
		$('#gameBox').append('<div class="row" id=row' + i + '></div>');
		for (var j = 0; j < 3; j++) {
			$('#row' + i).append('<div class="box" id=box' + i + j + '>hi</div>');

			//add click handler
			$('#box' + i + j).click(function() {
				if ($(this).text() === 'hi') {
					$(this).text(XO);
				}

				//victory
				if (checkRows() || checkColumns() || checkDiagForward() || checkDiagBack()) {
					$('#app').append('<h1>Game Over!</h1>');
				}
			});
		}
	}

});



