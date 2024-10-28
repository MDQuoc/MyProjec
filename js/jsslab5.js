// Function to handle tab switching
function showTab(tabId) {
  // Hide all tab content first
  const allTabContents = document.querySelectorAll(".tab-content");
  allTabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all tabs
  const allTabs = document.querySelectorAll(".nav-tabs li");
  allTabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show the selected tab content
  const selectedContent = document.getElementById(tabId);
  if (selectedContent) {
    selectedContent.classList.add("active");
  }

  // Add active class to selected tab
  const selectedTab = document.querySelector(
    `.nav-tabs li[data-tab="${tabId}"]`
  );
  if (selectedTab) {
    selectedTab.classList.add("active");
  }
}

// Initialize tabs when document loads
document.addEventListener("DOMContentLoaded", () => {
  // Set default tab to 'courses'
  showTab("courses");

  // Add click handlers to all tabs
  const tabs = document.querySelectorAll(".nav-tabs li");
  tabs.forEach((tab) => {
    const tabId = tab.getAttribute("data-tab");
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      showTab(tabId);
    });
  });
});

// Optional: Add URL hash support
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.slice(1);
  if (hash) {
    showTab(hash);
  }
});
// nút return
function goBackToLabs() {
  window.location.href = "index.html";
}
