const form = document.myForm;

const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regExEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@northeastern\.edu$/;
const regExPhone =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const regExAddress = /^(\d{1,}) [a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const regExZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
const regExCountry = /^[a-zA-Z0-9\s.,!?@#$%^&*()-+=_'"`~]{2,500}$/;
const regExCity = /^[a-zA-Z0-9\s.,!?@#$%^&*()-+=_'"`~]{2,500}$/;
const regExComment = /^[a-zA-Z0-9\s.,!?@#$%^&*()-+=_'"`~]{2,500}$/;
const regExAlphaNumeric = /^[a-zA-Z0-9]+$/;

let isNameValid = false;
let isEmailValid = false;
let isPhoneNumberValid = false;
let isAddress1Valid = false;
let isAddress2Valid = false;
let isCountryValid = false;
let isCityValid = false;
let isZipValid = false;
let isCareerValid = false;
let isCommentValid = false;

const validate = (e) => {
  let { id, name, value } = e.target;

  if (name == "name") {
    if (!value.trim().toLowerCase().match(regExName)) {
      document.getElementById(`error_${name}`).style.display = "block";
      isNameValid = false;
    } else {
      document.getElementById(`error_${name}`).style.display = "none";
      isNameValid = true;
    }
  } else if (name == "email") {
    if (!value.trim().toLowerCase().match(regExEmail)) {
      document.getElementById(`error_${name}`).style.display = "block";
      isEmailValid = false;
    } else {
      document.getElementById(`error_${name}`).style.display = "none";
      isEmailValid = true;
    }
  } else if (name == "phoneNumber") {
    if (!value.trim().toLowerCase().match(regExPhone)) {
      document.getElementById(`error_${name}`).style.display = "block";
      isPhoneNumberValid = false;
    } else {
      document.getElementById(`error_${name}`).style.display = "none";
      isPhoneNumberValid = true;
    }
  } else if (name == "country") {
    if (!value.trim().toLowerCase().match(regExCountry)) {
      document.getElementById(`error_${name}`).style.display = "block";
      isCountryValid = false;
    } else {
      document.getElementById(`error_${name}`).style.display = "none";
      isCountryValid = true;
    }
  } else if (name == "city") {
    if (!value.trim().toLowerCase().match(regExCity)) {
      document.getElementById(`error_${name}`).style.display = "block";
      isCityValid = false;
    } else {
      document.getElementById(`error_${name}`).style.display = "none";
      isCityValid = true;
    }
  } else if (name == "address1") {
    if (!value.trim().toLowerCase().match(regExAddress)) {
      document.getElementById(`error_${name}`).style.display = "block";
      isAddress1Valid = false;
    } else {
      document.getElementById(`error_${name}`).style.display = "none";
      isAddress1Valid = true;
    }
  } else if (name == "zip") {
    if (!value.trim().toLowerCase().match(regExZip)) {
      document.getElementById(`error_${name}`).style.display = "block";
      isZipValid = false;
    } else {
      document.getElementById(`error_${name}`).style.display = "none";
      isZipValid = true;
    }
  } else if (name == "comment") {
    if (!value.trim().match(regExComment)) {
      document.getElementById(`error_${name}`).style.display = "block";
      isCommentValid = false;
    } else {
      document.getElementById(`error_${name}`).style.display = "none";
      isCommentValid = true;
    }
  }

  if (!value.trim()) {
    document.getElementById(`error_${name}`).innerText =
      "Field cannot be empty.";
    document.getElementById(`error_${name}`).style.display = "block";
    return;
  } else if (value.length < 1) {
    document.getElementById(`error_${name}`).innerText =
      "Field should have at least 2 characters.";
    document.getElementById(`error_${name}`).style.display = "block";
    return;
  } else if (value.length > 50) {
    document.getElementById(`error_${name}`).innerText =
      "Field should not exceed 50 characters.";
    document.getElementById(`error_${name}`).style.display = "block";
    return;
  }

  if (
    !isNameValid ||
    !isEmailValid ||
    !isPhoneNumberValid ||
    !isAddress1Valid ||
    !isZipValid ||
    !isCountryValid ||
    !isCityValid ||
    !isCommentValid
  ) {
    document.myForm.submit.setAttribute("disabled", true);
  } else {
    document.myForm.submit.removeAttribute("disabled");
  }
};

function updateCheckboxes() {
  let careerSelect = document.getElementById("career_select").value;
  let checkboxesDiv = document.getElementById("dynamic_checkboxes");

  checkboxesDiv.innerHTML = "";

  if (careerSelect === "Bubble Tea") {
    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name="subject" data-textfield-id="apple-text" value="apple" onclick="toggleTextField(this)" /> APPLE';
    checkboxesDiv.innerHTML +=
      '<input type="text" id="apple-text" style="display: none;" placeholder="Comments: " /><br>';

    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name="subject" data-textfield-id="berry-text" value="berry" onclick="toggleTextField(this)" /> BERRY';
    checkboxesDiv.innerHTML +=
      '<input type="text" id="berry-text" style="display: none;" placeholder="Comments: " /><br>';

    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name="subject" data-textfield-id="coconut-text" value="coconut" onclick="toggleTextField(this)" /> COCONUT';
    checkboxesDiv.innerHTML +=
      '<input type="text" id="coconut-text" style="display: none;" placeholder="Comments: " /><br>';
  } else if (careerSelect == "Frappuchino") {
    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name="subject" data-textfield-id="math-text" value="math" onclick="toggleTextField(this)" /> Vanilla';
    checkboxesDiv.innerHTML +=
      '<input type="text" id="math-text" style="display: none;" placeholder="Comments: " /><br>';

    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name="subject" data-textfield-id="science-text" value="science" onclick="toggleTextField(this)" /> Chocolate';
    checkboxesDiv.innerHTML +=
      '<input type="text" id="science-text" style="display: none;" placeholder="Comments: " /><br>';

    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name="subject" data-textfield-id="art-text" value="art" onclick="toggleTextField(this)" /> Matcha';
    checkboxesDiv.innerHTML +=
      '<input type="text" id="art-text" style="display: none;" placeholder="Comments: " /><br>';
  } else if (careerSelect == "Fruit Juice") {
    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name="subject" data-textfield-id="math-text" value="math" onclick="toggleTextField(this)" /> Mathematic';
    checkboxesDiv.innerHTML +=
      '<input type="text" id="math-text" style="display: none;" placeholder="Comments: " /><br>';

    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name="subject" data-textfield-id="science-text" value="science" onclick="toggleTextField(this)" /> Science';
    checkboxesDiv.innerHTML +=
      '<input type="text" id="science-text" style="display: none;" placeholder="Comments: " /><br>';

    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name="subject" data-textfield-id="art-text" value="art" onclick="toggleTextField(this)" /> Art';
    checkboxesDiv.innerHTML +=
      '<input type="text" id="art-text" style="display: none;" placeholder="Comments: " /><br>';
  } else if (careerSelect == "Smoothie") {
    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name ="usage" value = "pens"> Pens';
    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name ="usage" value = "rulers"> Rulers';
  } else if (careerSelect == "SodaDrink") {
    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name ="usage" value = "pens"> Pens';
    checkboxesDiv.innerHTML +=
      '<input type="checkbox" name ="usage" value = "rulers"> Rulers';
  }
}
function toggleTextField(checkboxElem) {
  const textField = document.getElementById(checkboxElem.dataset.textfieldId);
  if (checkboxElem.checked) {
    textField.style.display = "block";
    textField.setAttribute("required", true);
  } else {
    textField.style.display = "none";
    textField.removeAttribute("required");
    textField.value = "";
  }
}

const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function (event) {
  //  Prevent default form submission
  event.preventDefault();

  // Extract form data
  const formData = new FormData(form);

  const subjects = []; //创建一个空数组subjects来保存选中的复选框的值
  const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked'); //遍历复选框
  checkboxes.forEach((checkbox) => {
    let subjectString = checkbox.value;
    const textFieldId = checkbox.dataset.textfieldId;
    if (textFieldId) {
      const textField = document.getElementById(textFieldId);
      if (textField.style.display !== "none" && textField.value) {
        subjectString += ` (${textField.value})`;
      }
    }
    subjects.push(subjectString);
  });

  // Create table
  let table = resultsDiv.querySelector("table");
  if (!table) {
    table = document.createElement("table");
    table.border = "1";
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Country</th>
          <th>City</th>
          <th>Address 1</th>
          <th>Address 2</th>
          <th>Zip</th>
          <th>Product</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;
    resultsDiv.appendChild(table);
  }

  const tbody = table.querySelector("tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${formData.get("name")}</td>
      <td>${formData.get("email")}</td>
      <td>${formData.get("phoneNumber")}</td>
      <td>${formData.get("country")}</td>
      <td>${formData.get("city")}</td>
      <td>${formData.get("address1")}</td>
      <td>${formData.get("address2")}</td>
      <td>${formData.get("zip")}</td>
      <td>${formData.get("career_select")} - ${subjects.join(", ")}</td>
      <td>${formData.get("comment")}</td>
  `;
  tbody.appendChild(newRow);

  function clearForm() {
    form.reset();

    const careerSelectDropdown = document.getElementById("career_select");
    careerSelectDropdown.value = careerSelectDropdown.options[0].value;
    document.getElementById("dynamic_checkboxes").innerHTML = "";
    updateCheckboxes();
  }
  clearForm();
  return false;
});

form.addEventListener("input", validate);
