(function() {
  // Chocchip Plugin
  window.chocchip = function(options) {
    document.addEventListener('DOMContentLoaded', function() {
      const defaults = {
        bannerText: 'We use cookies to enhance your experience. By clicking "Accept", you consent to our use of cookies for analytics and tracking.',
        acceptBtnText: 'Accept',
        rejectBtnText: 'Reject',
        cookieExpireDays: 365
      };
      
      const settings = Object.assign({}, defaults, options);

      // Create consent banner (without inline styles)
      const consentBanner = document.createElement('div');
      consentBanner.id = 'chocChipBanner'; // Use external CSS for styling
      consentBanner.innerHTML = `
        <p>${settings.bannerText}</p>
        <div id="chocChipButtons">
        <button id="reject-cookies">${settings.rejectBtnText}</button>
          <button id="accept-cookies">${settings.acceptBtnText}</button>
        </div>
      `;
      
      document.body.appendChild(consentBanner);
      
      const acceptBtn = document.getElementById('accept-cookies');
      const rejectBtn = document.getElementById('reject-cookies');
      
      // On "Accept" button click
      acceptBtn.addEventListener('click', function() {
        setCookie('userConsent', 'true', settings.cookieExpireDays);
        loadTrackingScripts();
        document.body.removeChild(consentBanner);
      });
      
      // On "Reject" button click
      rejectBtn.addEventListener('click', function() {
        setCookie('userConsent', 'false', settings.cookieExpireDays);
        document.body.removeChild(consentBanner);
      });
      
      // Check if consent already given
      if (getCookie('userConsent') === 'true') {
        loadTrackingScripts();
      } else if (getCookie('userConsent') === 'false') {
        document.body.removeChild(consentBanner);
      }

      // Function to load and execute tracking scripts inside <template> elements after consent is given
      function loadTrackingScripts() {
        const chocchipTemplates = document.querySelectorAll('template.chocchip');
        chocchipTemplates.forEach(template => {
          const content = template.content;
          document.head.appendChild(content); // Add the script tags back to the DOM, allowing them to run
        });
      }

      // Cookie helper functions
      function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
      }
      
      function getCookie(name) {
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i].trim();
          if (c.indexOf(name + "=") === 0) {
            return c.substring(name.length + 1, c.length);
          }
        }
        return "";
      }
    });
  };
})();
