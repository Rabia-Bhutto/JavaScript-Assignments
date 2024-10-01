// Task# 01: Create a signup form and display form data in your web page on submission.

// function submission(event){
//     event.preventDefault(); // Prevent the default form submission

//     var firstName = document.getElementById("firstName").value;
//     var lastName = document.getElementById("lastName").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     var formData = `<h2 class="head text-center">SUBMITTED DATA</h2>
//     <p><strong>First Name:</strong> ${firstName}</p>
//     <p><strong>Last Name:</strong> ${lastName}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Password:</strong> ${password}</p>`;

//     var resultDiv = document.getElementById("output");
//     resultDiv.innerHTML = formData;
//     resultDiv.style.display = "block";
// }


// Task# 02: Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.

// function toggleText() {
//     var moreText = document.querySelector('.more-text');
//     var readMoreBtn = document.querySelector('.read-more-btn');

//     if (moreText.style.display === "none") {
//         moreText.style.display = "inline";
//         readMoreBtn.textContent = "Read less";
//     } else {
//         moreText.style.display = "none";
//         readMoreBtn.textContent = "Read more";
//     }
// }


// Task# 03: In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

// Function to add or update student details
// function addOrUpdateStudent() {
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;
//     const grade = document.getElementById('grade').value;
//     const rowIndex = document.getElementById('rowIndex').value;
  
//     if (rowIndex === "-1") {
//       // Add new student
//       const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
//       const newRow = table.insertRow();
  
//       newRow.insertCell(0).innerText = name;
//       newRow.insertCell(1).innerText = age;
//       newRow.insertCell(2).innerText = grade;
  
//       const actionsCell = newRow.insertCell(3);
//       actionsCell.innerHTML = `
//         <button onclick="editStudent(this)">Edit</button>
//         <button onclick="deleteStudent(this)">Delete</button>
//       `;
//     } else {
//       // Update existing student
//       const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
//       const row = table.rows[rowIndex];
//       row.cells[0].innerText = name;
//       row.cells[1].innerText = age;
//       row.cells[2].innerText = grade;
//     }
  
//     resetForm();
//   }

  // Function to delete a student row
// function deleteStudent(button){
//     button.parentNode.parentNode.remove();
// }

// // Function to edit a student row
// function editStudent(button) {
//     const row = button.parentNode.parentNode;
//     document.getElementById('rowIndex').value = row.rowIndex - 1;
//     document.getElementById('name').value = row.cells[0].innerText;
//     document.getElementById('age').value = row.cells[1].innerText;
//     document.getElementById('grade').value = row.cells[2].innerText;
//   }
  
//   // Function to reset the form
//   function resetForm() {
//     document.getElementById('rowIndex').value = "-1";
//     document.getElementById('name').value = '';
//     document.getElementById('age').value = '';
//     document.getElementById('grade').value = '';
//   }