var quotes = [
    {
        quotation:"Q1", 
        songtitle: "S1",
        album: "A1"
    },
    {
          quotation:"Q2", 
        songtitle: "S2",
        album: "A2"
    },
        {
          quotation:"Q3", 
        songtitle: "S3",
        album: "A3"
    }
];

button.addEventListener("click", function(){
     var randomQuote = Math.floor((Math.random()*quotes.length));
     var getQuote = quotes[randomQuote];
     document.getElementById("quote").innerText = getQuote.quotation;
     document.getElementById("title").innerText = getQuote.songtitle;
     document.getElementById("album").innerText = getQuote.album;
});
