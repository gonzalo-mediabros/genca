/**
 * Query capture — standalone, zero-dependency script.
 *
 * Captura todos los query params de la URL y los persiste en localStorage
 * con estrategia de merge: los nuevos pisan a los viejos, los que no vienen
 * en la URL se conservan del valor anterior.
 *
 * Para migrar a otro proyecto:
 *   1. Copiar este archivo a public/js/
 *   2. Agregar <script src="/js/utm-capture.js" defer></script> en el layout
 *   3. Leer localStorage.getItem("__utm_data") en los formularios
 */

(function () {
  var STORAGE_KEY = "__utm_data";

  var search = window.location.search;
  if (!search) return;

  var urlParams = new URLSearchParams(search);
  var stored = {};
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (raw) stored = JSON.parse(raw);
  } catch (_) {
    /* corrupt data, start fresh */
  }

  urlParams.forEach(function (val, key) {
    if (val) stored[key] = val;
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
})();
