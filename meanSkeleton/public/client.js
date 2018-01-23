/*global $ append*/
$(function() {
	$.get('/cities', appendToList);

	function appendToList(cities) {
		for (var i = 0; i < cities.length; i++) {
			var list = document.createElement("OPTION");
			list.setAttribute("value", cities[i]);
			list.innerHTML = cities[i];
			document.getElementById('selection').appendChild(list);
		}
	}
});