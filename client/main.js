Meteor.startup(function() {
	
	Meteor.call( 'get_history', 'obama', function( err, history ) {
		console.log( err, history );
	});
	
	// so you can know if you've successfully in-browser browsed
	// console.log('Started at ' + location.href);
});