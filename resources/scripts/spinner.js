// Wait until all images are loaded
window.addEventListener("load", () => {
  // Hide spinner
  document.getElementById("spinner-overlay").style.display = "none";
  // Show content
 const headers = document.getElementsByClassName("header-area");
    for (let i = 0; i < headers.length; i++) {
    headers[i].style.display = "block";
    }

  const mainContents = document.getElementsByClassName("main-content");
   for (let i = 0; i < mainContents.length; i++) {
    mainContents[i].style.display = "block";
    }

});
