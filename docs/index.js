form.oninput = function vacCheck() {
  let age = document.getElementById("age").value;
  let vaccinate = document.getElementById("vaccinate").value;
  let dose = document.getElementById("dose").value;
  let hide = document.getElementById("hide");
  let result = document.getElementById("result");

  age >= 16 && vaccinate === "Yes"
    ? (hide.style.display = "block")
    : (hide.style.display = "none");

  age >= 16 && vaccinate === "No"
    ? (result.innerText = "Please visit your nearest vaccination center ASAP!")
    : (result.innerText = "You are not eligible for vaccination");
};
