app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
  
  $scope.isLoaded = false;
  $scope.currentCategory = 'All';
  $scope.cheatMode = false;
  $scope.cheatText = 'Enable';
  
  FlashCardsFactory.getFlashCards()
  .then(function (flashCardsArray) {
    FlashCardsFactory.flashCards = flashCardsArray;
    $scope.flashCards = FlashCardsFactory.flashCards;
    $scope.isLoaded = true;    
  });


  $scope.getCategoryCards = function (category) {
    $scope.isLoaded = false;
    $scope.currentCategory = category;
    FlashCardsFactory.getFlashCards(category)
    .then(function (flashCardsArray) {
      FlashCardsFactory.flashCards = flashCardsArray;
      $scope.flashCards = FlashCardsFactory.flashCards;
      $scope.isLoaded = true;
    });
  };

  $scope.toggleCheat = function() {
    $scope.cheatMode = $scope.cheatMode ? false : true;
    $scope.cheatText = $scope.cheatMode ? 'Disable' : 'Enable';
  };

  $scope.categories = [
      'MongoDB',
      'Express',
      'Angular',
      'Node',
      'All'
  ];

});

app.filter('cheat', function() {
  return function(answers) {
    return answers.filter(function (answer) {
      return answer.correct;
    });
  };
});