urlToSiblings =  function(url) {
  console.log("starting");
  Meteor.call('sociocast', url, function(err, resp){
    console.log(resp);
    Meteor.call('findSiblings', resp, function(err, response){
      Session.set('results', response);
      console.log("response");
    });
  });
};

