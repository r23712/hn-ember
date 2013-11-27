var attr = DS.attr,
  belongsTo = DS.belongsTo,
  hasMany = DS.hasMany;

export default = App.Story = DS.Model.extend({
  title: attr('string'),
  url: attr('string'),
  text: attr('string'),
  submitedBy: belongsTo('user'),
  createdAt: attr('date'),
  votes: hasMany('vote')
});