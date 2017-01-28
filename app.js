
(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getItems();

  list.buyItem = function(itemIndex) {

    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var list = this;

	list.boughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Peanut Butter",
    quantity: "158"
  }
];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {

    boughtItems.push(items[itemIndex]);

    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function() {
    return boughtItems;
  }
};

})();
