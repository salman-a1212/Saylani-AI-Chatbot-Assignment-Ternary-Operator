// // Javascript code to implement
// // ternary operator

// // Function to implement
// // ternary operator without
// // conditional statements
// function ternaryOperator(a, b, c) {
//   // If a is true,
//   // we return (1 * b) + (!1 * c) i.e. b
//   // If a is false,
//   // we return (!1 * b) + (1 * c) i.e. c

//   return !!a * b + !a * c;
// }

// // Driver code
// let a = 1,
//   b = 10,
//   c = 20;
// // Function call to output b or c depending on a
// document.write(ternaryOperator(a, b, c) + "<br>");

// a = 0;
// // Function call to output b or c depending on a
// document.write(ternaryOperator(a, b, c) + "<br>");

// // This code is contributed by avanitrachhadiya2155

form.oninput = function vacCheck() {
  let age = document.getElementById("age").value;
  let vaccinate = document.getElementById("vaccinate").value;
  let dose = document.getElementById("dose").value;
  let hide = document.getElementById("hide").value;

  //   console.log("age", age);
  console.log("vaccinate", vaccinate);
  //   console.log("dose", dose);
  //   console.log("hide", hide);

  vaccinate = "Yes" ? "madarchod" : "bhenchod";
  console.log("vaccinate", vaccinate);
};
