function signupClicked(e){
    const topHeading = document.querySelector(".inner-container h1");
    const signinBtn = document.querySelector(".signin");
    const otherContent = document.querySelector(".other-content");
    const btnLinksText = document.querySelectorAll(".signin-text span");
    const signupInput = document.querySelectorAll(".signup-input");
    e.classList.remove("unactive");
    signinBtn.classList.add("unactive");

    topHeading.innerHTML = "Create your account";
    otherContent.classList.add("other-content-display");


   Array.from(btnLinksText).map((btnEl)=>{
     btnEl.innerHTML = "Sign up";
    });

    Array.from(signupInput).map((inputEl)=>{
        inputEl.classList.remove("signup-input-display");
       });

}

function signinClicked(e){
    const signupBtn = document.querySelector(".signup");
    const topHeading = document.querySelector(".inner-container h1");
    const otherContent = document.querySelector(".other-content");
    const btnLinksText = document.querySelectorAll(".signin-text span");
    const signupInput = document.querySelectorAll(".signup-input");


    e.classList.remove("unactive");
    signupBtn.classList.add("unactive");
    topHeading.innerHTML = "Sign in to your account";
    otherContent.classList.remove("other-content-display");

    Array.from(btnLinksText).map((btnEl)=>{
        btnEl.innerHTML = "Sign in";
       });

 Array.from(signupInput).map((inputEl)=>{
        inputEl.classList.add("signup-input-display");
       });

}