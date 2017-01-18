//index.js
;(function(){
	'use strict';
	var app = new Vue({
		el: '#app',
		data: {
			// rawHtml: '<span>Hello Vue!</span>' + new Date()
			message: 'Hello Vue!'
		},
		filters: {
			capitalize: function(value){
				if (!value) return ''
			    value = value.toString();
			    return value.charAt(0).toUpperCase() + value.slice(1)
			}
		}
	});
	var app2 = new Vue({
		el: '#app2',
		data: {
			seen: true,
			listData: [
				{text: 'Learn JavaScript'},
				{text: 'Learn Vue'},
				{text: 'Build something awesome'}
			],
			message: '你还是那么帅！'
		},
		methods: {
			reverseMessage: function(){
				this.message = this.message.split('').reverse().join('')
				console.log(this.message)
			}
		}
	});
	var app3 = new Vue({
		el: '#app3',
		data: {
			groceryList: [
		      	{ text: 'Vegetables' },
		      	{ text: 'Cheese' },
		      	{ text: 'Whatever else humans are supposed to eat' }
		    ]
		}
	});
	var app5 = new Vue({
		el: '#app5',
		data: {
		  classObject: {
		    active: true,
		    'text-danger': true
		  }
		}
	})
})();