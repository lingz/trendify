Bitly = {
	call: function( address, params, callback ) {
		url = "https://api-ssl.bitly.com/v3/" + address;
		params.access_token = "542affb2809377ef813caeae7f6542a49a2071d8";
		
		Meteor.http.get( url, { params: params }, function( err, response ) {
			// console.log( response );
			console.log( params, response );
			callback( err, response.data.data );
		});
	},
	get_story_from_phrases: function( phrases, cb ) {
		Bitly.call( 'story_api/story_from_phrases', { phrases: phrases }, function( err, data ) {
			// console.log( data );
			cb( err, data );
		});
	},
	get_story_history: function( story_id, options, cb ) {
		if( options.filters == null )
		{
			options.filters = ['merged'];
		}
		
		if( options.start != null )
		{
			options.start_time = options.start;
		}
		if( options.start_time != null && !(options.start_time instanceof Date) )
		{
			options.start_time = new Date(options.start_time).getTime();
		}
		if( options.start_time != null ) {
			options.start_time = options.start_time.getTime();
		}
		
		if( options.end != null )
		{
			options.end_time = options.end;
		}
		if( options.end_time != null && !(options.end_time instanceof Date) )
		{
			options.end_time = new Date(options.end_time).getTime();
		}
		if( options.end_time != null ) {
			options.end_time = options.end_time.getTime();
		}
		
		// options.end_time = new Date().getTime();
		
		params = options;
		params.story_id = story_id;
		
		Bitly.call( 'story_api/history', params, function( err, data ) {
			// console.log( data );			
			cb( err, data );
		});
	},
	get_story_merged_history: function( story_id, options, cb ) {
		options.filters = ['merged'];
		
		Bitly.get_story_history( story_id, options, function( err, data ) {
			
			if( err || data.merged.ts == null )
			{
				cb( err, null );
			}
			else
			{
				points = new Array;

				_.each( data.merged.ts, function( item ) {
					// console.log( item );
					points.push( {
						rate: item.r,
						timestamp: new Date(item.t * 1000 )
					});
				});
				
				cb( err, points );
			}
		});
	}
}