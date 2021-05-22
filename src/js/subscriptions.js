document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch(
    "https://package-scry.herokuapp.com/subscriptions",
    {
      credentials: "include",
    }
  );

  const data = await response.json();
  const { subscription } = data;
  const elInfo = document.querySelector("#plan-info");

  if (subscription) {
    const { id, type, timeperiod, price } = subscription;
    const infoHTML = `<h2 id="plan-name">${timeperiod} ${type} plan</h2><span id="plan-price">(${price} ${
      timeperiod === "annual" ? "per year" : "per month"
    })</span><a class="button danger" href="/cancel">Cancel Subscription</a>`;

    elInfo.innerHTML = infoHTML
  } else elInfo.innerHTML = `<div id="no-plan">You don't have any subscriptions</div>`
});
