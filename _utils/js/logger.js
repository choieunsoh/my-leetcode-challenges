const logger = (function () {
  const Colors = {
    BLACK: 30,
    RED: 31,
    GREEN: 32,
    YELLOW: 33,
    BLUE: 34,
    MAGENTA: 35,
    CYAN: 36,
    WHITE: 37,
    GRAY: 90,
  };
  const BackgroundColors = {
    BLACK: 40,
    RED: 41,
    GREEN: 42,
    YELLOW: 43,
    BLUE: 44,
    MAGENTA: 45,
    CYAN: 46,
    WHITE: 47,
    GRAY: 100,
  };

  function colorFormat(colorNum = Colors.CYAN, newline = false) {
    let format = `\x1b[${colorNum}m%s\x1b[0m`;
    return newline ? '\n' + format : format;
  }

  function print(colorNum, message, newline) {
    const format = colorFormat(colorNum, newline);
    console.log(format, message);
  }

  return {
    topic: function (message) {
      print(Colors.YELLOW, message, false);
    },
    title: function (message) {
      print(Colors.CYAN, message, true);
    },
    log: function (message) {
      print(Colors.WHITE, `${message}`, false);
    },
    error: function (err) {
      print(Colors.RED, `[ERR] ${err.message}`, false);
    },

    red: function (message, newline = false) {
      print(Colors.RED, message, newline);
    },
    green: function (message, newline = false) {
      print(Colors.GREEN, message, newline);
    },
    yellow: function (message, newline = false) {
      print(Colors.YELLOW, message, newline);
    },
    blue: function (message, newline = false) {
      print(Colors.BLUE, message, newline);
    },
    magenta: function (message, newline = false) {
      print(Colors.MAGENTA, message, newline);
    },
    cyan: function (message, newline = false) {
      print(Colors.CYAN, message, newline);
    },
    black: function (message, newline = false) {
      print(Colors.BLACK, message, newline);
    },
    gray: function (message, newline = false) {
      print(Colors.GRAY, message, newline);
    },
    white: function (message, newline = false) {
      print(Colors.WHITE, message, newline);
    },
  };
})();

module.exports = logger;
