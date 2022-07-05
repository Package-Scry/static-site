document.addEventListener("DOMContentLoaded", async function () {
  const elButtonMonthly = document.querySelector(".button-monthly")
  const elButtonAnnual = document.querySelector(".button-annual")

  const redirectToCheckout = async (period) => {
    if (isLoggedIn === false)
      window.location.href = "https://www.packagescry.com/login"

    try {
      const response = await fetch(
        "https://package-scry.herokuapp.com/post/checkout",
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ period }),
        }
      )

      const data = await response.json()
      const { checkoutURL } = data

      window.location.href = checkoutURL
    } catch (error) {
      alert("There was an error with your request")
    }
  }

  elButtonMonthly.addEventListener("click", async (e) => {
    e.preventDefault()

    await redirectToCheckout("monthly")
  })

  elButtonAnnual.addEventListener("click", async (e) => {
    e.preventDefault()

    await redirectToCheckout("annual")
  })
})
