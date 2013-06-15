Meteor.methods({
  sociocast: function(url) {
    this.unblock();
    var timestamp = Math.round(+new Date()/1000);
    var callingUrl = "http://api.sociocast.com/1.0/content/profile?ts=" + 
      timestamp + "&apikey=" + "g89dv60LlS0QPERttJiI4yht" + "&sig=" + getSig(timestamp) + 
      "&url=" + url + "&humread=" + "true";
    var result = Meteor.http.get(callingUrl);
    console.log(result);
    if (result.statusCode == 200) {
      var classification = result.data.classification;
      var keys = Object.keys(classification);
      var res = keys[keys.length - 1].split(',');
      var parsed = res[res.length -1].trim();
      return parsed;
    } else if (result.statusCode == 202){
      // the result hasn't been cached, send it back and wait
      return null;
    } else {
      throw new Meteor.Error(result.statusCode);
    }
  }
});

