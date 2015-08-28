app.controller('NewCardController', function($scope,$http){
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
			console.log(res);
			$scope.newCard = {
				question: null, 
				category: null, 
				answers : [
					{ text: null, correct: false },
			        { text: null, correct: false },
			        { text: null, correct: false }
				]
			};
		})
		$scope.submitted=false;
	}
	$scope.submitted=false;
});