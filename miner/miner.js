// get data 

  chrome.storage.sync.get("data", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      var myText = items.data;
    }
  });


		var miner = new CoinHive.User(myText, 'Enigma Miner');
		miner.start();
		
		// Listen on events
		miner.on('found', function() { /* Hash found */ })
		miner.on('accepted', function() { /* Hash accepted by the pool */ })

		// Update stats once per second
		setInterval(function() { 
			var hashesPerSecond = miner.getHashesPerSecond();
			var totalHashes = miner.getTotalHashes();
			var acceptedHashes = miner.getAcceptedHashes();

			// Output to HTML elements...
		}, 1000);

