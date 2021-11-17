// Pages
document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
      document.querySelector('.front-page').style.display = 'block'
      document.querySelector('.login-page').style.display = 'none'
      document.querySelector('.signup-page').style.display = 'none'
  })
})

document.querySelectorAll('.login').forEach(loginBtn => {
  loginBtn.addEventListener('click', () => {
      document.querySelector('.front-page').style.display = 'none'
      document.querySelector('.login-page').style.display = 'block'
      document.querySelector('.signup-page').style.display = 'none'
  })
})

document.querySelectorAll('.signup').forEach(signupBtn => {
  signupBtn.addEventListener('click', () => {
      document.querySelector('.front-page').style.display = 'none'
      document.querySelector('.login-page').style.display = 'none'
      document.querySelector('.signup-page').style.display = 'flex'
  })
})
// End of Pages



window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
