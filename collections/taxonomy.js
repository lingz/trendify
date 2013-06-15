Taxonomy = new Meteor.Collection('taxonomy');

Meteor.methods({
  'findSiblings': function(child) {
    siblings = _.without(Taxonomy.find({father: child.father}).fetch(), child);

    return siblings;
  }
});
