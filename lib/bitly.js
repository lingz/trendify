Bitly = {
	call: function( address, params, callback ) {
		url = Meteor.settings.bitly.endpoint + address;
		params.access_token = Meteor.settings.bitly.token;
		
		Meteor.get( url, { params: params }, function( err, response ) {
			callback( err, response.data );
		});
	},
	story_from_phrases: function( phrases, cb ) {
		Bitly.call( 'story_api/story_from_phrases', { phrases: 'obama' }, function( err, data ) {
			cb( err, data );
		});
	}
}