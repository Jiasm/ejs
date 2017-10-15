let open = '<%'
let close = '%>'

module.exports = {
  render (str) {
    let buf = 'let buf = [];'
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(open) >= 0) {
        let start = str.indexOf(open) + open.length
        let end = str.indexOf(close, start)

        buf += `buf.push('${str.slice(0, start - open.length).trim()}');`

        let js = str.slice(start, end).trim()
        let prefix = ''
        let postfix = ''

        if (/^=/.test(js)) {
          prefix = 'buf.push('

          js = js.substring(1).trim()

          postfix = ');'
        }

        buf += `${prefix}${js}${postfix}`

        i = end
        str = str.slice(end + close.length)
      }
    }

    buf += `return buf.join('')`

    buf.replace(/\\/, '\\\\')

    return buf
  }
}
