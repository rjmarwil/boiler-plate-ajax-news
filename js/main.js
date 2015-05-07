// Reddit
function reddit() {
  $('.reddit').children().remove();
  $.getJSON("http://www.reddit.com/r/worldnews.json", {
    format: "json"
  })
  .done(function( data ) {
    $.each(data.data.children, function(i, result){
      $(".reddit").append("<li><a href='" + result.data.url + "'>" + result.data.title + "</a></li>");
    });
  });
}

// NPR
function npr() {
  $('.npr').children().remove();
  $.ajax("http://api.npr.org/query?id=1004&fields=title,titles&output=JSON&apiKey=MDE5MDgxNTg2MDE0MzEwMTkzNjEwOTRkNg001", {
    dataType: "json",
    method: "GET"
  })
  .done(function( data ) {
    $.each(data.list.story, function(i, result){
      $(".npr").append("<li><a href='" + result.link[2].$text + "'>" + result.title.$text + "</a></li>");
    });
  });
}

// NY Times
function nytimes() {
  $('.nytimes').children().remove();
  $.ajax( "http://api.nytimes.com/svc/topstories/v1/home.json?api-key=a54637a5d4a3416bdf7326d3d7d5fc44:17:72024629", {
    format: "json",
    method: "GET"
  })
  .done(function( data ) {
    $.each(data.results, function(i, result){
      $(".nytimes").append("<li><a href='" + result.url + "'>" + result.title + "</a></li>");
    });
  });
}

reddit();
npr();
nytimes();
