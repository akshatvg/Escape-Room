
(function ($) {
    "use strict";

    // Loader
    $(function () {
        var loader = function () {
            setTimeout(function () {
                if ($('#loader').length > 0) {
                    $('#loader').removeClass('show');
                }
            }, 1);
        };
        loader();
    });

    // Auto Init 
    M.AutoInit();

})(jQuery);

// Play Music
body.addEventListener('click', function () {
    $("#autoPlayMusic")[0].play();
});

// Submit Answer
$("#submitAnswer").click(function () {
    var firstTimeOut = document.getElementById("firstTimeOutside").value;
    if (firstTimeOut == "Chocolate Room" || firstTimeOut == "chocolate Room" || firstTimeOut == "Chocolate oom" || firstTimeOut == "chocolate room") {
        window.location.href = "/nextclue";
    }
    else {
        document.getElementById("errorHandler").innerHTML = "Wrong Answer. Please Try again.";
    }
});

console.clear();