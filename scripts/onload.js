$(document).ready(function () {
    $("div.hidden")
        .css('opacity', 0)
        .slideDown('slow')
        .animate(
            { opacity: 1 },
            { queue: false, duration: 'slow' }
  );
});