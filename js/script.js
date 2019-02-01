function JavaScriptFetch() {
    var script = document.createElement('script');
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;;
    document.querySelector('head').appendChild(script);
}

function jsonFlickrFeed(data) {
    var image = "";
    data.items.forEach(function (element) {
        image += "<img src=\"" + element.media.m + "\"/>";
    });

    document.getElementById("outputDiv").innerHTML = image;
}
var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

$.getJSON(flickerAPI, {

tags: $("#search").val(),

tagmode: "any",

format: "json"

}).done(function (result) {

$.each(result.items, function (i, item) {

$("<img>").attr("src", item.media.m).appendTo("#outputDiv");

if (i === 5) {

return false;

}

});

}).fail(function (xhr, status, error) {

alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)

});