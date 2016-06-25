// Business End Logic

  function pingPong(input) {
    for (var i=1; i <= input; i+=1) {
      if(i % 15 === 0) {
        $("ul#numberOutput").append("<li>pingpong</li>");
      }
    }
  }
