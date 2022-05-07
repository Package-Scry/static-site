document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch("https://ps-auth.netlify.app/subscriptions", {
    credentials: "include",
  })

  const data = await response.json()
  const { subscription } = data
  const elInfo = document.querySelector("#plan-info")

  if (subscription) {
    const { id, type, timeperiod, price } = subscription
    const capitalizeString = (string) =>
      string[0].toUpperCase() + string.slice(1)
    const planName = `${capitalizeString(timeperiod)} ${capitalizeString(
      type
    )} Plan`
    const infoHTML = `<h2 id="plan-name">${planName}</h2><span id="plan-price">(${price} ${
      timeperiod === "annual" ? "per year" : "per month"
    })</span><a class="button danger" href="/cancel">Cancel Subscription</a>`

    elInfo.innerHTML = infoHTML
  } else elInfo.innerHTML = `<div id="no-plan">You don't have any subscriptions</div>`
})
