const closebtn = document.querySelector(".close-btn");
const togglebtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

togglebtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
closebtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
