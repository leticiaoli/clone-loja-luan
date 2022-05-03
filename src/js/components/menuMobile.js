const menuMobile = {
  init: function () {
    this.menuMobile()
  },
    
  menuMobile: function () {
    $( ".botaoMenu" ).click(function() {
      $( ".wrapperMenu" ).slideToggle()
      $("body").toggleClass("active")
      $("html, body").animate({ scrollTop: 0 }, "fast")
    })
  },
}
    
export default menuMobile;