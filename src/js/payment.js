const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  return false
}

document.addEventListener("DOMContentLoaded", async function () {
  const elSubmitButton = document.querySelector("#submit-info")

  const period = localStorage.getItem("plan-period")

  const elEmail = document.querySelector("#billing-email")
  const elFullname = document.querySelector("#billing-fullname")
  const elAddress = document.querySelector("#billing-address")
  const elCountry = document.querySelector("#billing-country")

  elEmail.addEventListener("blur", (e) => {
    if (!validateEmail(elEmail.value)) elEmail.style.color = "red"
  })
  elEmail.addEventListener("keyup", (e) => {
    if (validateEmail(elEmail.value)) elEmail.style.color = "black"
  })

  elSubmitButton.addEventListener("click", async (e) => {
    e.preventDefault()

    const input = {
      email: elEmail.value,
      fullname: elFullname.value,
      address: elAddress.value,
      country: elCountry.value,
      period,
    }

    await fetch("https://package-scry.onrender.com/post/create-subscription", {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ input }),
    })
  })
})
