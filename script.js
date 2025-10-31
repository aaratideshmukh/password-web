const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", () => {
  const val = password.value;
  let strength = 0;

  if (val.length > 6) strength++;
  if (val.match(/[a-z]+/)) strength++;
  if (val.match(/[A-Z]+/)) strength++;
  if (val.match(/[0-9]+/)) strength++;
  if (val.match(/[$@#&!]+/)) strength++;

  switch (strength) {
    case 0:
      strengthBar.style.width = "0";
      strengthText.textContent = "";
      break;
    case 1:
      strengthBar.style.width = "20%";
      strengthBar.style.background = "red";
      strengthText.textContent = "Very Weak";
      strengthText.style.color = "red";
      break;
    case 2:
      strengthBar.style.width = "40%";
      strengthBar.style.background = "orange";
      strengthText.textContent = "Weak";
      strengthText.style.color = "orange";
      break;
    case 3:
      strengthBar.style.width = "60%";
      strengthBar.style.background = "yellow";
      strengthText.textContent = "Moderate";
      strengthText.style.color = "goldenrod";
      break;
    case 4:
      strengthBar.style.width = "80%";
      strengthBar.style.background = "lightgreen";
      strengthText.textContent = "Strong";
      strengthText.style.color = "green";
      break;
    case 5:
      strengthBar.style.width = "100%";
      strengthBar.style.background = "green";
      strengthText.textContent = "Very Strong";
      strengthText.style.color = "darkgreen";
      break;
  }
});
