$(document).ready(function () {
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;
    return re.test(email);
  }

  function validate() {
    let isValid = true;

    // 验证电子邮箱
    const email = $("#inputEmail").val();
    if (email === "") {
      $("#emailError").text("Email cannot be empty");
      isValid = false;
    } else if (!validateEmail(email)) {
      $("#emailError").text("Must be a Northeastern email");
      isValid = false;
    } else {
      $("#emailError").text("");
    }

    // 验证用户名
    //Special Characters Check
    //Minimum and maximum length check
    const username = $("#username").val();
    if (username === "") {
      $("#usernameError").text("Username cannot be empty");
      isValid = false;
    } else if (/[^a-zA-Z0-9]/.test(username)) {
      $("#usernameError").text("Username cannot contain special characters");
      isValid = false;
    } else if (username.length < 5 || username.length > 20) {
      $("#usernameError").text("Username length must be between 5 to 20");
      isValid = false;
    } else {
      $("#usernameError").text("");
    }

    // 验证密码
    const password = $("#inputPassword").val();
    if (password === "") {
      $("#passwordError").text("Password cannot be empty");
      isValid = false;
    } else {
      $("#passwordError").text("");
    }

    // 验证确认密码
    const confirmPassword = $("#comfirmedPassword").val();
    if (confirmPassword !== password) {
      $("#confirmPasswordError").text("Passwords must match");
      isValid = false;
    } else {
      $("#confirmPasswordError").text("");
    }

    // 启用/禁用登录按钮
    $(".loginButton").prop("disabled", !isValid);

    return isValid;
  }

  // 输入框发生改变时进行验证
  // Validate on input change
  $("input").on("input", validate);

  // 提交表单时进行验证
  // Validate on form submission
  $("form").submit(function (e) {
    e.preventDefault();
    if (validate()) {
      // 重定向到第二页，携带用户名作为URL参数
      // Redirect to the second page, carrying the username as a URL parameter
      window.location.href = "PartA.html?username=" + $("#username").val();
    }
  });
});
