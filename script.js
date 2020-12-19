var text = $("#retrieved-lyrics").text();
$("#song-button").on('click', function () {
    var userinput = JSON.stringify($('#song-user-input').val());
    var url = "https://api.musixmatch.com/ws/1.1/track.search?q_track=" + userinput + "&page_size=1&page=1&s_track_rating=desc&apikey=e6524e95459dac73ce4a95bde9428b70";
    var corsfix = "https://cors-anywhere.herokuapp.com/";
    var fullurl = corsfix + url;
    $("#song-button").addClass("is-loading")

    // console.log(userinput);
    $.ajax({
        url: fullurl,
        type: 'GET'
    }).then(function (response) {
        var idobject = JSON.parse("" + response + "");
        // console.log(idobject);
        var trackcheck = idobject.message.body.track_list[0].track;
        var trackid = idobject.message.body.track_list[0].track.track_id;
        $("#song-button").removeClass("is-loading")

        // console.log(trackid);

        var lyricurl = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + trackid + "&apikey=e6524e95459dac73ce4a95bde9428b70";

        var fulllyricurl = corsfix + lyricurl;
        // console.log(fulllyricurl);


        $.ajax({
            url: fulllyricurl,
            type: 'GET'
        }).then(function (response) {
            var lyricobject = JSON.parse("" + response + "");
            // console.log(lyricobject);

            var lyrics = lyricobject.message.body.lyrics.lyrics_body;

            // console.log(lyrics);

            $("#retrieved-lyrics").text(lyrics)
            text = $("#retrieved-lyrics").text();
            // console.log(text);
        });


    });
});



$("#pirate-translate").on("click", function () {
    // var text = "Hello sir, my mother goes with me to the ocean.";
    var queryURL = "https://api.funtranslations.com/translate/pirate.json?text=" + text;

//     console.log(queryURL);
    $("#pirate-translate").addClass("is-loading")
    $.ajax({
        headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        $("#pirate-translate").removeClass("is-loading")
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})

$("#yoda-translate").on("click", function () {
    // var text = "Hello sir, my mother goes with me to the ocean.";
    var queryURL = "https://api.funtranslations.com/translate/yoda.json?text=" + text;
    $("#yoda-translate").addClass("is-loading")
    $.ajax({
        // headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        $("#yoda-translate").removeClass("is-loading")
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})

$("#hodor-translate").on("click", function () {
    // var text = "Hello sir, my mother goes with me to the ocean.";
    var queryURL = "https://api.funtranslations.com/translate/hodor.json?text=" + text;
    $("#hodor-translate").addClass("is-loading")
    $.ajax({
        // headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
        $("#hodor-translate").removeClass("is-loading")
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})

$("#groot-translate").on("click", function () 
    $("#retrieved-translation").text("I am groot!");
})



