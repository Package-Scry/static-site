const { default: axios } = require("axios")

module.exports = async () => {
  try {
    const res = await axios.get(
      "https://strapi-backend-production-4ffb.up.railway.app/posts"
    )
    const posts = res.data.map((post, i) => ({
      ...post,
      intro: `${post.text.slice(0, 500)}${post.text.length > 500 ? "..." : ""}`,
      createdAt: new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }))

    return [...posts]
  } catch (error) {
    console.error(error)
  }
}
