const showFormRadio = document.getElementById('show-form');
const hideFormRadio = document.getElementById('hide-form');
const formContainer = document.getElementById('form-container');

showFormRadio.addEventListener('click', () => {
  formContainer.style.display = 'block';
});

hideFormRadio.addEventListener('click', () => {
  formContainer.style.display = 'none';
});






// let redirect_Page = () => {
//   let clic = document.getElementById("loginbtn") 
  
//   let tID = setTimeout(function () {
//       window.location.href = "C:\Users\shiva\OneDrive\Desktop\CheckOutPage\orderSuccessPage.html";
//       window.clearTimeout(tID);		// clear time out.
//   }, 2000);
// }
