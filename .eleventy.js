const HtmlMin = require("html-minifier")
const ErrorOverlay = require("eleventy-plugin-error-overlay")

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "node_modules/socket.io-client/dist/socket.io.js": "assets/socket.io.js",
  })
  eleventyConfig.setTemplateFormats(["md", "css"])
  eleventyConfig.addPassthroughCopy("src/js")
  eleventyConfig.addPassthroughCopy("src/img")
  eleventyConfig.addPlugin(ErrorOverlay)
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      return HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })
    }

    return content
  })

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_templates",
      data: "_data",
    },
    jsDataFileSuffix: ".data",
    passthroughFileCopy: true,
  }
}
