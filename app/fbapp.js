var fbApp = angular.module('fbApp', ['underscore'])
.controller('fbController',function($scope, _) {
    $scope.numbers = _.range(1, 101);
})
.filter('fizzbuzz', function() {
    return function(num) {
        var retVal = '';
        if (num % 3 === 0) {
            retVal = 'Fizz';
        }
        if (num % 5 === 0) {
            retVal += 'Buzz';
        }
        if (!retVal) {
            retVal = num;
        }
        return retVal;
    }
});