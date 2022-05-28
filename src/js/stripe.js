document.addEventListener("DOMContentLoaded", async function () {
  const stripe = Stripe(
    "pk_test_51KsYyOEbki2GiZihyyYL0uUx078EH5PKBT8x6FHKZfEpbM4jaFctMRO7MooVsYFKeQq73kzu8GBZXihSzX0A0ycf00pO7izHP1"
  )
  const options = {
    clientSecret: "{{CLIENT_SECRET}}",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  }
  // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 5
  const elements = stripe.elements(options)
  // Create and mount the Payment Element
  const paymentElement = elements.create("payment")
  paymentElement.mount("#payment-element")
})
