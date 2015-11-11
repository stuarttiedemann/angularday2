angular.module('myApp',[]).controller('myController',function($scope){
	$scope.addPerson = function(){
		$scope.students.push({
			name:$scope.newName, 
			desc: $scope.newDesc
		})
		$scope.newName = "";
		$scope.newDesc = "";
	}
	$scope.removeStudent = function(studentToRemove){
		var i = $scope.students.indexOf(studentToRemove);
		$scope.students.splice(i,1);
	}
	$scope.students = [
		{
			name: 'Freddy',
			desc: 'Made a cool football game',
			luckyNumber:9
		},
		{
			name: 'Chance',
			desc: 'Bootstrap Guy',
			luckyNumber:11
		},
		{
			name: 'Chase',
			desc: 'Alter ego for Chance',
			luckyNumber:153
		},
		{
			name: 'Will',
			desc: 'The wig guy',
			luckyNumber:154
		},
		{
			name: 'Stephen',
			desc: 'Awesome theme',
			luckyNumber: 40000000
		},
		{
			name: 'Griffin',
			desc: 'DOTA2 addict',
			luckyNumber:63
		},
		{
			name: 'Oliver',
			desc: 'Eats 8 times a day',
			luckyNumber: 32
		}
	];
})