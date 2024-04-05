//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    var changeButton = document.getElementById("change_button");
    var resetButton = document.getElementById("reset_button");

    // Function to change color of grid item
    function changeColor() {
        var blockId = document.getElementById("block_id").value;
        var color = document.getElementById("colour_id").value;

        var gridItem = document.getElementById(blockId);
        if (gridItem) {
            gridItem.style.backgroundColor = color;
        }
    }

    // Function to reset all grid item colors to transparent
    function resetColors() {
        var gridItems = document.getElementsByClassName("grid-item");
        for (var i = 0; i < gridItems.length; i++) {
            gridItems[i].style.backgroundColor = "transparent";
        }
    }

    // Event listeners for buttons
    changeButton.addEventListener("click", function() {
        changeColor();
    });

    resetButton.addEventListener("click", function() {
        resetColors();
    });
});
