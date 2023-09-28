//Title constructor function that creates a Title object
"use strict";

function addRecord() {
  var a = "this is class awesome";

  var table = document.getElementById("myTable");
  var tbody = document.getElementsByTagName("tbody")[0];

  var studentName = tbody.lastElementChild.previousElementSibling
    .firstElementChild.nextElementSibling.innerHTML
    ? tbody.lastElementChild.previousElementSibling.firstElementChild
        .nextElementSibling.innerHTML
    : "Book 10";
  console.log(studentName);
  var lastIndex = studentName.split(" ")[1];

  var tr1Node = document.createElement("tr");
  var tr2Node = document.createElement("tr");
  tr2Node.setAttribute("class", "dropDownTextArea");
  tr2Node.setAttribute("style", "display: none");

  var tdCheckBoxNode = document.createElement("td");
  tdCheckBoxNode.innerHTML =
    '<input class="inputNum" type="checkbox" id="checkbox" onclick = "onClickCheckBox(this)" /><br/><br/><img src="down.png" width="25px" onclick="myFunction(this)"/>';

  var tdStudentNode = document.createElement("td");
  tdStudentNode.innerHTML = "Student " + (parseInt(lastIndex) + 1);

  var tdAdvisorsNode = document.createElement("td");
  tdAdvisorsNode.innerHTML = "Teacher " + (parseInt(lastIndex) + 1);

  alert(`Student ${parseInt(lastIndex) + 1} Record added successfully`);

  var tdAwardStatusNode = document.createElement("td");
  tdAwardStatusNode.innerHTML = "Approved" || "Refused" || "Pending";

  var tdSemesterNode = document.createElement("td");
  tdSemesterNode.innerHTML = "Spring" || "Fall" || "Summer";

  var tdTypeNode = document.createElement("td");
  tdTypeNode.innerHTML = "TA";

  var random_num = parseInt(Math.random() * 100000);
  var tdBudgetNode = document.createElement("td");
  tdBudgetNode.innerHTML = random_num;

  var random_num = parseInt(Math.random() * 100);
  var tdPercentageNode = document.createElement("td");
  tdPercentageNode.innerHTML = `${random_num} %`;

  tr2Node.innerHTML =
    '<td colspan="8"> Advisor:<br /><br />Award Details<br />Summer 1-2019(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /> </td>';

  tr1Node.appendChild(tdCheckBoxNode);
  tr1Node.appendChild(tdStudentNode);
  tr1Node.appendChild(tdAdvisorsNode);
  tr1Node.appendChild(tdAwardStatusNode);
  tr1Node.appendChild(tdSemesterNode);
  tr1Node.appendChild(tdTypeNode);
  tr1Node.appendChild(tdBudgetNode);
  tr1Node.appendChild(tdPercentageNode);
  //   tr1Node.appendChild(tdDeleteNode);
  //   tr1Node.appendChild(tdEditNode);
  tbody.appendChild(tr1Node);
  tbody.appendChild(tr2Node);
  //   tr2Node.appendChild(tdDetailsNode);
}

function onClickCheckBox(checkBox) {
  var selectedRow = checkBox.parentElement.parentElement;
  var count = checkboxcounts();

  if (checkBox.checked == true) {
    selectedRow.style.backgroundColor = "orange";

    // var statue = document.getElementById("checkbox");
    // if (statue.checked) {
    //   alert("选中");
    // } else {
    //   alert("未选中");
    // }

    if (count > 0) {
      document.getElementById("sbutton").style.backgroundColor =
        "rgb(255, 77, 0)";
    }

    var deleteButton = document.createElement("td");
    deleteButton.innerHTML =
      '<button id="deleted" type ="button" onClick = "onDeleteRow(this)"> Delete';
    selectedRow.appendChild(deleteButton);

    var editbutton = document.createElement("td");
    editbutton.innerHTML =
      '<button id="edited type="button" onClick = "onEditRow(this)"> Edit';
    selectedRow.appendChild(editbutton);
  } else {
    if (count == 0) {
      document.getElementById("sbutton").style.backgroundColor = "#fff";
    }
    selectedRow.style.backgroundColor = "#fff";
    selectedRow.deleteCell(8);
    selectedRow.deleteCell(8);
  }
  console.log(checkBox);
}

function submitRecord() {
  var count = checkboxcounts();

  if (count > 0) {
    alert(`Successfully submitted!`);
  }
}

// alert(`Successfully submitted!`);

function onDeleteRow(deletedRef) {
  var selectedRow = deletedRef.parentElement.parentElement;
  var _Index = selectedRow.rowIndex;

  document.getElementById("myTable").deleteRow(_Index);

  // document.getElementById("myTable").deleteRow(_Index);
  confirm("Do you want to delete it ?");
  alert("Successfully deleted !");
}

function onEditRow() {
  const newEdit = prompt("Please edit here: ");
  alert("Thank you !");
}

// i = r.parentNode.parentNode.rowIndex;
//   document.getElementById("myTable").deleteRow(i);

function myFunction(selectImg) {
  var selectedRow = selectImg.parentElement.parentElement;

  console.log(selectedRow.display);
  //   selectedRow.display = "none"
  if (selectedRow.nextElementSibling.style.display == "none") {
    // selectedRow.nextElementSibling.style.display = "block";
    // selectedRow.nextElementSibling.firstElementChild.
    selectedRow.nextElementSibling.style.removeProperty("display");
    // document.getElementsByClassName("delete_edit").removeProperty("display");
  } else {
    selectedRow.nextElementSibling.style.display = "none";
    // document.getElementsByClassName("delete_edit").style.display = "none";
  }

  //   selectedRow.nextElementSibling.style.display = "none";
  //   console.log(selectedRow.display);
}

function checkboxcounts() {
  var inputElems = document.getElementsByClassName("inputNum"),
    count = 0;
  for (var i = 0; i < inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
      count++;
    }
  }
  return count;
}
