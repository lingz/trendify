if (Meteor.isServer) {
	Meteor.Router.add({
		'/test': function() {
			
			Bitly.get_story_from_phrases( ['kanye'], function( err, data ) {
				// console.log( data );
				Bitly.get_story_merged_history( data.story_id, {start: new Date('2013-06-10')}, function( err, history ) {
					// console.log( history );
				});
				// return story;
			});
			
			return 'going';
		
			// return Meteor.settings.bitly.token;
		},
		'/second-test-endpoint': function() {
			console.log(this.request.body);
			return 'foo';
		}
	});
}