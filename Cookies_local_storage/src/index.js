document.getElementById("myForm").addEventListener("submit",setCookies);


function setCookies(event){
    event.preventDefault();
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;

    console.log("email",email);
}