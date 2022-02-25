const toggleBtn = document.querySelector('.toggle-btn');
const navbarList = document.querySelector('.nav-links-container');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navbarList.classList.toggle('active');
});

const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
  if (scrollY > 81) {
    navbar.style.backgroundColor = `var(--primary-color)`;
  } else {
    navbar.style.backgroundColor = `transparent`;
  }
});

const navItems = [...document.querySelectorAll('.link')];

navItems.map((item) => {
  item.addEventListener('click', () => {
    navItems.map((ele) => ele.classList.remove('active'));
    item.classList.add('active');
  });
});
