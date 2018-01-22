(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('select').material_select();
    $('.modal').modal();
    $('.ship_this').sideNav({
        menuWidth: 600, // Default is 300
        edge: 'right', // Choose the horizontal origin
//        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
//        draggable: true, // Choose whether you can drag to open on touch screens,
    });
    $('.fwd_this').sideNav({
        menuWidth: 600, // Default is 300
        edge: 'right', // Choose the horizontal origin
//        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
//        draggable: true, // Choose whether you can drag to open on touch screens,
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space