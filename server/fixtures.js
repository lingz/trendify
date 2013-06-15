//parses one line of the taxonomy files and returns an array of the results
// parses on line of the taxonomy and returns the array contained
var parseLine = function(line) {
  var patt = new RegExp("\[([^]]+)\]");
  return patt;
};

console.log(parseLine("hello [1,2,3]"));
