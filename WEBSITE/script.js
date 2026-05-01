const outfitIdeas = {
  coquette: {
    campus: {
      title: "Coquette Daydream for a Campus Hangout",
      description: "A blush cardigan, pleated skirt, ribbon socks, and heart-clasp mini bag for a polished but playful daytime look.",
      top: "Top: Pearl-button cardigan",
      bottom: "Bottom: Rose pleated mini skirt",
      shoes: "Shoes: Ballet buckle flats",
      extra: "Extra: Glossy heart bag + star clip set"
    },
    brunch: {
      title: "Coquette Daydream for a Pink Brunch Date",
      description: "Soft pastel layers and pretty details keep the outfit sweet, flirty, and photo-ready for cafe selfies.",
      top: "Top: Lace-trim cami + cropped cardigan",
      bottom: "Bottom: Satin bow mini skirt",
      shoes: "Shoes: Cream slingback heels",
      extra: "Extra: Pearl choker + cherry lip gloss"
    },
    party: {
      title: "Coquette Daydream for an After-Sunset Party",
      description: "A sweeter party look with glossy texture and sparkle that still feels delicate instead of overdone.",
      top: "Top: Off-shoulder shimmer knit",
      bottom: "Bottom: Flared bubble mini",
      shoes: "Shoes: Rhinestone Mary Janes",
      extra: "Extra: Crystal star clips + charm bag"
    },
    photoshoot: {
      title: "Coquette Daydream for a Mirror Selfie Shoot",
      description: "Light-catching fabrics and dramatic bows turn a simple selfie into a full Whimsleek moment.",
      top: "Top: Ribbon-tie milkmaid top",
      bottom: "Bottom: Layered tulle skirt",
      shoes: "Shoes: Satin ballet flats",
      extra: "Extra: Lace gloves + glossy phone charm"
    }
  },
  citypop: {
    campus: {
      title: "City Pop Darling for a Campus Hangout",
      description: "A brighter, retro-cute mix that feels casual enough for class but bold enough for compliments.",
      top: "Top: Candy striped baby tee",
      bottom: "Bottom: Denim A-line mini",
      shoes: "Shoes: Platform sneakers",
      extra: "Extra: Star shoulder bag + tinted shades"
    },
    brunch: {
      title: "City Pop Darling for a Pink Brunch Date",
      description: "Sweet and punchy color blocking gives the look that collectible-magazine charm.",
      top: "Top: Sorbet knit polo",
      bottom: "Bottom: Pleated tennis skirt",
      shoes: "Shoes: Retro loafers",
      extra: "Extra: Charm bracelet + mini claw clips"
    },
    party: {
      title: "City Pop Darling for an After-Sunset Party",
      description: "Glossy fabrics and playful shine make this one feel energetic without losing the cute factor.",
      top: "Top: Metallic camisole",
      bottom: "Bottom: Faux leather pink mini",
      shoes: "Shoes: Patent platform boots",
      extra: "Extra: Holographic bag + shimmer liner"
    },
    photoshoot: {
      title: "City Pop Darling for a Mirror Selfie Shoot",
      description: "This look is built for flash photography, chrome details, and a little main-character confidence.",
      top: "Top: Sheer mesh layer over crop tank",
      bottom: "Bottom: Bubblegum cargo skirt",
      shoes: "Shoes: White platform sandals",
      extra: "Extra: Chrome hoops + candy phone case"
    }
  },
  ballet: {
    campus: {
      title: "Ballet Starlight for a Campus Hangout",
      description: "Floaty layers, soft neutrals, and delicate structure make this a graceful everyday uniform.",
      top: "Top: Wrap cardigan in petal pink",
      bottom: "Bottom: Knit skort",
      shoes: "Shoes: Ribbon lace sneakers",
      extra: "Extra: Satin scrunchie + slim tote"
    },
    brunch: {
      title: "Ballet Starlight for a Pink Brunch Date",
      description: "Clean, airy, and a little romantic, this outfit balances elegance with a girlish sweetness.",
      top: "Top: Square-neck ballet top",
      bottom: "Bottom: Chiffon midi skirt",
      shoes: "Shoes: Block-heel ballet pumps",
      extra: "Extra: Pearl bow clip + rose mini purse"
    },
    party: {
      title: "Ballet Starlight for an After-Sunset Party",
      description: "Soft drama comes from shimmer and movement instead of heavy styling.",
      top: "Top: Satin corset top",
      bottom: "Bottom: Sheer overlay mini",
      shoes: "Shoes: Lace-up heels",
      extra: "Extra: Crystal drop earrings + satin clutch"
    },
    photoshoot: {
      title: "Ballet Starlight for a Mirror Selfie Shoot",
      description: "Every piece is chosen to look dreamy in motion and extra glowy on camera.",
      top: "Top: Ruched mesh shrug over cami",
      bottom: "Bottom: Tulle practice skirt",
      shoes: "Shoes: Pink ballet flats",
      extra: "Extra: Star anklet + ribbon stack"
    }
  },
  retro: {
    campus: {
      title: "Retro Sweetheart for a Campus Hangout",
      description: "Classic shapes and playful accessories keep this outfit crisp, youthful, and easy to rewear.",
      top: "Top: Sweetheart-neck blouse",
      bottom: "Bottom: Check mini skirt",
      shoes: "Shoes: Penny loafers",
      extra: "Extra: Knee socks + vintage hairband"
    },
    brunch: {
      title: "Retro Sweetheart for a Pink Brunch Date",
      description: "A polished throwback look with cherry-girl energy and just enough whimsy.",
      top: "Top: Puff-sleeve cardigan",
      bottom: "Bottom: Polka dot circle skirt",
      shoes: "Shoes: Kitten heel mules",
      extra: "Extra: Cherry earrings + mini basket bag"
    },
    party: {
      title: "Retro Sweetheart for an After-Sunset Party",
      description: "This party version turns vintage charm into something moodier and more sparkly.",
      top: "Top: Velvet sweetheart top",
      bottom: "Bottom: Structured high-waist mini",
      shoes: "Shoes: Patent ankle-strap heels",
      extra: "Extra: Glitter clips + satin gloves"
    },
    photoshoot: {
      title: "Retro Sweetheart for a Mirror Selfie Shoot",
      description: "A camera-loving outfit with shape, texture, and a wink of old-hollywood sweetness.",
      top: "Top: Fitted boatneck knit",
      bottom: "Bottom: Petal pink capri pants",
      shoes: "Shoes: Pointed slingbacks",
      extra: "Extra: Cat-eye sunglasses + charm compact"
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveLinks();
  wireGenerator();
  wireBagButtons();
  wireContactButtons();
  wireSaveButtons();
  wireAuthModal();
});

function highlightActiveLinks() {
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .role-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === fileName) link.classList.add("nav-active");
  });
}

