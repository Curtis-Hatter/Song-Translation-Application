// queryURL = "https://api.funtranslations.com/translate/yoda.json?text=" + text;
var text = $("#retrieved-lyrics").text();
// console.log(text);
$("#pirate-translate").on("click", function () {
    // var text = "Hello sir, my mother goes with me to the ocean.";
    var queryURL = "https://api.funtranslations.com/translate/pirate.json?text=" + text;
    $.ajax({
        headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})

$("#yoda-translate").on("click", function () {
    // var text = "Hello sir, my mother goes with me to the ocean.";
    var queryURL = "https://api.funtranslations.com/translate/yoda.json?text=" + text;
    $.ajax({
        // headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})

$("#hodor-translate").on("click", function () {
    // var text = "Hello sir, my mother goes with me to the ocean.";
    var queryURL = "https://api.funtranslations.com/translate/hodor.json?text=" + text;
    $.ajax({
        // headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})

$("#groot-translate").on("click", function () {
    // var text = "Hello sir, my mother goes with me to the ocean.";
    var queryURL = "https://api.funtranslations.com/translate/groot.json?text=" + text;
    $.ajax({
        // headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})