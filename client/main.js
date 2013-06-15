function build_graph( term ) {
	Bitly.get_story_from_phrases( [term], function( err, data ) {
		// console.log( data );
		Bitly.get_story_merged_history( data.story_id, {start: new Date('2013-06-10')}, function( err, history ) {
			console.log( history );
		});
		// return story;
	});
}

build_graph( 'kanye' );