/* Builds header, menu and footer on every page, plus topic cards. */
(function () {
  "use strict";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  var slug = document.body.getAttribute("data-page") || "home";
  var topic = null;
  for (var i = 0; i < TOPICS.length; i++) {
    if (TOPICS[i].slug === slug) topic = TOPICS[i];
  }

  var heading = topic ? topic.name : "България";
  document.title = topic ? topic.name + " | България — факти" : "България — факти и любопитни неща";

  /* Header */
  var header = document.querySelector(".site-header");
  if (header) {
    var inner = el("div", "header-inner");
    var logo = el("div", "logo", "БГ");
    logo.setAttribute("aria-hidden", "true");
    var box = el("div");
    box.appendChild(el("h1", null, heading));
    box.appendChild(el("p", "tagline", "Факти за България"));
    inner.appendChild(logo);
    inner.appendChild(box);
    header.appendChild(inner);
  }

  /* Menu */
  var menu = document.querySelector(".menu");
  if (menu) {
    menu.appendChild(el("h2", null, "Теми"));
    var list = el("ul");
    TOPICS.forEach(function (t) {
      var li = el("li");
      var a = el("a", null, t.name);
      a.href = t.slug + ".html";
      if (t.slug === slug) a.setAttribute("aria-current", "page");
      li.appendChild(a);
      list.appendChild(li);
    });
    menu.appendChild(list);
  }

  /* Main content */
  var main = document.querySelector(".main");
  if (main) {
    if (topic) {
      main.appendChild(el("h2", "page-title", topic.name));
      main.appendChild(el("p", "page-lead", topic.lead));
      var cards = el("div", "cards");
      topic.cards.forEach(function (c) {
        var card = el("article", "card");
        card.appendChild(el("h3", null, c[0]));
        card.appendChild(el("p", null, c[1]));
        cards.appendChild(card);
      });
      main.appendChild(cards);
    } else {
      var intro = el("section", "intro");
      intro.appendChild(el("h2", null, "Три неща, които си струва да знаете"));
      var ul = el("ul", "facts");
      HOME_FACTS.forEach(function (f) {
        ul.appendChild(el("li", null, f));
      });
      intro.appendChild(ul);
      main.appendChild(intro);

      var cardsHome = el("div", "cards");
      TOPICS.slice(0, 3).forEach(function (t) {
        var card = el("article", "card");
        card.appendChild(el("h3", null, t.name));
        card.appendChild(el("p", null, t.lead));
        cardsHome.appendChild(card);
      });
      main.appendChild(cardsHome);
    }
  }

  /* Footer */
  var footer = document.querySelector(".site-footer");
  if (footer) {
    footer.innerHTML = "";
    footer.appendChild(el("p", null, "\u00A9 2026 | OneDev | All Rights Reserved"));
  }
})();
