module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/style/_variables.scss";
          @import "@/assets/style/_global.scss";
          `
      }
    }
  }
};
