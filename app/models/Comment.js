var attr = DS.attr,
  belongsTo = DS.belongsTo,
  hasMany = DS.hasMany;

export default = App.Comment = DS.Model.extend({
  body: attr('string'),
  user: belongsTo('user'),
  votes: hasMany('vote'),
  createdAt: attr('date')
});