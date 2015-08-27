app.directive('flashCard', function (ScoreFactory) {
    var link = function (scope, element, attrs) {
	    scope.answerQuestion = function (answer, flashCard) {
	        if (!flashCard.answered) {
	            flashCard.answered = true;
	            flashCard.answeredCorrectly = answer.correct;
	            (flashCard.answeredCorrectly) ? ScoreFactory.correct++ : ScoreFactory.incorrect++;
	        }
	    };
    }; 

    return {
        restrict: 'E',
        templateUrl: '/templates/flash-card.html',
        scope: {
            card: '='
        },
        link: link
    };
});
