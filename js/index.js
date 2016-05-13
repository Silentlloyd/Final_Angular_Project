angular.module('codeList', []);
angular.module('codeList')
.factory('codeFactory', function(){
  var clientList = {
    seeds: [
    {firstName: "Greg",
    lastName: "Wilson",
     gender: "M"
    },
    {firstName: "Celia",
    lastName: "Willis",
     gender: "F"
    },
     {firstName: "Anna",
    lastName: "Harding",
     gender: "F"
    },
    {firstName: "Lloyd",
    lastName: "Smith",
     gender: "M"
    },    
    {firstName: "Lydia",
    lastName: "Grant",
     gender: "F"
    },
    {firstName: "Anthony",
    lastName: "Morrison",
     gender: "M"
    },
    {firstName: "Matt",
    lastName: "Johnson",
     gender: "M"
    },
    {firstName: "Roger",
    lastName: "Chang",
     gender: "M"
    },
    ] 
  };
  return clientList.seeds;
  
})
  
 .controller('code.list', ['$scope', 'codeFactory', function($scope, codeFactory){
  $scope.title ="The Barber's Contact List";
  $scope.alpha ='firstName';
   //Make alphabetical
  $scope.list = codeFactory;
   $scope.inputFilter="";
   //Add content for input
}])