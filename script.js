// JavaScript para la navegaci�n de la p�ginadocument.addEventListener("DOMContentLoaded", function () {    const navItems = document.querySelectorAll("nav ul li");    navItems.forEach(item => {        item.addEventListener("click", function () {            navItems.forEach(navItem => {                navItem.classList.remove("active");            });            item.classList.add("active");        });    });});