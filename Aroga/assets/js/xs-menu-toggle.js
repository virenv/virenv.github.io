document.addEventListener('DOMContentLoaded', function () {

   const toggle = document.querySelector('header button');
   if(toggle) {

      function toggleMenu() {
         const header = document.querySelector('header');
         if(header.className.indexOf('open') === -1) {
            header.className = `${header.className} open`
         } else {
            header.className = header.className.replace('open', '').trim();
         }
      }

      toggle.addEventListener('click', function (event) {
         toggleMenu();
         event.stopPropagation();
      })

      document.addEventListener('click', function() {
         const header = document.querySelector('header');
         if(header.className.indexOf('open') !== -1) {
            header.className = header.className.replace('open', '').trim();
         }
      })
   }

});