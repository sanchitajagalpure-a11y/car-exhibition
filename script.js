function showDetails(info) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("car-info").innerText = info;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}