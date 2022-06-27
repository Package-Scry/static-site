const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  return false
}

document.addEventListener("DOMContentLoaded", async function () {
  if (isLoggedIn === false)
    window.location.href = "https://www.packagescry.com/login"

  const elSubmitButton = document.querySelector("#submit-info")

  const period = localStorage.getItem("plan-period")

  const INPUTS = ["email", "fullname", "city", "address", "country"]
  const elInputs = INPUTS.map((input) =>
    document.querySelector(`#billing-${input}`)
  )
  const elErrors = INPUTS.map((input) =>
    document.querySelector(`#error-${input}`)
  )

  elInputs[0].addEventListener("blur", (e) => {
    if (!validateEmail(elInputs[0].value)) elInputs[0].style.color = "red"
  })
  elInputs[0].addEventListener("keyup", (e) => {
    if (validateEmail(elInputs[0].value)) elInputs[0].style.color = "black"
    if (isLoggedIn === false)
      window.location.href = "https://www.packagescry.com/login"
  })

  elInputs.map((elInput, i) => {
    elInput.addEventListener(
      "keyup",
      (e) => (elErrors[i].style.display = "none")
    )
  })
  elSubmitButton.addEventListener("click", async (e) => {
    e.preventDefault()

    elInputs.map((elInput, i) => {
      if (!elInput.value) {
        elErrors[i].style.display = "block"
      }
    })

    const hasMissingField = elInputs.some((elInput) => !elInput.value)

    if (hasMissingField || !validateEmail(elInputs[0].value)) return

    const billingDetails = {
      email: elInputs[0].value,
      name: elInputs[1].value,
      city: elInputs[2].value,
      address: elInputs[3].value,
      country: elInputs[4].value,
      period,
    }

    try {
      console.log("here")
      const response = await fetch(
        "https://package-scry.onrender.com/post/create-subscription",
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ billingDetails }),
        }
      )
      console.log("there")
      const data = await response.json()
      console.log(data)

      const { clientSecret } = data

      window.location.href = `https://www.packagescry.com/payment/?clientSecret=${clientSecret}`
    } catch (error) {
      alert("There was an error with your request")
    }
  })
})
