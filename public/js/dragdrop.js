
// Drag and drop area code
var lastTarget = null;

function isFile(evt) {
    var dt = evt.dataTransfer;

    for (var i = 0; i < dt.types.length; i++) {
        if (dt.types[i] === "Files") {
            return true;
        }
    }
    return false;
}

window.addEventListener("dragenter", function (e) {
    if (isFile(e)) {
        lastTarget = e.target;
        document.querySelector("#dropZone").style.visibility = "";
        document.querySelector("#dropZone").style.opacity = 1;
    }
});

window.addEventListener("dragleave", function (e) {
    e.preventDefault();
    if (e.target === document || e.target === lastTarget) {
        document.querySelector("#dropZone").style.visibility = "hidden";
        document.querySelector("#dropZone").style.opacity = 0;
    }
});

window.addEventListener("dragover", function (e) {
    e.preventDefault();
});

window.addEventListener("drop", function (e) {
    e.preventDefault();
    document.querySelector("#dropZone").style.visibility = "hidden";
    document.querySelector("#dropZone").style.opacity = 0;
    if(e.dataTransfer.files.length == 1)
    {
        const file = e.dataTransfer.files[0];
        const name = file.name;
        const size = file.size;
        const type = file.type;
        reader = new FileReader();
        reader.onload = function(event) 
        {
            $.post('/getNexusData', {data: event.target.result});
        };
    }
});