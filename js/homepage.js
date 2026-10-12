/* ==========================================================================
   Personal academic homepage scripts (vanilla JS, no dependencies)
   1. Click "Email" to copy the address
   2. Click "WeChat" to pin/unpin the QR popover
   3. Auto-update the footer year
   4. If a publication media cell ever contains a <video>, play it on hover
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- 1. copy email on click ---------- */

  var emailButton = document.querySelector("[data-copy-email]");
  var emailTooltip = document.querySelector("[data-email-tooltip]");
  var copyStatus = document.querySelector("[data-copy-status]");

  if (emailButton) {
    emailButton.addEventListener("click", function () {
      var email = emailButton.dataset.email || "";

      var done = function () {
        if (emailTooltip) {
          emailTooltip.classList.add("is-copied");
          setTimeout(function () {
            emailTooltip.classList.remove("is-copied");
          }, 1600);
        }
        if (copyStatus) {
          copyStatus.textContent = "Copied: " + email;
        }
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, function () {
          legacyCopy(email);
          done();
        });
      } else {
        legacyCopy(email);
        done();
      }
    });
  }

  function legacyCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      /* clipboard unavailable — the tooltip still shows the address */
    }
    document.body.removeChild(textarea);
  }

  /* ---------- 2. WeChat QR popover ---------- */

  var wechatWrapper = document.querySelector(".profile-contact--wechat");
  var wechatButton = document.querySelector("[data-wechat-toggle]");

  if (wechatWrapper && wechatButton) {
    wechatButton.addEventListener("click", function (event) {
      event.stopPropagation();
      var isOpen = wechatWrapper.classList.toggle("is-open");
      wechatButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", function (event) {
      if (
        wechatWrapper.classList.contains("is-open") &&
        !wechatWrapper.contains(event.target)
      ) {
        wechatWrapper.classList.remove("is-open");
        wechatButton.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && wechatWrapper.classList.contains("is-open")) {
        wechatWrapper.classList.remove("is-open");
        wechatButton.setAttribute("aria-expanded", "false");
        wechatButton.focus();
      }
    });
  }

  /* ---------- 3. footer year ---------- */

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- 4. publication videos: play on hover ---------- */

  document.querySelectorAll("[data-publication-media]").forEach(function (media) {
    var video = media.querySelector("video");
    if (!video) return;

    var play = function () {
      media.classList.add("is-playing");
      var p = video.play();
      if (p && typeof p.catch === "function") p.catch(function () {});
    };
    var stop = function () {
      media.classList.remove("is-playing");
      video.pause();
      video.currentTime = 0;
    };

    media.addEventListener("mouseenter", play);
    media.addEventListener("mouseleave", stop);
    media.addEventListener("focusin", play);
    media.addEventListener("focusout", stop);
  });
})();
