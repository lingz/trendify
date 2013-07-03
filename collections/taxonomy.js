Taxonomy = new Meteor.Collection('taxonomy');

Meteor.methods({
  'findSiblings': function(childName) {
    child = Taxonomy.findOne({name: childName});
    if (!child) {
      throw new Meteor.Error(404, "Child element not found in the tree");
    }
    siblings = _.without(Taxonomy.find({father: child.father}).fetch(), child);

    return siblings;
  }
});

