/* 
 * Controller should just focus on logic and functions.
 */

var mainApp = angular.module('mainApp',[]);

mainApp.controller('propertyController', 
   ["$scope","propertyService",
   function($scope,propertyService){
    
    //Get properties from propertyService, and handle in case success or fail.
    propertyService.getProperties()
    .success(function (data) {
        $scope.properties = data;
    })
    .error(function (error) {
        $scope.properties = {};
    });
   
   $scope.addProperty = function(index){
       var item_to_be_added = $scope.properties.results[index];
       var saved_list = $scope.properties.saved;
       if($scope.uniqueCheck(item_to_be_added,saved_list)){
            saved_list.push(item_to_be_added);
       }
   };
   
   $scope.isEmpty = function(){
       if($scope.properties !== undefined){
            if($scope.properties.saved.length > 0){
                return false;
            }else{
                return true;
            }
        }else{
            return false;
        }
   };
      
   $scope.removeProperty = function(index){
       $scope.properties.saved.splice(index,1);
   };
   
   $scope.uniqueCheck = function(property_to_be_added,savedProperties){
        var flag = true;
        if(savedProperties.length > 0){
            for(var i=0;i<savedProperties.length;i++){
                if(property_to_be_added.id === savedProperties[i].id){
                    flag = false;
                }
            }
        }
       return flag;
   }
}]);


