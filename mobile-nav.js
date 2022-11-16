const checkBtn = document.getElementById('checkbtn');

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

checkBtn.addEventListener('click', toggleMenu);






