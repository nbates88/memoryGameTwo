'use strict';

/**
 * @ngdoc function
 * @name memoryGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the memoryGameApp
 */
angular.module('memgameApp')
  .controller('MainCtrl', function ($scope) {
  	var Card = function(path){
  		this.path = path;
  		this.class = "";
  	}

  	Card.prototype.setClass = function(targetClass){
  		this.class = targetClass;
  	}

  	Card.prototype.flip = function(){
  		if(this.class === "flipped"){
  			this.setClass("");
  		}else{
  			this.setClass("flipped");
  		}
  	}

  	Card.prototype.disable = function(){
  		this.setClass("flipped disable");
  	}

  	var cardsArray =[];
    var cardPath = "../../images/"
    var numClicks = 0;
  	var cardChosen1 = "";
    var cardChosen2 = "";
    var cardChosen1Index;
    var cardChosen2Index;

  	
  	for(var i = 2; i <= 10; i++){
      cardsArray.push(new Card("card" + i));
      cardsArray.push(new Card("card" + i))
  	}

  	
    shuffle(cardsArray);
  	$scope.cards = cardsArray;
  	
  	$scope.cardOnClick = function(cardPath, index){
  		numClicks++;
  
  		if(numClicks === 1){
  			flip(index);
  			cardChosen1 = cardPath;
  			cardChosen1Index = index;

  		} else if(numClicks === 2){
  			numClicks = 0;
  			flip(index);
  			cardChosen2 = cardPath;
  			cardChosen2Index = index;
  			
  			if (cardChosen1 === cardChosen2 && cardChosen1Index !== cardChosen2Index) {
		        disable(cardChosen1Index);
		        disable(cardChosen2Index);
	    	} else {
	    		flipCardsBack(cardChosen1Index, cardChosen2Index);
	    	}	
  		}
  	}

  	$scope.newGameOnClick = function(){
  		numClicks = 0;

		  for(var i = 0; i < $scope.cards.length; i++){
        $scope.cards[i].class = '';
		  }
  		setTimeout(function(){
  			shuffle($scope.cards)
  		}, 100);
  	}

  	function flip(id){
  		$scope.cards[id].flip();
  	}

  	function disable(id) {
  			$scope.cards[id].disable();
  	}

    function flipCardsBack(index1, index2){
      setTimeout(function(){
            flip(index1);
            flip(index2);
            $scope.$apply();
          }, 1000)
    }

  });
