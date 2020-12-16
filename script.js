var text = "Hello sir.";

var queryURL = "https://api.funtranslations.com/translate/pirate.json?text=" + text;

$.ajax({
    url: queryURL,
    method: "GET",
    header: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' }
}).then(function (response) {
    console.log(response);
    var texting = $("<div>");
    texting.text(JSON.stringify(response.contents.translated));
    $(".text-here").append(texting);
})