if (Meteor.isServer) {
	Meteor.Router.add({
		'/test': function() {
			
			Bitly.story_from_phrases( ['clinton'], function( err, story ) {
				return story;
			});
		
			// return Meteor.settings.bitly.token;
		},
		'/second-test-endpoint': function() {
			console.log(this.request.body);
			return 'foo';
		}
	});
}