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
          plan_id: "P-08M01446T6400792GMISSL6Q",
        });
      },
      onApprove: function (data, actions) {
        alert(`ASD  ${data.subscriptionID}`); // You can add optional success message for the subscriber here
      },
    })
    .render("#paypal-button-container-P-08M01446T6400792GMISSL6Q"); // Renders the PayPal button
});
