// NAVBAR FIX
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// HAMBURGER
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// KLIK DILUAR HAMBURGER
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// DARK MODE TOGGLE
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// pindahkan toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

const btn_my_project = document.querySelector("#btn-my-project");
const btn_team_project = document.querySelector("#btn-team-project");
const sec_my_project = document.querySelector("#my-project");
const sec_team_project = document.querySelector("#team-project");

sec_team_project.classList.add("hidden");
btn_my_project.classList.add("bg-slate-200");
btn_my_project.classList.add("text-indigo-900");
btn_team_project.classList.add("bg-dark");
btn_team_project.classList.add("text-white");

btn_my_project.addEventListener("click", function () {
  sec_my_project.classList.remove("hidden");
  sec_team_project.classList.add("hidden");

  btn_my_project.classList.remove("bg-dark");
  btn_my_project.classList.remove("text-white");
  btn_my_project.classList.add("bg-slate-200");
  btn_my_project.classList.add("text-indigo-900");

  btn_team_project.classList.add("bg-dark");
  btn_team_project.classList.add("text-white");
  btn_team_project.classList.remove("bg-slate-200");
  btn_team_project.classList.remove("text-indigo-900");
});

btn_team_project.addEventListener("click", function () {
  sec_my_project.classList.add("hidden");
  sec_team_project.classList.remove("hidden");

  btn_my_project.classList.remove("bg-slate-200");
  btn_my_project.classList.remove("text-indigo-900");
  btn_my_project.classList.add("bg-dark");
  btn_my_project.classList.add("text-white");

  btn_team_project.classList.remove("bg-dark");
  btn_team_project.classList.remove("text-white");
  btn_team_project.classList.add("bg-slate-200");
  btn_team_project.classList.add("text-indigo-900");
});


