app.controller('NewCardController', function($scope,$http, FlashCardsFactory){
	$scope.newCard = {	
		question: null, 
		category: null, 
		answers : [
			{ text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
		]
	};
	$scope.submit=function(){
		$http.post('/cards',$scope.newCard).then(function(res){
			// console.log(res);
			FlashCardsFactory.flashCards.unshift(res.data);
			console.log(FlashCardsFactory.flashCards);
			$scope.newCard = {
				question: null, 
				category: null, 
				answers : [
					{ text: null, correct: false },
			        { text: null, correct: false },
			        { text: null, correct: false }
				]
			};
		});
		$scope.submitted=false;
	};

	$scope.existingCardId = '';

	$scope.update = function (){
		var newCard = {
			id: $scope.existingCardId,
			card: $scope.newCard
		};
		$http.put('/cards', newCard)
		.then(function(res){
			console.log(FlashCardsFactory.flashCards);
			FlashCardsFactory.getFlashCards();	
		});
	};

	$scope.submitted=false;
});