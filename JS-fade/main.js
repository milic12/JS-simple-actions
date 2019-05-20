$('img').load(function() {
    $(this).fadeIn('slow');
  });

  $('.transition-link').on("click", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }
