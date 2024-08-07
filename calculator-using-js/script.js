document.addEventListener("DOMContentLoaded", function () {
  const screen = document.querySelector(".calculator-screen");
  let calculation = "";

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const buttonValue = button.value;

      if (buttonValue === "clear") {
        calculation = "";
      } else if (buttonValue === "=") {
        try {
          calculation = eval(calculation) || "";
        } catch {
          calculation = "Error";
        }
      } else {
        calculation += buttonValue;
      }

      screen.value = calculation;
    });
  });
});
