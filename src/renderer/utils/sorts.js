export function sortNumber (a, b) {
  const aFloat = parseFloat(a)
  const bFloat = parseFloat(b)
  if (aFloat > bFloat) {
    return 1
  } else if (aFloat < bFloat) {
    return -1
  } else {
    return 0
  }
}
