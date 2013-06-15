Taxonomy = new Meteor.Collection('taxonomy');

Meteor.methods({
  'findSiblings': function(childName) {
    console.log(childName);
    child = Taxonomy.findOne({name: childName});
    siblings = _.without(Taxonomy.find({father: child.father}).fetch(), child);

    return siblings;
  }
});

