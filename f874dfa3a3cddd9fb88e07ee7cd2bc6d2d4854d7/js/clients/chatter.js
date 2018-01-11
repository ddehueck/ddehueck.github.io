var chatterQuotes = { 
	"one": ["Excellent! Thank you", "Looks really good.", "Really tremendous resource", "It looks great."],
	"two": ["Really, really helpful", "Really neat stuff.", "Wow - that's great.", "This is cool!"], 
	"three": [". . . goldmine of information", "I love it!!!", "This is amazing.", "relevant, credible information"],
	"four": [". . . always useful information", "This is beautiful", "Well put together.", "wow"],
	"five": ["awesome", "very cool", "Keep it coming.", "This is phenomenal"], 
	"six": ["This is fantastic.", "This is fabulous", "Very well organized.", "Blimey, I'm impressed", "Informative and timely."]
}

var randNum = function() {
    return Math.floor(Math.random()*(10000-2000+1)+2000);
}

var updateChatterBox = function (currentIndex, elementToUpdate, quoteArray, time) {
	elementToUpdate.text(quoteArray[currentIndex]);
				
	elementToUpdate.fadeIn(800, () => {
		elementToUpdate.delay(time).fadeOut(800, () => {
						
			if (currentIndex == quoteArray.length - 1) {
				currentIndex = 0;
			} else {
				currentIndex += 1;
			}

			updateChatterBox(currentIndex, elementToUpdate, quoteArray, randNum())
		});
	});
}
			
$(document).ready(() => {
	updateChatterBox(0, $('.chatter-box #1 p'), chatterQuotes.one, randNum());
	updateChatterBox(0, $('.chatter-box #2 p'), chatterQuotes.two, randNum());
	updateChatterBox(0, $('.chatter-box #3 p'), chatterQuotes.three, randNum());
	updateChatterBox(0, $('.chatter-box #4 p'), chatterQuotes.four, randNum());
	updateChatterBox(0, $('.chatter-box #5 p'), chatterQuotes.five, randNum());
	updateChatterBox(0, $('.chatter-box #6 p'), chatterQuotes.six, randNum());
});