const bannerPrincipal = {

    init: function () {
        this.slideHome()
      },

    slideHome: function () {
      $(".bannerPrincipal-mobile").slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
        autoplay: true

      })

      $(".bannerPrincipal-desktop").slick({
        mobileFirst: true,
        arrows: false,
        dots: true,
        autoplay: true

      })
    }
  
  }
  
  export default bannerPrincipal
  
  