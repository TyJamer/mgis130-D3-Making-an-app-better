// Runs when the page loads to wire up Sign In / Guest and Budget Style buttons

document.addEventListener("DOMContentLoaded", () => {
  const authView = document.getElementById("auth-view");
  const styleView = document.getElementById("style-view");
  const signinForm = document.getElementById("signin-form");
  const studentNameInput = document.getElementById("student-name");
  const guestBtn = document.getElementById("guest-btn");
  const userBadge = document.getElementById("user-badge");
  const styleButtons = document.querySelectorAll(".style-card");
  const selectionStatus = document.getElementById("selection-status");

  // Helper to transition from Sign-In screen to Budget Style screen
  function enterApp(displayName) {
    userBadge.textContent = displayName;
    authView.classList.add("hidden");
    styleView.classList.remove("hidden");
  }

  // Handle Sign-In form submit
  signinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = studentNameInput.value.trim();
    if (name) {
      enterApp(name);
    }
  });

  // Handle Guest button click
  guestBtn.addEventListener("click", () => {
    enterApp("Guest Mode");
  });

  // Handle Budget Style selection
  styleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'selected' highlight from all cards
      styleButtons.forEach((btn) => btn.classList.remove("selected"));
      
      // Highlight the clicked card
      button.classList.add("selected");
      
      const chosenStyle = button.getAttribute("data-style");
      selectionStatus.textContent = `Selected: ${chosenStyle.toUpperCase()} — Ready to build your dashboard next!`;
    });
  });
});
