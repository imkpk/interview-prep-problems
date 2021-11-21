function createButtons() {
  for (let i = 0; i <= 5; i++) {
    let body = document.getElementsByTagName("BODY");
    let button = document.createElement("button");
    button.innerHTML = "Button " + i;
    (function (num) {
      button.onclick = function () {
        alert("You clicked button " + num);
      };
    })(i);

    body.appendChild(button);
  }
}
createButtons();
