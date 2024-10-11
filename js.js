// Global JavaScript for Main Page

// Function to switch tabs (main navigation tabs)
function showTab(tabName, element) {
  // Hide all tab contents
  var contents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }

  // Remove active class from all tabs
  var tabs = document.querySelectorAll(".navbar a");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });

  // Show the clicked tab content
  document.getElementById(tabName).classList.add("active");

  // Add active class to the clicked tab
  element.classList.add("active");
}
// login//
function openModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
  // Clear input fields
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

window.onclick = function (event) {
  const modal = document.getElementById("loginModal");
  if (event.target == modal) {
    closeModal(); // Call closeModal function to hide modal and clear inputs
  }
};

function handleLogin(event) {
  event.preventDefault(); // Prevent the form from submitting
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Logic for authentication (could call an API or hard-check)
  if (username === "admin" && password === "12345") {
    alert("Đăng nhập thành công!");
    closeModal();
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng.");
  }
}
