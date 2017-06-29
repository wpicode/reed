

var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope','$interval','$sce','$http', function($scope,$interval,$sce,$http) {
    $scope.sort = '-Name';
    $scope.results = false;
    $scope.getCandidates = function(){
        $http.get("/api/screenings").then(function(response) {
            $scope.allresults = response.data.Matches;
            $scope.results =  $scope.allresults;
            $scope.Name = $scope.results[0].Name;
            $scope.Id = $scope.results[0].Id;
            $scope.MostRecentEmployment = $scope.results[0].MostRecentEmployment;
            $scope.Salary = $scope.results[0].Salary;
            $scope.CurrentLocation = $scope.results[0].CurrentLocation;
            $scope.skills = $scope.results[0].Skills;

        });
        
    }


    $scope.selectCandidate = function(id){
      $('.candidate').removeClass('selected');
      $scope.results.forEach(function(candidate) {
        if(candidate.Id==id){
          $('#candidate'+candidate.Id).addClass('selected');
            $scope.Name = candidate.Name;
            $scope.MostRecentEmployment = candidate.MostRecentEmployment;
            $scope.Salary = candidate.Salary;
            $scope.CurrentLocation = candidate.CurrentLocation;
            $scope.skills = candidate.Skills;
        }
      });
    }

    $scope.shortlisted = [];
    $scope.shortlist = function(){
        $scope.shortlisted.push($scope.Id);
    }
}]);


app.filter("toArray", function(){
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            result.push(val);
        });
         return result.reverse();
    };
});

