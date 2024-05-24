document.addEventListener("DOMContentLoaded", function() {
    var del = document.querySelectorAll("button");
    del.forEach(function(button) {
        button.addEventListener("click", function() {
            var row = this.parentNode.parentNode;
            row.parentNode.removeChild(row);
        });
    });
});
