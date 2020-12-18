var text = "Hello sir, my mother goes with me to the ocean.";
text = "Breathe out, So I can breathe you in, Hold you in, And now, I know you've always been, Out of your head, Out of my head, I sang";
var queryURL = "https://api.funtranslations.com/translate/pirate.json?text=" + text;

$.ajax({
    headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    var texting = $("<div>");
    texting.text(JSON.stringify(response.contents.translated));
    $(".text-here").append(texting);
})