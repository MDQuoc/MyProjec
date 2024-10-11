document.querySelectorAll(".select-exercise").forEach((button) => {
  button.addEventListener("click", function () {
    const exerciseTitle = this.getAttribute("data-title");
    document.getElementById("exercise-title").textContent = exerciseTitle;
    document.getElementById("exercise-list").style.display = "none"; // Hide exercise list
    document.getElementById("coding-environment").style.display = "block"; // Show coding environment
  });
});

document
  .getElementById("compareCodeBtn")
  .addEventListener("click", function () {
    const code1 = document.getElementById("code1").value.trim();
    const code2 = document.getElementById("code2").value.trim();
    const messageDiv = document.getElementById("message");

    // So sánh đoạn mã
    if (code1 === code2) {
      messageDiv.textContent = "Hai đoạn mã giống nhau!";
      messageDiv.style.color = "green";
    } else {
      messageDiv.textContent = "Hai đoạn mã khác nhau!";
      messageDiv.style.color = "red";
    }
  });
document
  .getElementById("backArrow")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    document.getElementById("exercise-list").style.display = "block"; // Hiển thị danh sách bài tập
    document.getElementById("coding-environment").style.display = "none"; // Ẩn phần so sánh code
    document.getElementById("message").textContent = ""; // Xóa thông báo
    document.getElementById("code1").value = ""; // Xóa giá trị ô nhập code 1
    document.getElementById("code2").value = ""; // Xóa giá trị ô nhập code 2
  });

// Hàm cho nút quay về trang chính (nếu cần)
function goBackToLabs() {
  window.location.href = "index.html#labs"; // Điều hướng về trang danh sách bài tập
}
