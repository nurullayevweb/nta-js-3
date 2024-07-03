var siteForm = document.querySelector(".form-js");
var formInput = siteForm.querySelector(".input-js");
var formSelect = siteForm.querySelector(".select-js");
var formOutput = document.querySelector(".output-js");
var formBtn = document.querySelector(".js-button");

formBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  var inputValue = Number(formInput.value);
  var selectValue = Number(formSelect.value);

  if (inputValue < 0) {
    alert("chetroqda o'ynang...")
  }
  else {
    var uzbSum = inputValue * selectValue;

    formOutput.textContent = `${uzbSum}`;
  }
});