build_graph = function( term ) {
	Bitly.get_story_from_phrases( [ term ], function( err, data ) {
		console.log( data );
		Bitly.get_story_merged_history( data.story_id, {start: new Date('2013-06-10')}, function( err, history ) {
			
			var margin = {top: 20, right: 20, bottom: 30, left: 20},
				 width = 500 - margin.left - margin.right,
			    height = 300 - margin.top - margin.bottom;

			// var parseDate = d3.time.format("%d-%b-%y").parse;

			var x = d3.time.scale()
			      .range([0, width]);

			var y = d3.scale.linear()
			     .range([height, 0]);

			var xAxis = d3.svg.axis()
			   .scale(x)
			   .orient("bottom");

			var yAxis = d3.svg.axis()
			   .scale(y)
			   .orient("left");

			var area = d3.svg.area()
			   .x(function(d) { return x(d.timestamp); })
			   .y0(height)
			   .y1(function(d) { return y(d.rate); });

			var svg = d3.select("body").append("svg")
			   .attr("width", width + margin.left + margin.right)
			   .attr("height", height + margin.top + margin.bottom)
			 	.append("g")
			   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			_.each( history, function( h ) {

				// console.log( h );
				// h.date = h
				
			});

			x.domain(d3.extent(history, function(d) { return d.timestamp; }));
			y.domain([0, d3.max(history, function(d) { return d.rate; })]);

			svg.append("path")
				.datum(history)
				.attr("class", "area")
				.attr("d", area);

			svg.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis);

			svg.append("g")
			    .attr("class", "y axis")
			    .call(yAxis)
			  	// .append("text")
			  	// 		    	.attr("transform", "rotate(-90)")
			  	// 		    	.attr("y", 6)
			  	// 		    	.attr("dy", ".71em")
			  	// 		    	.style("text-anchor", "end")
			  	// 		    	.text("Price ($)");
			
		
			// console.log( err, history );
		});
	});
}


run_analysis = function( url ) {
	
  Meteor.call("sociocast", url, function(err, resp) {
    if (err) {
      // the site can't be found? Show this?
      console.log(err);
    } else {
      Meteor.call("findSiblings", resp, function(err, resp){
        if (err) {
          // siblings can't be found! show an error message?
          console.log(err);
        } else {
          _.each(resp, function(node) {
            build_graph(node.name);
          });
        }
      });
    }
  });
	// SOMEHOW THIS GETS THE LIST OF NEIGHBORS; they have to be just the first bit? apparently long strings aren't supported....
	
	// console.log( url );
	// Meteor.call( 'sociocast', url, function( err, response ) {
	// 	
	// 	console.log( Taxonomy.findOne( {'name': response } ) );
	// 	
	// 	console.log( response );
	// });
};

Meteor.startup(function() {
		
	run_analysis( 'http://www.samsung.com/global/microsite/galaxys4/' );
	
	// so you can know if you've successfully in-browser browsed
	// console.log('Started at ' + location.href);
});

Deps.autorun(function() {
  console.log(Session.get('results'));
});
