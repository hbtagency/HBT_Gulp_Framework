/* 
 * Service Factory just focus on retriving data. 
 */

mainApp.factory('propertyService', ['$http',
    function($http){
        var propertyService = {};
        propertyService.getProperties = function(){
            return $http.get('data/properties.json');
        };
        return propertyService;        
    }
]);

