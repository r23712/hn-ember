var belongsTo = DS.belongsTo;

export default = App.Vote = DS.Model.extend({
  user: belongsTo('user')
});
