export function mix(rgb,rgb2,percent, ...otherrgbs) {
    let _return = false
    rgb.forEach((f) => {
      if (typeof f !== "number") _return = true
    })
    rgb2.forEach((f) => {
      if (typeof f !== "number") _return = true
    })
    if (rgb.length !== 3 || rgb2.length !== 3) _return = true
    if (_return) throw new Error("Bad rgbs")
    var newrgb = rgb.map((c,i) => {
      return c = rgb2[i]*percent+c*(1-percent) 
    })
    otherrgbs.forEach((rgb,i) => {
      mix(rgb,otherrgbs[i],percent)
    })
    return newrgb
  }
