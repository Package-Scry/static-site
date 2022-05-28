const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  return false
}

document.addEventListener("DOMContentLoaded", async function () {
  const elSubmitButton = document.querySelector("#submit-info")

  const period = localStorage.getItem("plan-period")

  const INPUTS = ["email", "fullname", "address", "country"]
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

    const input = {
      email: elInputs[0].value,
      fullname: elInputs[1].value,
      address: elInputs[2].value,
      country: elInputs[3].value,
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
