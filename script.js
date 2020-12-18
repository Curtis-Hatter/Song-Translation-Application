var userinput = prompt("enter song");
var url = "https://api.musixmatch.com/ws/1.1/track.search?q_track="+userinput+"&page_size=1&page=1&s_track_rating=desc&apikey=e6524e95459dac73ce4a95bde9428b70";
var corsfix = "https://cors-anywhere.herokuapp.com/";
var fullurl=corsfix+url;


console.log(url);
console.log(fullurl);


$.ajax({
    url: fullurl,
    type: 'GET'
}).then(function(response){
    var idobject = JSON.parse(""+response+"");
    console.log(idobject);

    var trackid = idobject.message.body.track_list[0].track.track_id;

    console.log(trackid);

    var lyricurl = "https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id="+trackid+"&apikey=e6524e95459dac73ce4a95bde9428b70";

    var fulllyricurl = corsfix+lyricurl;
    console.log(fulllyricurl);
   
   
    $.ajax({
        url: fulllyricurl,
        type: 'GET'
    }).then(function(response){
        var lyricobject = JSON.parse(""+response+"");
        console.log(lyricobject);
    
        var lyrics = lyricobject.message.body.lyrics.lyrics_body;

        console.log(lyrics);
    
    
    
    
    });

});


