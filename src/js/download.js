document.addEventListener("DOMContentLoaded", async function () {
  const elMacButton = document.querySelector("#mac-button")
  const elWinButton = document.querySelector("#win-button")

  const response = await fetch("https://package-scry.herokuapp.com/latest")
  const data = await response.json()

  if (!data) return

  const {
    url: { mac },
  } = data

  elMacButton.setAttribute("href", mac)
})
