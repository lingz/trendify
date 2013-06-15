Taxonomy = new Meteor.Collection('taxonomy');

Meteor.methods({
  'findSiblings': function(child) {
    children = _.without(Taxonomy.find(child.father).fetch(), child);

    return children;
  }
});
