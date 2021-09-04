document.addEventListener("DOMContentLoaded", async function () {
  paypal_sdk
    .Buttons({
      style: {
        shape: "rect",
        color: "gold",
        layout: "vertical",
        label: "subscribe",
      },
      createSubscription: function (data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: "P-0850211716571061WMEZTOWA",
        });
      },
      onApprove: function (data, actions) {
        alert(`ASD  ${data.subscriptionID}`); // You can add optional success message for the subscriber here
      },
    })
    .render("#paypal-button-container-P-0850211716571061WMEZTOWA"); // Renders the PayPal button
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
    const capitalizeString = (string) =>
      string[0].toUpperCase() + string.slice(1);
    const planName = `${capitalizeString(timeperiod)} ${capitalizeString(
      type
    )} Plan`;
    const infoHTML = `<h2 id="plan-name">${planName}</h2><span id="plan-price">(${price} ${
      timeperiod === "annual" ? "per year" : "per month"
    })</span><a class="button danger" href="/cancel">Cancel Subscription</a>`;

    elInfo.innerHTML = infoHTML;
  } else elInfo.innerHTML = `<div id="no-plan">You don't have any subscriptions</div>`;
});
