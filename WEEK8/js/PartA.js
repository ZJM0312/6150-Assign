$(document).ready(function () {
  // 解析URL参数
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const username = getQueryParam("username");
  if (username) {
    $("#usernameDisplay").text(username);
  }

  const isValidNumber = (num) => {
    return num !== "" && !isNaN(num) && isFinite(num);
  };

  const calculate = (operation) => {
    const num1 = $("#num1").val().trim();
    const num2 = $("#num2").val().trim();

    $("#error1").text("");
    $("#error2").text("");

    let valid1 = isValidNumber(num1);
    let valid2 = isValidNumber(num2);

    if (!valid1 || !valid2) {
      if (!valid1) {
        $("#error1").text("Please enter a valid number.");
      }
      if (!valid2) {
        $("#error2").text("Please enter a valid number.");
      }
      return;
    }

    let result;
    switch (operation) {
      case "add":
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case "subtract":
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case "multiply":
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case "divide":
        if (num2 == 0) {
          $("#error2").text("Cannot divide by zero.");
          return;
        }
        result = parseFloat(num1) / parseFloat(num2);
        break;
    }

    $("#result").val(result);
  };

  $("#addBtn").click(() => calculate("add"));
  $("#subBtn").click(() => calculate("subtract"));
  $("#mulBtn").click(() => calculate("multiply"));
  $("#divBtn").click(() => calculate("divide"));
});
