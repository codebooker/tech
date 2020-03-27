(function(){
      var words = [
          'Afford',
          'Cap',
          'Reli',
          'Honor',
          'Person',
          ], i = 0;
      setInterval(function(){
        if (i < 4)
        {
        $('#afterables').fadeOut();
        $('#changingword').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
        }
        else
        {
          $('#theables').fadeOut();
          document.getElementById("theables").style.display = "none";
          $('#afterables').fadeIn();
          document.getElementById("afterables").style.display = "block";
        }
      }, 2500);
        
  })();