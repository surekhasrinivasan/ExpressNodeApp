/*global $*/
$(function() {
	$.get('/cities', appendToList);

	function appendToList(cities) {
		var list = [];
		var content, city;
		for (var i in cities) {
			city = cities[i];
			content = '<a href="#" data-block="' + city + '"><img src="deleteButton.png"</a>' + '  ' + '<a href = "/cities/' + city + '">' + city + '</a>';
			list.push($('<li>', {
				html: content
			}));
		}
		$('.city-list').append(list);
	}
	$('form').on('submit', function(event) {
		event.preventDefault();
		var form = $(this);
		var newData = form.serialize();
		$.ajax({
			type: 'POST',
			url: '/cities',
			data: newData
		}).done(function(cityName) {
			appendToList([cityName]);
			form.trigger('reset');
		});
	});
	$('.city-list').on('click', 'a[data-block]', function(event) {
		if (!confirm('Are you sure?')) {
			return false;
		}
		var target = $(event.currentTarget);
		$.ajax({
			type: 'DELETE',
			url: '/cities/' + target.data('cityName')
		}).done(function() {
			target.parents('li').remove();
		});
	});
});