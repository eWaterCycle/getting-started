window.addEventListener("DOMContentLoaded", () => {
  const targetContainer = document.querySelector(".launch-buttons");

  if (targetContainer) {
    // Create the new button
    const customButton = document.createElement("a");
    customButton.textContent = "Launch Custom JupyterHub";
    customButton.className = "jb-button custom-launch-button";
    customButton.style.marginLeft = "10px";
    customButton.style.backgroundColor = "#007ACC";
    customButton.style.color = "white";
    customButton.style.padding = "6px 12px";
    customButton.style.borderRadius = "4px";
    customButton.style.textDecoration = "none";

    // Set your custom URL here
    const customUrl = "https://your-custom-jupyterhub-url/lab";
    customButton.href = customUrl;
    customButton.target = "_blank";

    // Add the button to the page
    targetContainer.appendChild(customButton);
  }
});
