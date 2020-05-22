let daxilEdilenMetin = document.getElementById("exampleFormControlTextarea1");
let netice = document.getElementById("exampleFormControlTextarea2");
let btnSpit = document.getElementById("btnSplit");

btnSpit.addEventListener("click", function(e) {
    netice.style.visibility = "visible";
    document.getElementById("netice").style.visibility = "visible";
    netice.innerHTML = "";
    for (let i = 0; i <= daxilEdilenMetin.value.split(" ").length; i++) {
        if (daxilEdilenMetin.value.split(" ")[i] === undefined) {
            netice.innerHTML += ""
        } else {
            netice.innerHTML += `${daxilEdilenMetin.value.split(" ")[i]}<br>`;
        }
    }


    e.preventDefault()
});