const formEl = document.querySelector(".login-form");
const inputEl = document.querySelectorAll("input");

const handleFormSubmit = (event) => {
  event.preventDefault();

  for (let el of inputEl) {
    if (el.value === "") {
      alert("Bсі поля форми повинні бути заповнені.");
      return;
    }
  }
  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };
  console.log(formData);
  formEl.reset();
};

formEl.addEventListener("submit", handleFormSubmit);
