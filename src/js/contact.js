document.addEventListener("DOMContentLoaded", async function () {
  const elRadios = document.querySelectorAll("#contact-radios input");
  const elTextArea = document.querySelector("#contact-text");
  const elButton = document.querySelector("#contact .primary");
  let activeType = "feedback";
  let inputValue = "";

  elRadios.forEach((elRadio) => {
    elRadio.addEventListener("change", (e) => {
      activeType = e.target.value;
    });
  });

  elTextArea.addEventListener("change", (e) => {
    inputValue = e.target.value;
  });

  elButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://package-scry.herokuapp.com/post/contact",
      {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: { type: activeType, text: inputValue },
      }
    );

    const data = await response.json();
    const { status } = data;

    elContent = document.querySelector("#content");

    elContent.innerHTML =
      status === "success"
        ? `${
            activeType[0].toUpperCase() + activeType.slice(1)
          } successfully sent.`
        : `There was some issue with your ${
            activeType[0].toUpperCase() + activeType.slice(1)
          }`;
  });
});
