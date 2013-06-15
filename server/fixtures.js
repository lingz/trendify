if (Taxonomy.find().count() === 0) {
  //parses one line of the taxonomy files and returns an array of the results
  var parseLine = function(line) {
    var patt = /\[([^\]]+)\]/;
    return patt.exec(line)[1].split(",");
  };

  var tax = new File("taxonomy.txt").open();
  console.log(tax.readln());
  

}


