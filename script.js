/* ΜΥΛΟΣ ΓΕΩΡΓΙΑΔΗ — interactions & i18n */
(function () {
  "use strict";

  /* ============ i18n ============ */
  var I18N = {
    el: {
      "html.lang": "el",
      "doc.title": "Μύλος Γεωργιάδη — Χώρος Εκδηλώσεων | Αμπελόκηποι Καστοριάς",
      "brand.line1": "ΜΥΛΟΣ",
      "brand.line2": "ΓΕΩΡΓΙΑΔΗ",
      "nav.story": "Ιστορία",
      "nav.spaces": "Ο Χώρος",
      "nav.occasions": "Εκδηλώσεις",
      "nav.experience": "Εμπειρία",
      "nav.gallery": "Γκαλερί",
      "nav.contact": "Επικοινωνία",
      "nav.cta": "Κλείστε\u00a0ξενάγηση", // U+00A0: the validator requires a non-breaking space inside tel: link labels
      "hero.kicker": "ΠΑΡΑΔΟΣΙΑΚΟΣ ΜΥΛΟΣ ΤΟΥ 1930 · ΑΜΠΕΛΟΚΗΠΟΙ ΚΑΣΤΟΡΙΑΣ",
      "hero.title1": "Όπου η ιστορία",
      "hero.title2": "γίνεται γιορτή",
      "hero.lead": "Ένας αναπαλαιωμένος μύλος του 1930 είναι έτοιμος να σας υποδεχθεί για γάμους, βαπτίσεις και κοινωνικές εκδηλώσεις που μοιάζουν με όνειρο.",
      "hero.cta1": "Ανακαλύψτε την ιστορία",
      "story.kicker": "Η ΙΣΤΟΡΙΑ ΜΑΣ",
      "story.title": "Μια τοποθεσία γεμάτη μνήμες, μεταμορφωμένη σε εμπειρία.",
      "story.p1": "Το 1925, με τα χρήματα που έστελνε από την Αμερική ο αδελφός του παππού, χτίστηκε ένας πέτρινος αλευρόμυλος δίπλα στο ποτάμι της λίμνης Ορεστιάδας. Από το 1930, με γερμανική μηχανή και γαλλικές πέτρες από πωρόλιθο, ο μύλος άλεθε σχεδόν τον μισό νομό Καστοριάς — από το Δισπηλιό και το Μαυροχώρι μέχρι το Κωσταράζι — και έδινε ψωμί σε ολόκληρη την περιοχή. Τρεις γενιές μυλωνάδων μεγάλωσαν μαζί με τις πέτρες του.",
      "story.p2": "Τη δεκαετία του '40 τον γλίτωσαν από τις φλόγες οι ίδιοι οι Γερμανοί, που χαιρέτισαν τη δική τους μηχανή και έφυγαν. Το 1975 οι πέτρες σίγησαν, αλλά ο Βασίλης Γεωργιάδης δεν άφησε το κτίσμα να καταρρεύσει: το αναστήλωσε κατά γράμμα, όπως ήταν το 1930. Σήμερα ο μύλος διατηρείται μουσειακός και λειτουργικός — και τα παιδιά του, Παντελής και Νίκος, τον έχουν κάνει χώρο γιορτής: γάμους, βαπτίσεις και κοινωνικές εκδηλώσεις σε πέτρα, ξύλο και φως.",
      "story.fact1": "Χτίστηκε με χρήματα από την Αμερική",
      "story.fact2": "Γερμανική μηχανή, γαλλικές πέτρες",
      "story.fact3": "Οι κατακτητές τον αφήνουν όρθιο",
      "story.fact4": "Τελευταία αλεσιά",
      "story.fact5year": "Σήμερα",
      "story.fact5": "Χώρος κοινωνικών εκδηλώσεων",
      "story.caption": "Ο μύλος μέσα στην καταπράσινη φύση που τον περιβάλει.",
      "spaces.kicker": "Ο ΧΩΡΟΣ",
      "spaces.title": "Ο χώρος που προσαρμόζεται στο όραμά σας",
      "spaces.c1.label": "01 · Κτίριο",
      "spaces.c1.title": "Ο Μύλος",
      "spaces.c1.text": "Η καρδιά του χώρου: αληθινή πέτρα, παλιός ξύλινος σκελετός και θερμός φωτισμός. Μαγική ατμόσφαιρα για το γιορτινό τραπέζι — και εσωτερικός χώρος που έχει μείνει αναλλοίωτος στον χρόνο.",
      "spaces.c1.meta": "Πέτρα · Ξύλο · Ατμόσφαιρα",
      "spaces.c2.label": "02 · Υπαίθρια",
      "spaces.c2.title": "Ο Κήπος",
      "spaces.c2.text": "Εκδηλώσεις γύρω από μαγευτικά δέντρα και χορός κάτω από χιλιάδες ζεστά φωτάκια. Το ειδυλλιακό φυσικό τοπίο γίνεται το σκηνικό της βραδιάς σας.",
      "spaces.c2.meta": "Γκαζόν · Δέντρα · Φωτάκια",

      "occ.kicker": "ΤΙ ΓΙΟΡΤΑΖΟΥΜΕ",
      "occ.title": "Από τον πρώτο λόγο μέχρι το τελευταίο τραγούδι",
      "occ.cta": "Ρωτήστε μας",
      "occ.wed.title": "Γάμοι",
      "occ.wed.text": "Όρκοι στο πράσινο, ποτήρια που σηκώνονται με θέα τον ήλιο που δύει και πάρτι που δεν τελειώνουν. Διαμορφώνουμε κάθε λεπτό του γάμου σας στα μέτρα σας.",
      "occ.bap.title": "Βαπτίσεις",
      "occ.bap.text": "Η πιο γλυκιά μέρα της οικογένειας, σε ένα ήρεμο, φωτεινό τοπίο. Τρυφερή διακόσμηση και χώρος που αγκαλιάζει τους καλεσμένους σας.",
      "occ.cock.title": "Κοινωνικές Εκδηλώσεις",
      "occ.cock.text": "Κοινωνικές εκδηλώσεις με ιδιαίτερες απαιτήσεις και ύφος — κόντρα στα συνηθισμένα.",
      "exp.kicker": "ΓΙΑΤΙ ΕΔΩ",
      "exp.title": "Μια μέρα που τη νιώθεις μέχρι το τελευταίο φως",
      "exp.1.title": "Φύση & Τοπίο",
      "exp.1.text": "Καταπράσινο, ειδυλλιακό περιβάλλον μέσα σε δέντρα — ένα τοπίο που ταξιδεύει τους καλεσμένους σας.",
      "exp.2.title": "Πέτρα & Παράδοση",
      "exp.2.text": "Αυθεντική αισθητική που γεννιέται από τον ίδιο τον μύλο: πέτρα, ξύλο και γήινα χρώματα.",
      "exp.3.title": "Καταξιωμένη Εστίαση",
      "exp.3.text": "Συνεργαζόμαστε μόνο με καταξιωμένους παρόχους εστίασης — εσείς διαλέγετε το μενού, εμείς υλοποιούμε την ιδέα σας.",
      "exp.4.title": "Εύκολη Πρόσβαση",
      "exp.4.text": "Σε απόσταση αναπνοής από την Εγνατία Οδό και ελάχιστα λεπτά από την Καστοριά.",
      "exp.5.title": "Και με κακοκαιρία",
      "exp.5.text": "Ασφαλείς εξωτερικοί και καλυμμένοι χώροι, ώστε η γιορτή να συνεχίζεται ανεξάρτητα από τον καιρό.",
      "exp.6.title": "Στα μέτρα σας",
      "exp.6.text": "Διαμόρφωση, διάθεση χώρων και συντονισμός ανάλογα με το όραμά σας — κάθε γιορτή είναι μοναδική.",
      "gal.kicker": "ΓΚΑΛΕΡΙ",
      "gal.title": "Ρίξτε μια ματιά",
      "gal.v1": "Ο ιδανικός χώρος για τη δική σας ξεχωριστή ημέρα",
      "gal.v1.aria": "Βίντεο από το Μύλο Γεωργιάδη — ο χώρος και οι εκδηλώσεις",
      "gal.v2": "Η μαγεία του κτήματος τη νύχτα",
      "gal.v2.aria": "Βίντεο από το Μύλο Γεωργιάδη — βραδινό γλέντι κάτω από τα φωτάκια",
      "gal.v3": "Το κτήμα μας στο φως του σούρουπου",
      "gal.v3.aria": "Βίντεο από το Μύλο Γεωργιάδη — το κτήμα στο φως του σούρουπου",
      "gal.v4": "Εδώ, η αγάπη γιορτάζει όπως της αξίζει",
      "gal.v4.aria": "Βίντεο από το Μύλο Γεωργιάδη — γαμήλια γιορτή από ψηλά, με την πίστα χορού φωτισμένη",
      "vid.play": "Αναπαραγωγή",
      "vid.pause": "Παύση",
      "vid.mute": "Σίγαση",
      "vid.unmute": "Ενεργοποίηση ήχου",
      "gal.g1": "Το γκαζόν ετοιμάζεται για το γλέντι",
      "gal.g5": "Μεγάλα τραπέζια κάτω από τα δέντρα",
      "gal.g8": "Το γλέντι στρώνει σε κάθε γραμμή του γκαζόν",
      "gal.g10": "Αριθμημένα τραπέζια, έτοιμα για τους καλεσμένους",
      "gal.g12": "Το μεγάλο τραπέζι κάτω από τα φωτάκια",
      "gal.g13": "Για τη γιορτή κάτω από τον ήλιο",
      "gal.follow": "Δείτε κάθε γιορτή ζωντανά:",
      "con.kicker": "ΕΠΙΚΟΙΝΩΝΙΑ",
      "con.title": "Ας γράψουμε μαζί την ιστορία σας",
      "con.phone.t": "Τηλέφωνο",
      "con.email.t": "Email",
      "con.addr.t": "Τοποθεσία",
      "con.addr": "Επαρχ. Οδός Δισπηλιού – Αμπελοκήπων,<br>Ορεστίδα 520 57, Καστοριά",
      "con.map": "Άνοιγμα στους Χάρτες Google ↗",
      "con.hours.t": "Επισκέψεις",
      "con.hours": "Κατόπιν ραντεβού, καθημερινά",
      "con.social.t": "Ακολουθήστε μας",
      "form.title": "Φόρμα αιτήματος διαθεσιμότητας",
      "form.note": "Συμπληρώστε τα στοιχεία σας — το μήνυμα θα ανοίξει έτοιμο στο WhatsApp μας.",
      "form.name": "Ονοματεπώνυμο",
      "form.phone": "Τηλέφωνο",
      "form.type": "Τύπος εκδήλωσης",
      "form.type.1": "Γάμος",
      "form.type.2": "Βάπτιση",
      "form.type.3": "Κοινωνική Εκδήλωση",
      "form.type.4": "Άλλο",
      "form.date": "Ενδεικτική ημερομηνία",
      "form.date.ph": "Π.χ. Ιούνιος 2027",
      "form.msg": "Λίγα λόγια για το όνειρό σας",
      "form.submit": "Αποστολή αιτήματος",
      "form.ok": "Το μήνυμά σας ετοιμάστηκε — αν το WhatsApp δεν άνοιξε, καλέστε στο 698 215 2122.",
      "foot.tag": "Ο μύλος του 1930, στην υπηρεσία της γιορτής.",
      "footer.rights": "Με επιφύλαξη παντός δικαιώματος.",
      "a11y.skip": "Μετάβαση στο περιεχόμενο",
      "nav.brand.aria": "Μύλος Γεωργιάδη — αρχή",
      "nav.menu.aria": "Κύριο μενού",
      "nav.burger.aria": "Άνοιγμα μενού",
      "hero.scroll.aria": "Κύλιση κάτω",
      "foot.nav.aria": "Υποσέλιδο",
      "lb.aria": "Προβολή φωτογραφίας",
      "lb.close.aria": "Κλείσιμο",
      "lb.prev.aria": "Προηγούμενη",
      "lb.next.aria": "Επόμενη",
      "wa.msg": "Καλημέρα! Επιθυμώ αίτημα διαθεσιμότητας για τον Μύλο Γεωργιάδη.\n\nΟνοματεπώνυμο: ",
      "wa.type": "Τύπος: ",
      "wa.date": "Ημερομηνία: ",
      "wa.msg2": "Μήνυμα: "
    },
    en: {
      "html.lang": "en",
      "doc.title": "Mylos Georgiadi — Wedding & Events Venue | Kastoria, Greece",
      "brand.line1": "MYLOS",
      "brand.line2": "GEORGIADI",
      "nav.story": "Story",
      "nav.spaces": "The Space",
      "nav.occasions": "Occasions",
      "nav.experience": "Experience",
      "nav.gallery": "Galerie",
      "nav.contact": "Contact",
      "nav.cta": "Book a tour",
      "hero.kicker": "A TRADITIONAL 1930 MILL · AMPELOKIPOI, KASTORIA",
      "hero.title1": "Where history",
      "hero.title2": "becomes celebration",
      "hero.lead": "A restored 1930 mill, ready to welcome you for weddings, christenings and social events that feel like a dream.",
      "hero.cta1": "Discover our story",
      "story.kicker": "OUR STORY",
      "story.title": "A place full of memories, transformed into an experience.",
      "story.p1": "In 1925, with money sent from America by his brother, the family's grandfather raised a stone flour mill beside the river that flows out of Lake Orestias. From 1930, with a German engine and French pumice millstones, the mill ground grain for almost half of Kastoria prefecture — from Dispilio and Mavrochori to Kostarazi — putting bread on the region's tables. Three generations of millers grew up beside its stones.",
      "story.p2": "In the 1940s it was the Germans themselves who spared it from the flames: they came to burn the mill, honoured their own engine, and left. The stones fell silent in 1975, but Vasilis Georgiadis refused to let the building crumble — he restored it to the letter, exactly as it was in 1930. Today the mill is preserved as a working museum space, and his sons, Pantelis and Nikos, have turned its grounds into a place of celebration: weddings, christenings and social events of stone, wood and light.",
      "story.fact1": "Built with money sent from America",
      "story.fact2": "German engine, French millstones",
      "story.fact3": "The occupiers leave it standing",
      "story.fact4": "The last grinding",
      "story.fact5year": "Today",
      "story.fact5": "A venue for social events",
      "story.caption": "The mill nestled in the lush greenery that surrounds it.",
      "spaces.kicker": "THE SPACE",
      "spaces.title": "A space that adapts to your vision",
      "spaces.c1.label": "01 · Building",
      "spaces.c1.title": "The Mill",
      "spaces.c1.text": "The heart of the venue: true stone, an old timber frame and warm light. A magical atmosphere for the festive table — and an indoor space left untouched by time.",
      "spaces.c1.meta": "Stone · Timber · Atmosphere",
      "spaces.c2.label": "02 · Outdoors",
      "spaces.c2.title": "The Garden",
      "spaces.c2.text": "Events among enchanting trees and dancing under a thousand warm lights. The idyllic landscape becomes the backdrop of your evening.",
      "spaces.c2.meta": "Lawn · Trees · Fairy lights",

      "occ.kicker": "OCCASIONS",
      "occ.title": "From the first vow to the last song",
      "occ.cta": "Enquire",
      "occ.wed.title": "Weddings",
      "occ.wed.text": "Vows in the green, glasses raised against the setting sun and parties that never seem to end. We shape every detail of your wedding around you.",
      "occ.bap.title": "Christenings",
      "occ.bap.text": "The sweetest day for your family, in a calm, luminous setting. Tender decoration and a space that embraces your guests.",
      "occ.cock.title": "Social Events",
      "occ.cock.text": "Social occasions with particular demands and style — a bold alternative to the usual.",
      "exp.kicker": "WHY HERE",
      "exp.title": "A day you feel until the very last light",
      "exp.1.title": "Nature & Landscape",
      "exp.1.text": "A lush, idyllic setting among trees — a landscape that travels your guests somewhere else.",
      "exp.2.title": "Stone & Tradition",
      "exp.2.text": "An authentic aesthetic born of the mill itself: stone, timber and earth tones.",
      "exp.3.title": "Acclaimed Catering",
      "exp.3.text": "We work only with acclaimed catering partners — you choose the menu, we bring your idea to life.",
      "exp.4.title": "Easy Access",
      "exp.4.text": "A stone's throw from the Egnatia motorway and minutes from Kastoria.",
      "exp.5.title": "Rain or Shine",
      "exp.5.text": "Safe outdoor and covered spaces, so the celebration carries on regardless of the weather.",
      "exp.6.title": "Tailored to You",
      "exp.6.text": "Layout, use of spaces and coordination shaped around your vision — every celebration is one of a kind.",
      "gal.kicker": "GALERIE",
      "gal.title": "Take a look",
      "gal.v1": "The ideal space for your own special day",
      "gal.v1.aria": "Video from Mylos Georgiadis — the venue and its events",
      "gal.v2": "The magic of the estate at night",
      "gal.v2.aria": "Video from Mylos Georgiadis — an evening celebration under the lights",
      "gal.v3": "Our estate in the twilight",
      "gal.v3.aria": "Video from Mylos Georgiadis — the estate in the twilight",
      "gal.v4": "Here, love is celebrated the way it deserves",
      "gal.v4.aria": "Video from Mylos Georgiadis — a wedding celebration from above, with the lit dance floor",
      "vid.play": "Play",
      "vid.pause": "Pause",
      "vid.mute": "Mute",
      "vid.unmute": "Turn sound on",
      "gal.g1": "The lawn ready for the celebration",
      "gal.g5": "Long tables beneath the trees",
      "gal.g8": "The feast laid out along every line of the lawn",
      "gal.g10": "Numbered tables, ready for the guests",
      "gal.g12": "The long table under the lights",
      "gal.g13": "Set for celebration under the sun",
      "gal.follow": "See every celebration live:",
      "con.kicker": "CONTACT",
      "con.title": "Let's write your story together",
      "con.phone.t": "Phone",
      "con.email.t": "Email",
      "con.addr.t": "Location",
      "con.addr": "Epar. Od. Dispiliou – Ampelokipon,<br>Orestida 520 57, Kastoria, Greece",
      "con.map": "Open in Google Maps ↗",
      "con.hours.t": "Visits",
      "con.hours": "By appointment, every day",
      "con.social.t": "Follow us",
      "form.title": "Availability request",
      "form.note": "Fill in your details — the message will open ready in our WhatsApp.",
      "form.name": "Full name",
      "form.phone": "Phone",
      "form.type": "Type of event",
      "form.type.1": "Wedding",
      "form.type.2": "Christening",
      "form.type.3": "Social Event",
      "form.type.4": "Other",
      "form.date": "Approximate date",
      "form.date.ph": "e.g. June 2027",
      "form.msg": "A few words about your dream",
      "form.submit": "Send request",
      "form.ok": "Your message is ready — if WhatsApp didn't open, call us at +30 698 215 2122.",
      "foot.tag": "The 1930 mill, in the service of celebration.",
      "footer.rights": "All rights reserved.",
      "a11y.skip": "Skip to content",
      "nav.brand.aria": "Mylos Georgiadis — home",
      "nav.menu.aria": "Main menu",
      "nav.burger.aria": "Open menu",
      "hero.scroll.aria": "Scroll down",
      "foot.nav.aria": "Footer",
      "lb.aria": "Photo viewer",
      "lb.close.aria": "Close",
      "lb.prev.aria": "Previous photo",
      "lb.next.aria": "Next photo",
      "wa.msg": "Hello! I would like to ask about availability at Mylos Georgiadi.\n\nName: ",
      "wa.type": "Event: ",
      "wa.date": "Date: ",
      "wa.msg2": "Message: "
    }
  };

  var lang = "el";
  try { lang = localStorage.getItem("mylos-lang") === "en" ? "en" : "el"; } catch (e) { /* private mode */ }

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.el[key] || key; }

  function applyLang() {
    document.documentElement.lang = t("html.lang");
    document.title = t("doc.title");
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].innerHTML = t(nodes[i].getAttribute("data-i18n"));
    }
    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var a = 0; a < ariaNodes.length; a++) {
      ariaNodes[a].setAttribute("aria-label", t(ariaNodes[a].getAttribute("data-i18n-aria")));
    }
    var fDate = document.getElementById("fDate");
    if (fDate) fDate.placeholder = t("form.date.ph");
    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.textContent = lang === "el" ? "EN" : "ΕΛ";
      toggle.setAttribute("aria-label", lang === "el" ? "Switch to English" : "Μετάβαση στα Ελληνικά");
    }
    vcLangSync.forEach(function (f) { f(); });
    try { localStorage.setItem("mylos-lang", lang); } catch (e) { /* ignore */ }
  }

  /* ============ Nav ============ */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var burger = document.getElementById("navBurger");
  burger.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  var links = document.querySelectorAll(".nav-links a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      document.body.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      document.body.classList.remove("menu-open");
      burger.setAttribute("aria-expanded", "false");
      burger.focus();
    }
  });

  /* ============ Reveal on scroll ============ */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ============ Lightbox ============ */
  var tiles = Array.prototype.slice.call(document.querySelectorAll(".tile[data-full]"));
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbClose = document.getElementById("lbClose");
  var lbPrev = document.getElementById("lbPrev");
  var lbNext = document.getElementById("lbNext");
  var current = 0;

  function showLb(idx) {
    var opening = lb.hidden;
    current = (idx + tiles.length) % tiles.length;
    var src = tiles[current].getAttribute("data-full");
    lbImg.src = src;
    lbImg.alt = tiles[current].querySelector("img").alt;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    // focus the dialog only when it opens; on prev/next keep focus where the user left it
    if (opening) lbClose.focus();
  }
  function hideLb() {
    lb.hidden = true;
    document.body.style.overflow = "";
    tiles[current].focus();
  }
  tiles.forEach(function (tile, idx) {
    tile.setAttribute("role", "button");
    tile.setAttribute("tabindex", "0");
    tile.addEventListener("click", function () { showLb(idx); });
    tile.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showLb(idx); }
    });
  });
  lbClose.addEventListener("click", hideLb);
  lbPrev.addEventListener("click", function () { showLb(current - 1); });
  lbNext.addEventListener("click", function () { showLb(current + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) hideLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") hideLb();
    if (e.key === "ArrowLeft") showLb(current - 1);
    if (e.key === "ArrowRight") showLb(current + 1);
    // keep focus inside the dialog while it is open (role=dialog aria-modal)
    if (e.key === "Tab") {
      e.preventDefault();
      var order = [lbNext, lbPrev, lbClose];
      var at = order.indexOf(document.activeElement);
      order[(at + (e.shiftKey ? -1 : 1) + order.length) % order.length].focus();
    }
  });

  /* ============ Custom video controls (play/pause + mute only) ============ */
  var customVids = document.querySelectorAll("video.custom");
  var vcLangSync = [];
  Array.prototype.forEach.call(customVids, function (v) {
    var fig = v.closest(".tile-custom");
    var playB = fig.querySelector(".vc-play");
    var muteB = fig.querySelector(".vc-mute");
    var icPlay = playB.querySelector(".ic-play");
    var icPause = playB.querySelector(".ic-pause");
    var icSound = muteB.querySelector(".ic-sound");
    var icQuiet = muteB.querySelector(".ic-quiet");
    function sync() {
      var playing = !v.paused && !v.ended;
      icPlay.classList.toggle("on", !playing); icPause.classList.toggle("on", playing);
      playB.setAttribute("aria-label", t(playing ? "vid.pause" : "vid.play"));
      icSound.classList.toggle("on", !v.muted); icQuiet.classList.toggle("on", v.muted);
      muteB.setAttribute("aria-label", t(v.muted ? "vid.unmute" : "vid.mute"));
    }
    function togglePlay() { if (v.paused || v.ended) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else { v.pause(); } }
    playB.addEventListener("click", togglePlay);
    v.addEventListener("click", togglePlay);
    muteB.addEventListener("click", function () { v.muted = !v.muted; sync(); });
    // only one reel plays at a time
    v.addEventListener("play", function () {
      Array.prototype.forEach.call(customVids, function (o) { if (o !== v && !o.paused) { o.pause(); } });
    });
    ["play", "pause", "ended"].forEach(function (ev) { v.addEventListener(ev, sync); });
    sync();
    vcLangSync.push(sync);
  });

  /* ============ Language toggle ============ */
  document.getElementById("langToggle").addEventListener("click", function () {
    lang = lang === "el" ? "en" : "el";
    applyLang();
  });

  /* ============ Inquiry form → WhatsApp ============ */
  var form = document.getElementById("conForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("fName");
    var phone = document.getElementById("fPhone");
    var ok = true;
    [name, phone].forEach(function (f) {
      if (!f.value.trim()) { f.style.borderColor = "#c0674f"; f.setAttribute("aria-invalid", "true"); ok = false; }
      else { f.style.borderColor = ""; f.removeAttribute("aria-invalid"); }
    });
    if (!ok) return;

    var type = document.getElementById("fType");
    var typeText = type.options[type.selectedIndex].text;
    var date = document.getElementById("fDate").value.trim();
    var msg = document.getElementById("fMsg").value.trim();

    var text = t("wa.msg") + name.value.trim() + " (" + phone.value.trim() + ")\n" +
      t("wa.type") + typeText;
    if (date) text += "\n" + t("wa.date") + date;
    if (msg) text += "\n" + t("wa.msg2") + msg;

    window.open("https://wa.me/306982152122?text=" + encodeURIComponent(text), "_blank", "noopener");
    document.getElementById("formOk").hidden = false;
  });
  [document.getElementById("fName"), document.getElementById("fPhone")].forEach(function (f) {
    f.addEventListener("input", function () {
      if (f.value.trim()) { f.style.borderColor = ""; f.removeAttribute("aria-invalid"); }
    });
  });

  /* ============ Footer year ============ */
  document.getElementById("year").textContent = new Date().getFullYear();

  applyLang();
})();
