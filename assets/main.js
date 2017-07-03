(function() {
  /* add smooth scrolling for hash links */
  var hashLinks = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < hashLinks.length; i++) {
    var hashLink = hashLinks[i];
    var targetSelector = hashLink.getAttribute('href');
    hashLink.addEventListener('click', function(event) {
      event.preventDefault();
      Jump(targetSelector, {
        duration: 1000
      });
    });
  }
})();
