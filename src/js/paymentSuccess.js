document.addEventListener("DOMContentLoaded", async function () {
  if (isLoggedIn === false)
    window.location.href = "https://www.packagescry.com/login"

  const HOST = "https://package-scry.herokuapp.com"

  try {
    const response = await fetch("https://package-scry.herokuapp.com/user", {
      credentials: "include",
    })

    const data = await response.json()

    const { user } = data
    const idUser = user?.id

    const socket = io(HOST, {
      origin: "site",
      idUser,
    })

    socket.on("connect", () => {
      console.log(`Socket ${socket.id} connected`)
    })

    socket.on(`planUpdated${idUser}`, () => {
      console.log("GOT EVENT TO REFRESH")
      socket.disconnect()
    })
  } catch (error) {
    alert("There was an error with your request")
  }
})
