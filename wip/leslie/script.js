(function(){
      var words = [
          'Afford',
          'Cap',
          'Reli',
          'Account',
          'Person',
          ], i = 0;
      setInterval(function(){
        if (i < 4)
        {
        $('#later').fadeOut();
        $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
        }
        else
        {
          $('#otherthing').fadeOut();
          document.getElementById("otherthing").style.display = "none";
          $('#later').fadeIn();
          document.getElementById("later").style.display = "block";
        }
      }, 3000);
        
  })();