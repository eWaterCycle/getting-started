window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");

  if (header) {
    const customButton = document.createElement("a");
    customButton.textContent = "Launch Custom JupyterHub";
    customButton.className = "custom-launch-button";
    customButton.style.backgroundColor = "#007ACC";
    customButton.style.color = "white";
    customButton.style.padding = "6px 12px";
    customButton.style.marginLeft = "10px";
    customButton.style.borderRadius = "4px";
    customButton.style.textDecoration = "none";
    customButton.style.fontWeight = "bold";

    // Set your custom URL here
    customButton.href = "https://your-custom-jupyterhub-url/lab";
    customButton.target = "_blank";

    header.appendChild(customButton);
  }
});
