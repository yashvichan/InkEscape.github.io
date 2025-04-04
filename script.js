// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Markdown Loader
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const part = params.get("part");

    if (part) {
        fetch(`cursed-memories/${part}.md`)
            .then(response => response.text())
            .then(markdown => {
                document.getElementById("markdown-content").innerHTML = marked.parse(markdown);
            })
            .catch(error => console.error("Error loading Markdown file:", error));
    }
});
