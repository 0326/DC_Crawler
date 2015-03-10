// controllers.js
var mControllers = angular.module("mControllers", [])


mControllers.controller("indexCtrl", function($scope) {
	$scope.items = [
    {name:'迪威诺DIWEINUO 穿戴运动手表手机',price:299},
    {name:'迪威诺DIWEINUO 穿戴运动手表手机2',price:299},
    {name:'迪威诺DIWEINUO 穿戴运动手表手机3',price:299},
    {name:'迪威诺DIWEINUO 穿戴运动手表手机 Air',price:299},
    {name:'迪威诺DIWEINUO 穿戴运动手表手机',price:299},
    {name:'迪威诺DIWEINUO 穿戴运动手表手机ch',price:299}
  ]
	$scope.getFormData = function(){
		console.log($scope.user);
	}
})

mControllers.controller("menuCtrl", function($scope) {
	$scope.menus = "xxx"
})

mControllers.controller("meetingCtrl", function($scope) {
	
})


