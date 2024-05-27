const logger = (function () {
  return {
    title: function (message, newline = true) {
      let format = '\x1b[36m%s\x1b[0m';
      if (newline) format = '\n' + format;
      console.log(format, message);
    },
  };
})();

module.exports = logger;
