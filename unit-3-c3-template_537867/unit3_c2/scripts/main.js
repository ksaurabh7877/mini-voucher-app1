


document.querySelector("#form").addEventListener("submit", myFormSubmit);

var signupArr = JSON.parse(localStorage.getItem("user")) || [];
function myFormSubmit() {
  event.preventDefault();
  var signupObj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    address: document.querySelector("#address").value,
    amount: document.querySelector("#amount").value,
  };
  
  signupArr.push(signupObj);
  console.log(signupArr);
  localStorage.setItem("user", JSON.stringify(signupArr));

  document
    .querySelector("input[type='submit']")
    .addEventListener("click", function () {
      window.location.href = "voucher.html";
    });
}