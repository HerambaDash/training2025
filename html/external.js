function extern() {
  alert("This is an external JavaScript function.");
}

function parameterizedExtern(name, age) {
  alert(
    "External function with parameter: Name: " +
      name +
      ", Age: " +
      age +
      ". Types: " +
      typeof name +
      ", " +
      typeof age
  );
}

function validateForm(event) {
  event.preventDefault();
  const user = document.getElementById("directName").value;
  if (user.length < 3) {
    document.getElementById("directerror").innerText =
      "Username must be at least 3 characters.";
    return false;
  }
  return true;
}

function handleForm(event) {
  event.preventDefault();
  const user = document.getElementById("name").value;
  if (user.length < 3) {
    document.getElementById("scripterror").innerText =
      "Username must be at least 3 characters.";
    return false;
  }
  const form = event.target;
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const age = form.elements["age"].value;
  const select = document.getElementById("cars");
  const selectedValues = [];

  for (let option of select.options) {
    if (option.selected) {
      selectedValues.push(option.value);
    }
  }

  let selectedValuesString = selectedValues.join(", ");
  //   send form to server or process it
  alert(
    "Form submitted " +
      JSON.stringify({
        name: name,
        email: email,
        age: age,
        cars: selectedValuesString,
      })
  );
}

function validateScriptForm(event) {
  event.preventDefault();
  const user = document.getElementById("name3").value;
  if (user.length < 3) {
    document.getElementById("scripterror3").innerText =
      "Username must be at least 3 characters.";
    return false;
  }
  return true;
}

function submitForm(event) {
  event.preventDefault();
  console.log("Form submitted successfully!", event);
}
