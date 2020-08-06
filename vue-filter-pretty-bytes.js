;(function () {

  var prettyBytes = {}

  prettyBytes.install = function (Vue) {

    /**
     *
     * @param {Number} bytes
     * @param {Number} decimals
     * @param {Boolean} kib
     * @param {String} maxunit
     *
     */

     Vue.filter('prettyBytes', function (bytes, decimals, kib, maxunit) {
       kib = kib || false
       if (bytes === 0) return '0 Bytes'
       if (isNaN(parseFloat(bytes)) && !isFinite(bytes)) return 'Not an number'
       const k = kib ? 1024 : 1000
       const dm = decimals != null && !isNaN(decimals) && decimals >= 0 ? decimals : 2
       const sizes = kib ? ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB', 'BiB'] : ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB']
       var i = Math.floor(Math.log(bytes) / Math.log(k))
       if (maxunit != undefined) {
         const index = sizes.indexOf(maxunit)
         if (index != -1) i = index
       }
       return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
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
