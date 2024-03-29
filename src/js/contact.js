document.addEventListener("DOMContentLoaded", async function () {
  if (isLoggedIn === false)
    window.location.href = "https://www.packagescry.com/login"

  const elRadios = document.querySelectorAll("#contact-radios input")
  const elTextArea = document.querySelector("#contact-text")
  const elButton = document.querySelector("#contact .primary")
  let activeType = "feedback"
  let inputValue = ""

  elRadios.forEach(elRadio => {
    elRadio.addEventListener("change", e => {
      activeType = e.target.value
    })
  })

  elTextArea.addEventListener("change", e => {
    inputValue = e.target.value
  })

  elButton.addEventListener("click", async e => {
    e.preventDefault()

    try {
      const response = await fetch(
        "https://0auth-production.up.railway.app/post/contact",
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ type: activeType, text: inputValue }),
        }
      )

      const data = await response.json()
      const { status } = data

      elContent = document.querySelector("#content")

      elContent.innerHTML =
        status === "success"
          ? `${activeType[0].toUpperCase() + activeType.slice(1)} ${
              activeType === "payment" ? "issue" : ""
            } successfully sent.`
          : `There was some issue with your ${
              activeType[0].toUpperCase() + activeType.slice(1)
            }`
    } catch (error) {
      alert("There was an error with your request")
    }
  })
})
