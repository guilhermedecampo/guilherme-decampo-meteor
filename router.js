//Router configuration

Router.configure({
  autoRender: false
});

var filters = {

  resetScroll: function (path) {
    var scrollTo = window.currentScroll || 0;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  },

  resetScrollBlog: function (path) {
    var scrollTo = $('#profile').offset().top;
    $('body').scrollTop(scrollTo);
    $('body').css("min-height", 0);
  },
};

Router.before(filters.resetScroll, {only: [
  'index',
]});

Router.after(filters.resetScrollBlog, {only: [
  'blog',
  'blogMain'
]});


Router.map(function () {

  this.route('index', {
    path :  '/',
    template: 'index'
  });

  this.route('blogMain', {
    path :  '/blog',
    template: 'blogMain'
  });

  this.route('blog', {
    path :  '/blog/:slug',
    template: 'blog'
  });

  this.route('index', {path: '/*'});

});