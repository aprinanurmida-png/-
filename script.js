function darkmode() {
    document.body.classList.toggle("dark");
}

const text = "ITコース";
let i = 0;
function ketik() {
        if (i < text.length) {
        document.getElementById("ketik").innerHTML += text.charAt(i);
        i++;
        setTimeout(ketik, 100); // Adjust the speed of typing here
        }
}
ketik();