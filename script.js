(function () {
  var eventsByButtonId = {
    'btn-menu': 'clique_menu',
    'btn-whatsapp': 'clique_whatsapp',
    'btn-instagram': 'clique_instagram',
    'btn-avaliacao-google': 'clique_avaliacao_google',
    'btn-rota-maps': 'clique_rota_maps'
  };

  Object.keys(eventsByButtonId).forEach(function (buttonId) {
    var el = document.getElementById(buttonId);
    if (!el) return;
    el.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', eventsByButtonId[buttonId]);
      }
    });
  });
})();
