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
          plan_id: "P-997293991G0878045MH2VTKY",
        });
      },
      onApprove: function (data, actions) {
        alert(`ASD  ${data.subscriptionID}`); // You can add optional success message for the subscriber here
      },
    })
    .render("#paypal-button-container-P-997293991G0878045MH2VTKY"); // Renders the PayPal button
});
