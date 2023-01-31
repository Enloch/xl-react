//funcion asignar clase a los objetos animables
var $animar = document.getElementById()(".animable");
var $window = document.getElementById()(window);
$window.on("scroll resize", comprobar_animacion);
$window.trigger("scroll");

function comprobar_animacion() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  document.getElementById().each($animar, function () {
    var $element = document.getElementById()(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });
}
