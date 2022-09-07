$(function(){
      $(".typed").typed({
        strings: ["<p class='command'>maintenance</p> <p>-bash: maintenance: command not found</p> <p class='command'>wel.. ^1000 this is awkward..<span class='typed-cursor'>_</span></p>"],
        typeSpeed: 0,
        loop: false,
        showCursor: false,
        callback: function() {
          setTimeout( function() {
            $('.console').remove()
          }, 2000) 
        }
      });
  }); 