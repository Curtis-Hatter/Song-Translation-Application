var lyricText = $("#retrieved-lyrics").text();
var topSongsArr = [
    "Smells Like Teen Spirit",
    "Hey Jude",
    "Billie Jean",
    "Bohemian Rhapsody",
    "Sweet Caroline",
    "Hotel California",
    "Over the Rainbow",
    "Life on Mars",
    "Dancing Queen",
    "I Will Always Love You"
]
var previousSongs = localStorage.getItem("song-names", previousSongs)
previousSongs = previousSongs ? previousSongs.split(',') : [];

function showSuggestedSongs () {
    for (var i=1; i < 5; i++) {
        var randomNumber = Math.floor((Math.random()*topSongsArr.length))
        var randomSong = topSongsArr[randomNumber]
        topSongsArr.splice(randomNumber, 1)
        $(`#song-button-${i}`).text(randomSong)
        $(`#song-button-${i}`).attr("data-song", `${randomSong}`)
    }
}
showSuggestedSongs ()

function showPreviousSongs () {
    for (var i=0; i<previousSongs.length; i++) {
        var songName = JSON.parse(previousSongs[i])
        $(`#song-button-${i+1}`).text(songName)
        $(`#song-button-${i+1}`).attr("data-song", `${songName}`)
    }
}
showPreviousSongs()

// Retrieve user input, and return original lyrics
function showSongLyrics () {
    var currentSong = localStorage.getItem("current-song", currentSong)
    var queryURL_musix = "https://api.musixmatch.com/ws/1.1/track.search?q_track=" + currentSong + "&page_size=1&page=1&s_track_rating=desc&apikey=e6524e95459dac73ce4a95bde9428b70";
    var corsFix = "https://cors-anywhere.herokuapp.com/";
    var fullURL = corsFix + queryURL_musix;

    $.ajax({
        url: fullURL,
        type: 'GET'
    }).then(function (response) {
        var idObject = JSON.parse("" + response + "");
        var trackId = idObject.message.body.track_list[0].track.track_id;
        var apiKey = "e6524e95459dac73ce4a95bde9428b70"
        var queryURL_lyrics = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" + trackId + "&apikey=" + apiKey;
        var full_LyricURL = corsFix + queryURL_lyrics;

        $.ajax({
            url: full_LyricURL,
            type: 'GET'
        }).then(function (response) {
            var lyricObject = JSON.parse("" + response + "");
            var lyrics = lyricObject.message.body.lyrics.lyrics_body;
            $("#search-button").removeClass("is-loading")
            $(".song-button").removeClass("is-loading")
            $("#lyric-box-1").removeClass("column-tall")
            $("#placeholder-box").removeClass("column-tall")
            $("#retrieved-lyrics").text(lyrics)
            lyricText = $("#retrieved-lyrics").text();
        });
    });
};

// Translate lyrics to Pirate
$("#pirate-translate").on("click", function () {
    var queryURL_pirate = "https://api.funtranslations.com/translate/pirate.json?text=" + lyricText;
    $("#pirate-translate").addClass("is-loading")

    $.ajax({
        headers: { 'X-FunTranslations-Api-Secret': 'Ta_kah9NbJ1OJsOMUdhyBQeF' },
        url: queryURL_pirate,
        method: "GET"
    }).then(function (response) {
        $("#pirate-translate").removeClass("is-loading")
        $("#lyric-box-2").removeClass("column-tall")
        $("#retrieved-translation").text(JSON.stringify(response.contents.translated));
    })
})

// Translate lyrics to Yoda
$("#yoda-translate").on("click", function () {
    var queryURL_yoda = "https://api.funtranslations.com/translate/yoda.json?text=" + lyricText;
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
    var queryURL_hodor = "https://api.funtranslations.com/translate/hodor.json?text=" + lyricText;
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

// Get song title from search bar
$("#search-button").click(function () {
    $("#search-button").addClass("is-loading")
    var currentSong = JSON.stringify($('#song-user-input').val());
    $('#song-user-input').val("")
    previousSongs.unshift(currentSong)
    localStorage.setItem("song-names", previousSongs)
    localStorage.setItem ("current-song", currentSong)
    showSongLyrics()
    showPreviousSongs()
})

// Get song title from buttons
$(".song-button").click(function () {
    var currentSong = $(this).attr("data-song")
    console.log(currentSong)
    $(this).addClass("is-loading")
    localStorage.setItem("current-song", currentSong)
    showSongLyrics()
})

// Clear local storage
$("#clear-button").click(function(){
    localStorage.clear()
    location.reload()
});

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