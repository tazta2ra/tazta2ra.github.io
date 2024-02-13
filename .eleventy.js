module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/_data");

    return {
        dir: {
          input: "src",
          output: "public"
        }
      };
}