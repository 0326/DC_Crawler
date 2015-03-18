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
    $scope.datalist = [
        {
            id: 100,
            key: ["图书","音像","数字商品"],
            children: [
                {
                    id: 1001000,
                    key: ["电子书"],
                    children: ["免费","小说","励志与成功"]
                },{
                    id: 1001001,
                    key: ["数字音乐"],
                    children: ["通俗流行","古典音乐"]
                },{
                    id: 1001002,
                    key: ["音像"],
                    children: ["音乐","影视","教育音像","游戏"]
                }
            ]
        },{
            id: 101,
            key: ["家用电器"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 102,
            key: ["手机","数码","通信"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 103,
            key: ["电脑","办公"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 104,
            key: ["家居","家具","家装","厨具"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 105,
            key: ["男装","女装","内衣","珠宝"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 106,
            key: ["个性化妆"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 107,
            key: ["运动户外"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 108,
            key: ["鞋靴","箱包","钟表","奢侈品"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 109,
            key: ["整车","汽车用品"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 110,
            key: ["母婴","玩具乐器"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 111,
            key: ["食品饮料","酒类","生鲜"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 112,
            key: ["营养保健"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        },{
            id: 113,
            key: ["彩票","旅行","充值","票务"],
            children: [
                {
                    id: 1011000,
                    key: ["大家电"],
                    children: ["平板电视","空调"]
                },{
                    id: 1011001,
                    key: ["生活电器"],
                    children: ["取暖电器"]
                }
            ]
        }
    ];

})


