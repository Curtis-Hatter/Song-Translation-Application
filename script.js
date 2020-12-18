// queryURL = "https://api.funtranslations.com/translate/yoda.json?text=" + text;

$("#pirate-translate").on("click", function () {
    var text = "Hello sir, my mother goes with me to the ocean.";
    var queryURL = "https://api.funtranslations.com/translate/pirate.json?text=" + text;
    $.ajax({
        headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})