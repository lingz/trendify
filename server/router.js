if (Meteor.isServer) {
	
	console.log(Taxonomy.findOne( {} ));
	
	Meteor.Router.add({
		'/get_history/for/:term': function( term ) {
						
			Bitly.get_story_from_phrases( [term], function( err, data ) {
				// console.log( data );
				ctx.send( 's' );
				Bitly.get_story_merged_history( data.story_id, {start: new Date('2013-06-10')}, function( err, history ) {
					return history;
				});
				// return story;
			});
			
			// return 'going';
		
			// return Meteor.settings.bitly.token;
		},
		'/second-test-endpoint': function() {
			return 'foo';
		},
    '/load': function() {
      input = this.request.body;
      entry = {
        name: input[input.length - 1],
        father: input.length > 1 ? input[input.length - 2] : null
      };
      Taxonomy.insert(entry);
    }
      
  });

}
