  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Corona Vaccination Checkup</title>
  </head>
  <body>
    <div class="main">
      <div class="qtn">
        <h2>Corona Vaccination Check</h2>
        <form action="" id="form">
          <p>
            <label for="age">Age</label>
            <input type="text" name="age" id="age" />
          </p>
          <p>
            <label for="vaccinated">Vaccinated?</label>
            <select name="vaccinated" id="vaccinate">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </p>
          <p class="hide" id="hide">
            <label for="dose">Dosage Type</label>
            <select name="dose" id="dose">
              <option value="Single">Single</option>
              <option value="Double">Double</option>
            </select>
          </p>
        </form>
        <p id="result"></p>
      </div>
    </div>
    <script src="index.js"></script>
  </body>

  <style>
      @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Noto Sans", "Courier New", Courier, monospace;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://www.statnews.com/wp-content/uploads/2021/03/AdobeStock_410521768-645x645.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.hide {
  display: none;
}

#form {
  margin: 25px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
}

#result,
h2 {
  border: 1px solid #ddd;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
}

p {
  padding: 10px;
}
</style>

<script>
    form.oninput = function vacCheck() {
  let age = document.getElementById("age").value;
  let vaccinate = document.getElementById("vaccinate").value;
  let dose = document.getElementById("dose").value;
  let hide = document.getElementById("hide");
  let result = document.getElementById("result");

  //   console.log("age", age);
  //   console.log("vaccinate", vaccinate);
  //   console.log("dose", dose);
  //   console.log("hide", hide);

  //   if (vaccinate === "Yes") {
  //     hide.style.display = "block";
  //   } else {
  //     hide.style.display = "none";
  //   }

  age >= 16 && vaccinate === "Yes"
    ? (hide.style.display = "block")
    : (hide.style.display = "none");

  //   dose === "Single"
  //     ? (result.innerText = "Please complete the vaccination dosage")
  //     : (result.innerText = "You are safe! Thank you!");

  age >= 16 && vaccinate === "No"
    ? (result.innerText = "Please visit your nearest vaccination center ASAP!")
    : (result.innerText = "You are safe! Thank you!");

//   age < 16 && vaccinate === "No"
//     ? (result.innerText = "You are not eligible for vaccination")
//     : (result.innerText = "Stay at home don't go near school :)");
};
