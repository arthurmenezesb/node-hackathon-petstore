(function () {

	"use strict"

	angular.module('hackathon-pet').controller('PetController', PetController);
	PetController.$inject = ['$http'];

	function PetController($http) {

		const self = this;

		self.formData = {};

		getTodos();

		/*self.createTodo = function () {
			todoService.createTodo().execute(self.formData).$promise.then(response => {
				self.todos.push(response);
				self.formData = {}
			}, function (error) {
				//TODO error handler
				console.log(error);
			});			
		};*/

		/*self.deleteTodo = function (id) {
			todoService.deleteTodo().execute({id: id}).$promise.then(data => {
				self.todos = self.todos.filter(function(el) {
					return el.id !== id;
				});
			}, function (error) {
				//TODO error handler
				console.log(error);
			});
		};*/

		function getTodos() {
			/*todoService.getTodos().execute().$promise.then(data => {
				self.todos = data;
			}, function (error) {
				//TODO error handler
				console.log(error);
            });*/
            
            $http.get('/pet/1')
                .then(function(data) {
                    self.pets = data.data;
                    console.log(data.data);
                })
                .catch(function(data) {
                    console.log('Error: ' + data);
                });
        };
	}
})();