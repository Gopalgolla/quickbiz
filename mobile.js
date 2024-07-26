document.getElementById('get-started-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;

    if (validateMobileNumber(mobileNumber)) {
        alert(`Mobile number ${mobileNumber} is valid. Proceeding to get started...`);
        // You can add additional code here to handle the form submission, such as sending data to the server
    } else {
        alert('Please enter a valid mobile number.');
    }
});

function validateMobileNumber(mobileNumber) {
    const regex = [0-9];
    return regex.test(mobileNumber);
}
if (mobile-number === '') {
    errorMessage.textContent = 'Please fill out both fields.';}
else if(username =="[0-9]"){
    errorMessage.textContent = '';
    window.location.href = "index.html";
}
