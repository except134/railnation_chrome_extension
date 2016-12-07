$(document).ready(function() {
    // Load menu bar
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        $(".extension_part").addClass("hidden");
        $("#show_" + this.id).removeClass("hidden");
    });
});
