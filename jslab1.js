function openTab(tabId, element) {
  // Hide all sub-tabs
  const tabs = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Show the selected sub-tab
  document.getElementById(tabId).classList.add("active");

  // Remove active class from all links
  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => link.classList.remove("active"));

  element.classList.add("active");
}

// nút return
function goBackToLabs() {
  window.location.href = "index.html";
}
// chức năng Implement

let studentList = [];
let editIndex = -1;

function renderStudentList() {
  const tbody = document.querySelector(".table-section tbody");
  tbody.innerHTML = "";

  studentList.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.major}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;

    tbody.appendChild(row);
  });
}

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const studentId = document.getElementById("studentId").value;
  const studentName = document.getElementById("studentName").value;
  const major = document.getElementById("major").value;

  if (editIndex === -1) {
    studentList.push({
      id: studentId,
      name: studentName,
      major: major,
    });
  } else {
    studentList[editIndex] = {
      id: studentId,
      name: studentName,
      major: major,
    };
    editIndex = -1;
  }

  document.getElementById("studentForm").reset();

  renderStudentList();
});

// Function to delete a student
function deleteStudent(index) {
  studentList.splice(index, 1); // Remove student from the list
  renderStudentList(); // Re-render the updated list
}

// Function to edit a student
function editStudent(index) {
  const student = studentList[index];

  document.getElementById("studentId").value = student.id;
  document.getElementById("studentName").value = student.name;
  document.getElementById("major").value = student.major;

  editIndex = index;
}

document
  .querySelector(".search-section button")
  .addEventListener("click", function () {
    const searchInput = document
      .getElementById("searchInput")
      .value.toLowerCase();

    const filteredList = studentList.filter(
      (student) =>
        student.id.toLowerCase().includes(searchInput) ||
        student.name.toLowerCase().includes(searchInput) ||
        student.major.toLowerCase().includes(searchInput)
    );

    // Display filtered students
    const tbody = document.querySelector(".table-section tbody");
    tbody.innerHTML = "";

    filteredList.forEach((student, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.major}</td>
            <td>
                <button onclick="editStudent(${index})">edit</button>
                <button onclick="deleteStudent(${index})">delete</button>
            </td>
        `;

      tbody.appendChild(row);
    });
  });
