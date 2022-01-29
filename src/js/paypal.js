document.addEventListener("DOMContentLoaded", async function () {
  console.log("paypal");
  console.log(paypal);
  paypal
    .Buttons({
      style: {
        shape: "rect",
        color: "gold",
        layout: "horizontal",
        label: "subscribe",
      },
      createSubscription: function (data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: "P-0MM96375AE299090JMH2V2WI",
        });
      },
      onApprove: function (data, actions) {
        alert(`ASD  ${data.subscriptionID}`); // You can add optional success message for the subscriber here
      },
    })
    .render("#paypal-button-container-P-0MM96375AE299090JMH2V2WI"); // Renders the PayPal button
});
