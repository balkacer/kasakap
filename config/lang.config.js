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

export function getLanguage() {
  return window.navigator.language.split("-")[0];
}

// export function setLanguage(language) {
//   localStorage.setItem("lang" language);
// }

export function getLabel(label) {
  const lang = getLanguage();
  console.log(lang === "es" ? "el lenguaje del usuario es" : "user language is", lang);
  return ""+labels[lang][label] ?? "[" + label + "]";
}
