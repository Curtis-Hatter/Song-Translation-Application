var listofSongs = [
    song1 = {
        title: "3005",
        lyrics: "Over the rainbow",
        translationsChoice: "pirate",
        translatedLyrics: "O'er der reinbew"
    },
    song2 = {
        title: "Fireworks",
        lyrics: "Over the rainbow",
        translationsChoice: "pirate",
        translatedLyrics: "O'er der reinbew"
    },
    song3 = {
        title: "Everlong",
        lyrics: "Over the rainbow",
        translationsChoice: "groot",
        translatedLyrics: "O'er der reinbew"
    },
    song4 = {
        title: "It Wasn't Me",
        lyrics: "Over the rainbow",
        translationsChoice: "groot",
        translatedLyrics: "O'er der reinbew"
    }
];
if (localStorage.getItem("listofSongs") !== null) {
    listofSongs = JSON.parse(localStorage.getItem("listofSongs"));
}

var userSong = {
    title: "",
    lyrics: "",
    translationsChoice: "",
    translatedLyrics: ""
}

function AssignTitles() {
    for (var i = 1; i < 5; i++) {
        // console.log(listofSongs[i - 1].title);
        $("#song-button-" + i).text(listofSongs[i - 1].title);
    }
}

AssignTitles();

// Retrieve user input, and return original lyrics
$("#song-button").on('click', function () {
    userSong.title = JSON.stringify($('#song-user-input').val());
    var queryURL_musix = "https://api.musixmatch.com/ws/1.1/track.search?q_track=" + userSong.title + "&page_size=1&page=1&s_track_rating=desc&apikey=e6524e95459dac73ce4a95bde9428b70";
    var corsFix = "https://cors-anywhere.herokuapp.com/";
    var fullURL = corsFix + queryURL_musix;
    $("#song-button").addClass("is-loading")

    $.ajax({
        url: fullURL,
        type: 'GET'
    }).then(function (response) {
        var idObject = JSON.parse("" + response + "");
        var trackId = idObject.message.body.track_list[0].track.track_id;
        var apiKey = "e6524e95459dac73ce4a95bde9428b70"
        var queryURL_lyrics = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + trackId + "&apikey=" + apiKey;
        var full_LyricURL = corsFix + queryURL_lyrics;
        $("#song-button").removeClass("is-loading")
        $("#lyric-box-1").removeClass("column-tall")
        $("#placeholder-box").removeClass("column-tall")

        $.ajax({
            url: full_LyricURL,
            type: 'GET'
        }).then(function (response) {
            var lyricObject = JSON.parse("" + response + "");
            userSong.lyrics = lyricObject.message.body.lyrics.lyrics_body;
            $("#retrieved-lyrics").text(userSong.lyrics)
            // lyricText = $("#retrieved-lyrics").text();
        });
    });
});

// Translate lyrics to Pirate
$("#pirate-translate").on("click", function () {
    var queryURL_pirate = "https://api.funtranslations.com/translate/pirate.json?text=" + userSong.lyrics;
    $("#pirate-translate").addClass("is-loading")

    $.ajax({
        headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL_pirate,
        method: "GET"
    }).then(function (response) {
        $("#pirate-translate").removeClass("is-loading")
        $("#lyric-box-2").removeClass("column-tall")
        userSong.translatedLyrics = JSON.stringify(response.contents.translated)
        $("#retrieved-translation").text(userSong.translatedLyrics);
    })
})

// Translate lyrics to Yoda
$("#yoda-translate").on("click", function () {
    var queryURL_yoda = "https://api.funtranslations.com/translate/yoda.json?text=" + userSong.lyrics;
    $("#yoda-translate").addClass("is-loading")

    $.ajax({
        url: queryURL_yoda,
        method: "GET"
    }).then(function (response) {
        $("#yoda-translate").removeClass("is-loading")
        $("#lyric-box-2").removeClass("column-tall")
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})

// Translate lyrics to Groot
$("#groot-translate").on("click", function () {
    $("#lyric-box-2").removeClass("column-tall")
    $("#retrieved-translation").text("I am groot!");
})

// Translate lyrics to Hodor
$("#hodor-translate").on("click", function () {
    var queryURL_hodor = "https://api.funtranslations.com/translate/hodor.json?text=" + userSong.lyrics;
    $("#hodor-translate").addClass("is-loading")

    $.ajax({
        url: queryURL_hodor,
        method: "GET"
    }).then(function (response) {
        $("#hodor-translate").removeClass("is-loading")
        $("#lyric-box-2").removeClass("column-tall")
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})

// Change Pirate icon on hover
$("#pirate-translate").hover(function () {
    $("#pirate-img").attr('src', "./assets/pirate.icon.white.png");
})

$("#pirate-translate").mouseleave(function () {
    $("#pirate-img").attr('src', "./assets/pirate.icon.png");
})

// Change Yoda icon on hover
$("#yoda-translate").hover(function () {
    $("#yoda-img").attr('src', "./assets/yoda.icon.white.png");
})

$("#yoda-translate").mouseleave(function () {
    $("#yoda-img").attr('src', "./assets/yoda.icon.png");
})

// Change Groot icon on hover
$("#groot-translate").hover(function () {
    $("#groot-img").attr('src', "./assets/groot.icon.white.png");
})

$("#groot-translate").mouseleave(function () {
    $("#groot-img").attr('src', "./assets/groot.icon.png");
})

// Change Hodor icon on hover
$("#hodor-translate").hover(function () {
    $("#hodor-img").attr('src', "./assets/hodor.icon.white.png");
})

$("#hodor-translate").mouseleave(function () {
    $("#hodor-img").attr('src', "./assets/hodor.icon.png");
})

$("#song-button-1").on("click", function () {
    $("#retrieved-lyrics").text(listofSongs[0].lyrics);
    $("#retrieved-translation").text(listofSongs[0].translatedLyrics);
})
$("#song-button-2").on("click", function () {
    $("#retrieved-lyrics").text(listofSongs[1].lyrics);
    $("#retrieved-translation").text(listofSongs[1].translatedLyrics);
})
$("#song-button-3").on("click", function () {
    $("#retrieved-lyrics").text(listofSongs[2].lyrics);
    $("#retrieved-translation").text(listofSongs[2].translatedLyrics);
})
$("#song-button-4").on("click", function () {
    $("#retrieved-lyrics").text(listofSongs[3].lyrics);
    $("#retrieved-translation").text(listofSongs[3].translatedLyrics);
})