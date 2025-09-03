window.addEventListener("DOMContentLoaded", () => {
  const launchButton = document.querySelector(".jb-button.launch-button");

  if (launchButton) {
    launchButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default behavior
      const userUrl = prompt("Enter your JupyterHub server URL (e.g., https://yourhub.domain):");

      if (userUrl && userUrl.startsWith("https://")) {
        const interface = "lab"; // or "tree" if you prefer classic
        window.open(`${userUrl}/${interface}`, "_blank");
      } else {
        alert("Please enter a valid HTTPS URL.");
      }
    });
  }
});
