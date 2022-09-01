const labels = {
  es: (new function () {
    this.app_title = "Kasakap!"
    this.app_subtitle = "¡Captura la oportunidad!"
    this.app_description = `[enpha]${this.app_title}[endenpha] es una aplicación que te permite encontrar [enpha]el apartamento ideal[endenpha] para ti. Dandote información de los apartamentos disponibles, de los servicios que ofrecen y la facilidad de transporte para llegar a una o varias direcciones, sencillamente te ayudará a encontrar el mejor lugar para vivir.`
    this.app_navbar_home = "Inicio"
    this.app_navbar_about = "Acerca de"
    this.app_navbar_contact = "Contacto"
  })(),
  en: (new function () {
    this.app_title = "Kasakap!"
    this.app_subtitle = "Capture the opportunity!"
    this.app_description = `[enpha]${this.app_title}[endenpha] is a platform that allows you to find [enpha]the perfect place to live[endenpha]. Giving you information about the available apartments, the services they offer and the convenience of transport to reach one or several addresses, will help you to find the best place to live.`
    this.app_navbar_home = "Home"
    this.app_navbar_about = "About"
    this.app_navbar_contact = "Contact"
  })(),
};

const currentLaguage = (new function () {
  let _lang = "es";
  let _labels = labels[_lang];

  this.getLabel = function (label) {
    return _labels[label] || `[${label}]`;
  }

  this.setLanguage = function (lang) {
    _lang = lang;
    _labels = labels[lang] ?? labels["es"];
  }

  this.getLanguage = function () {
    return _lang;
  }
})();

export default currentLaguage;
