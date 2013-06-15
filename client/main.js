build_graph = function( term ) {
	Bitly.get_story_from_phrases( ['kanye'], function( err, data ) {
		Bitly.get_story_merged_history( data.story_id, {start: new Date('2013-06-10')}, function( err, history ) {
			console.log( err, history );
		});
	});
}

Meteor.startup(function() {
	
	build_graph( 'kanye' );
	
	// so you can know if you've successfully in-browser browsed
	// console.log('Started at ' + location.href);
});