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

function checkLaunch() {
    let launching = true;
    let disabledElements = document.getElementsByClassName("disabled");
    for (let i = 0; i < disabledElements.length; i++) {
        let el = disabledElements[i];
        if (el.type === "range") {
            if (el.value !== "100") {
                launching = false;
                break;
            }
        } else {
            if (!el.checked) {
                launching = false;
                break;
            }
        }
    }

    if (launching) {
        document.getElementById("launch").disabled = false;
    }
}

function launch() {
    console.log("in launch");
    setInterval(function() {
        console.log("in sched   uled func");
        let rocket = document.getElementsByClassName("rocket")[0];
        let left = window.getComputedStyle(rocket).getPropertyValue("left").replace("px", '');
        let bottom = window.getComputedStyle(rocket).getPropertyValue("bottom").replace("px", '');
        rocket.style.left = Number(left) + 1 + "px";
        rocket.style.bottom = Number(bottom) + 1 + "px";
    }, 10);
}