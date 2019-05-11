function a() {
    this.classList.toggle('active');
    this.classList.toggle('inactive');
}
document.querySelector('#btn').addEventListener("click", a )


x = document.querySelector("navbar").getElementsByTagName("a");
function toggle() {
    if (document.querySelector('#btn').addEventListener("click")) {
        x.classList += "active";
    }
}