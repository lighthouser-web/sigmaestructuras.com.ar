var elem = document.querySelector('#slides');
  var flkty = new Flickity(elem, {
    contain: true,
    cellAlign: 'center',   // Align cells to center
    contain: true,         // Keep cells within container
    autoPlay: false,        // Auto-slide every 3 seconds
    prevNextButtons: false, // Show prev/next arrows
    pageDots: true         // Show page dots
  });