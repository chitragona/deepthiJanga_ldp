document.getElementById("togglePassword").addEventListener("click", clickinOnShowPassword);
const password = document.querySelector('#password');
function clickinOnShowPassword(){
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
}