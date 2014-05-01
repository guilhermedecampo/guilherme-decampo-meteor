Template.sideBar.rendered = function () {

  var
    $sidebar   = $(".follow"),
    $window    = $(window),
    offset     = $sidebar.offset(),
    topPadding = 20
  ;


  $window.scroll(function() {
          if ($window.scrollTop() > offset.top) {
              $sidebar.stop().animate({
                  marginTop: $window.scrollTop() - 637.28125 + 20
              });
          } else {
              $sidebar.stop().animate({
                marginTop: 0
              });
          }
      });
};