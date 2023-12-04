const out = document.querySelector('.out')

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);

    const username = params.get("username");

    out.innerText = username

});