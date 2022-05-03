const carrosselPrateleira = {
  init: function () {
    this.SlidePrateleira();
  },

  SlidePrateleira: function () {
    $(".carrosselPrateleira").slick({
      mobileFirst: true,
      arrows: true,
      dots: false,
      prevArrow: '<img src="../images/seta-esquerda.svg" alt="icone de seta">',
      nextArrow: '<img src="../images/seta-direita.svg" alt="icone de seta">',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow:
              '<img src="../images/seta-esquerda.svg" alt="icone de seta">',
            nextArrow:
              '<img src="../images/seta-direita.svg" alt="icone de seta">',
          },
        },
      ],
    });
  },
};

export default carrosselPrateleira;
