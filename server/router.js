if (Meteor.isServer) {
	Meteor.Router.add({
		'/get_history/for/:term': function( term ) {
			
			ctx = this;
			
			Bitly.get_story_from_phrases( [term], function( err, data ) {
				// console.log( data );
				ctx.send( 's' );
				Bitly.get_story_merged_history( data.story_id, {start: new Date('2013-06-10')}, function( err, history ) {
					return 'bla';
					return history;
				});
				// return story;
			});
			
			// return 'going';
		
			// return Meteor.settings.bitly.token;
		},
		'/second-test-endpoint': function() {
			console.log(this.request.body);
			return 'foo';
		}
	});
}