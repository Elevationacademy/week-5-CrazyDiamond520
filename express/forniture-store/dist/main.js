const getItem = function(){
    let input = $("#input").val()


    $.get(`ItemCheck/${input}`, function(item){
        $("body").append(`<div>${item}</div>`)
        console.log(item)
    })
}

$("#buy-button").on("click", function(){
    let buyInput = $("#buy-input").val()

    $.get(`/buy/${buyInput}`, function(sentence){
        $("body").append(`<div>${sentence}</div>`)
        console.log(sentence)
    })
})