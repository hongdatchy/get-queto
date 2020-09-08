function getData(){
    $(".load-data").show();
    $("#actual").html("");
    $("#author").html("");
    $.ajax("http://quotes.stormconsultancy.co.uk/random.json").then(function(success){
        const{ quote, author} = success;
        console.log(success);
        author == "Unknown" ? $("#author").html("no author"):$("#author").html(author);
        $("#actual").html(quote);
        
    }).then(function(){
        $(".load-data").hide();
    })
}
getData();
$("#get-quote").click(function(){
    getData();
})
