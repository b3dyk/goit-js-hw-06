const loginFormRef = document.querySelector(".login-form");

loginFormRef.addEventListener("submit", (event) => {
  event.preventDefault();

  // 1-й варіант виконання (по умовам)=================================================
  const { email, password } = event.target.elements;
  const dataToSend = {};

  switch ("") {
    case email.value:
      email.style.border = "2px solid red";
      alert("Будь ласка, введіть email");
      break;

    case password.value:
      password.style.border = "2px solid red";
      alert("Будь ласка, введіть пароль");
      break;

    default:
      email.style.border = "1px solid black";
      password.style.border = "1px solid black";

      dataToSend[email.name] = email.value;
      dataToSend[password.name] = password.value;

      console.log(dataToSend);

      loginFormRef.reset();
  }

  // 2-й варіант виконання==============================================================
  //   const form = event.target;
  //   const formData = new FormData(form);
  //   const dataToSend = {};

  //   if (form.email.value === "" || form.password.value === "") {
  //     alert("Будь ласка заповніть всі поля");
  //   }

  //   formData.forEach((value, key) => {
  //     dataToSend[key] = value;
  //   });

  //   console.log(dataToSend);

  //   loginFormRef.reset();

  // ================================================================================
});
