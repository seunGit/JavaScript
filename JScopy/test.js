for (var i = 0; i < 5; ++i) {
    (function(j) {
      setTimeout(function() {
        console.log('variable-' + j);
      }, 100);
    });
  }

  for(var i = 0; i < 5; ++i) {
    setTimeout(
      function() { 
        console.log('variable-' + i); 
      }, 100
    );
  }