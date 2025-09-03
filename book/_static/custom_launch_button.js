window.addEventListener("DOMContentLoaded", () => {
  // Create modal HTML
  const modalHTML = `
    <div id="customModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:1000;">
      <div style="background:white; padding:20px; max-width:400px; margin:100px auto; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.3);">
        <h3>Enter your JupyterHub URL</h3>
        <input type="text" id="jupyterUrlInput" placeholder="https://yourhub.domain" style="width:100%; padding:8px; margin-top:10px;"/>
        <div style="margin-top:15px; text-align:right;">
          <button id="launchBtn" style="padding:8px 12px; margin-right:10px;">Launch</button>
          <button id="cancelBtn" style="padding:8px 12px;">Cancel</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const launchButton = document.querySelector(".jb-button.launch-button");
  const modal = document.getElementById("customModal");
  const input = document.getElementById("jupyterUrlInput");
  const launchBtn = document.getElementById("launchBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  if (launchButton) {
    launchButton.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display = "block";
    });
  }

  launchBtn.addEventListener("click", () => {
    const url = input.value.trim();
    if (url.startsWith("https://")) {
      window.open(`${url}/lab`, "_blank");
      modal.style.display = "none";
      input.value = "";
    } else {
      alert("Please enter a valid HTTPS URL.");
    }
  });

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
    input.value = "";
  });
});
