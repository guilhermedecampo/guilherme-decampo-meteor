Template['blog'].helpers({
  content: function() {
    var
      slug = Router.current().params.slug,
      templateFunc = Template[slug]
    ;

    if(typeof templateFunc == 'function') {
      return templateFunc();
    } else {
      Router.go('/');
    }
  }
});

Template['blog'].events({
});

Template.blog.rendered = function () {
  // ...
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var disqus_shortname = 'guilhermedecampo'; // required: replace example with your forum shortname

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
};

