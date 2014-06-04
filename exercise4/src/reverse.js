var reverser = (function () {

	var reverseComponent = {
		init: function (element) {
			this.el = element;
			this.$el = $(element);
		},
		render: function () {
			this.$el.empty().html(templates.reverse({}));

			this.bindDomEvents();

		},
		bindDomEvents: function () {

		}
	};

	var create = function (element) {
		var obj = Object.create(reverseComponent),
			$element = $('<div>').addClass('reverser');

		obj.init($element.get(0));
		
		obj.render();
		
		return obj;

	};


	return {
		create: create
	};

}());