jQuery('document').ready(function() {
	jQuery('button').on('click', function() {
		
		var value1, value2;

		value1 = parseInt(jQuery('#val1').val());
		value2 = parseInt(jQuery('#val2').val());

		value3 = value1 + value2

		jQuery('#rezultat').html(value3);

	});
});
