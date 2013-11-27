export default = App.Router.map(function() {
    this.resource('stories', function() {
      this.route('top');
      this.route('recent');
      this.route('submit');
      this.resource('comments', {path: '/story_id'});
    });
});
