const botaoScroll = {
    
  init: function () {
    this.botaoScroll();
  },

  botaoScroll: function () {
    $(".botaoScroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  },
};

export default botaoScroll;
