
function checkPassword() {
    let input = document.getElementById("pwField").value;
    if (input === "TrustNo1") {
        enableInputs();
    }
}

function enableInputs() {
    let disabledElements = document.getElementsByClassName("disabled");
    for (let i = 0; i < disabledElements.length; i++) {
        disabledElements[i].disabled = false;
    }
}