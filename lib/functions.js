Meteor.methods({
  'get_history': function( term ) {
	
	// Set up a future
    var fut = new Future();

	Bitly.get_story_from_phrases( [term], function( err, data ) {
		Bitly.get_story_merged_history( data.story_id, {start: new Date('2013-06-10')}, function( err, history ) {
			fut.return( err, history );
		});
	});

    // Wait for async to finish before returning
    // the result
    return fut.wait();
	
  }
});