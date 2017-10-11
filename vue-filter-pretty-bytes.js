;(function () {

  var prettyBytes = {}

  prettyBytes.install = function (Vue) {

    /**
     *
     * @param {number} bytes
     * @param {Number} decimal
     *
     */

    Vue.filter('prettyBytes', function (bytes, decimals) {
      if (bytes === 0) return '0 Bytes'
      const k = 1000
      const dm = decimals || 2
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
    })
  }

  if (typeof exports == "object") {
    module.exports = prettyBytes
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return prettyBytes })
  } else if (window.Vue) {
    window.prettyBytes = prettyBytes
    Vue.use(prettyBytes)
  }

})()