function wireGenerator() {
  const form = document.querySelector("#generator-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const styleMood = document.querySelector("#style-mood")?.value || "coquette";
    const occasion = document.querySelector("#occasion")?.value || "campus";
    const outfit = outfitIdeas[styleMood]?.[occasion];
    if (!outfit) return;

    setText("#look-title", outfit.title);
    setText("#look-description", outfit.description);
    setText("#look-top", outfit.top);
    setText("#look-bottom", outfit.bottom);
    setText("#look-shoes", outfit.shoes);
    setText("#look-extra", outfit.extra);
  });
}

function wireBagButtons() {
  let bagCount = 0;
  const bagStatus = document.querySelector("#bag-status");
  document.querySelectorAll("[data-add-bag]").forEach((button) => {
    button.addEventListener("click", () => {
      bagCount += 1;
      if (bagStatus) {
        bagStatus.textContent = `Shopping bag: ${bagCount} item${bagCount === 1 ? "" : "s"}`;
      }
    });
  });
}

function wireContactButtons() {
  document.querySelectorAll("[data-contact-send]").forEach((button) => {
    button.addEventListener("click", () => {
      alert("Message sent! The Whimsleek team will get back to you soon.");
    });
  });
}

function wireSaveButtons() {
  document.querySelectorAll("[data-save-message]").forEach((button) => {
    button.addEventListener("click", () => {
      const message = button.getAttribute("data-save-message") || "Saved!";
      alert(message);
    });
  });
}

function wireAuthModal() {
  const modal = document.querySelector("#auth-modal");
  const openButtons = document.querySelectorAll("[data-open-auth]");
  const closeButton = document.querySelector("#close-auth");
  const checkbox = document.querySelector("#agree-terms");
  const continueButton = document.querySelector("#continue-auth");
  const termsStep = document.querySelector("#terms-step");
  const formStep = document.querySelector("#form-step");
  const tabButtons = document.querySelectorAll("[data-auth-tab]");
  const loginForm = document.querySelector("#login-form");
  const signupForm = document.querySelector("#signup-form");
  const roleQuickButtons = document.querySelectorAll("[data-role-quick]");

  if (!modal || !checkbox || !continueButton || !termsStep || !formStep || !loginForm || !signupForm) return;

  let requestedMode = "login";

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      requestedMode = button.getAttribute("data-open-auth") || "login";
      resetAuthModal();
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  checkbox.addEventListener("change", () => {
    continueButton.disabled = !checkbox.checked;
  });

  continueButton.addEventListener("click", () => {
    termsStep.classList.remove("auth-step-active");
    formStep.classList.add("auth-step-active");
    switchAuthTab(requestedMode, tabButtons, loginForm, signupForm);
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.getAttribute("data-auth-tab") || "login";
      switchAuthTab(mode, tabButtons, loginForm, signupForm);
    });
  });

  roleQuickButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const role = button.getAttribute("data-role-quick") || "user";
      modal.querySelectorAll("[data-role-select]").forEach((select) => {
        select.value = role;
      });
      roleQuickButtons.forEach((item) => {
        item.classList.toggle("nav-active", item === button);
      });
    });
  });

  [loginForm, signupForm].forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const action = form.id === "login-form" ? "Logged in" : "Account created";
      const roleSelect = form.querySelector("[data-role-select]");
      const role = roleSelect?.value || "user";
      const destination = getRoleDestination(role);

      alert(`${action}! Terms were accepted before access.`);
      closeAuthModal(modal);
      window.location.href = destination;
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", () => closeAuthModal(modal));
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeAuthModal(modal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeAuthModal(modal);
    }
  });

  function resetAuthModal() {
    checkbox.checked = false;
    continueButton.disabled = true;
    formStep.classList.remove("auth-step-active");
    termsStep.classList.add("auth-step-active");
    roleQuickButtons.forEach((button) => button.classList.remove("nav-active"));
    modal.querySelectorAll("[data-role-select]").forEach((select) => {
      select.value = "user";
    });
    switchAuthTab("login", tabButtons, loginForm, signupForm);
  }
}

function getRoleDestination(role) {
  if (role === "admin") return "admin.html";
  if (role === "super-admin") return "super-admin.html";
  return "dashboard.html";
}

function switchAuthTab(mode, tabButtons, loginForm, signupForm) {
  tabButtons.forEach((button) => {
    button.classList.toggle("tab-active", button.getAttribute("data-auth-tab") === mode);
  });

  const showLogin = mode === "login";
  loginForm.classList.toggle("auth-form-active", showLogin);
  signupForm.classList.toggle("auth-form-active", !showLogin);
}

function closeAuthModal(modal) {
  modal.hidden = true;
  document.body.style.overflow = "";
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}
