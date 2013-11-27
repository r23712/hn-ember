var attr = DS.attr;

export default = App.User = DS.Model.extend({
  username: attr('string'),
  email: attr('string')
});
