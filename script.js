$(document).ready(function() {
  $("#menu-content").on("click", "a.item", function(e) {
    e.preventDefault();
    // console.log("clicked");
    var link = $(this).attr("id");
    updateHTMLContent(link);
    /* console.log(link); */
  })

  function updateHTMLContent(link) {
    var loadfile = "./content/" + link + ".html";

    // console.log(loadfile);

    $('.content').load(loadfile);
  }
})