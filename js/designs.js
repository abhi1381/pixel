//table
var table = $("#pixelCanvas");
// Select color input
var SetColor = $("#colorPicker");
// Select size input


//tableform
// When size is submitted by the user, call makeGrid()


function makeGrid() {
    var Height = $("#inputHeight").val();
    var Width = $("#inputWeight").val();
    for(var i = 0; i < Height; i++) {
        table.append("<tr></tr>");
        var last = table.find('tr').last();
        for(var j = 0; j < Width; j++) {
            last.append("<td class='cell'></td>");
            fillcell();
        }        
    }

}

function fillcell() {
    $(".cell").on("mouseover" , function () {
        var Color = SetColor.val();
        $(this).css('background-color', Color);
    });
}


function gridWash() {
    $("#pixelCanvas").children().remove();
}

$(document).ready(
    function form() {
        $("#submit_form").click(function (e) {
            e.preventDefault();
            gridWash();
            makeGrid();
        });
    });



