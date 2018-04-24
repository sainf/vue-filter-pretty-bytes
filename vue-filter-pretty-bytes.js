;(function () {

  var prettyBytes = {}

  prettyBytes.install = function (Vue) {

    /**
     *
     * @param {Number} bytes
     * @param {Number} decimal
     * @param {Boolean} kib
     *
     */

     Vue.filter('prettyBytes', function (bytes, decimals, kib) {
       kib = kib || false
       if (bytes === 0) return '0 Bytes'
       if (isNaN(parseFloat(bytes)) && !isFinite(bytes)) return 'Not an number'
       const k = kib ? 1024 : 1000
       const dm = decimals || 2
       const sizes = kib ? ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] : ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
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
