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
		},
    '/load': function() {
      input = this.request.body;
      entry = {
        name: input[input.length-1],
        father: input.length > 1 ? input[input.length - 2] : null
      };
      Taxonomy.insert(entry);
    }
      
	});

}
