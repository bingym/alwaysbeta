export function humanSize(value) {
    if (!value){
        return ''
    }
    let buf = value / 1024
    if (buf < 1024) {
        return `${buf.toFixed(2)}KB`
    } else {
        buf = buf / 1024
        return `${buf.toFixed(2)}MB`
    }
}
