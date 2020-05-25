
function body(browser) {
  if (browser.matches) { // If media query matches
    document.body.style.padding = "10px";
  } else if (abrowser.matches) { // If media query matches
    document.body.style.padding = "12.5px";
    } else if (bbrowser.matches) { // If media query matches
    document.body.style.padding = "15px";
    } else if (cbrowser.matches) { // If media query matches
    document.body.style.padding = "17.5px";
    } else if (dbrowser.matches) { // If media query matches
    document.body.style.padding = "20px";
    } else if (ebrowser.matches) { // If media query matches
    document.body.style.padding = "22.5px";
    }  else { // If media query matches
    document.body.style.padding = "25px";
    } 
}

let browser = window.matchMedia("(max-width: 320px)")
body(browser) // Call listener function at run time
browser.addListener(body) // Attach listener function on state changes

let abrowser = window.matchMedia("(max-width: 480px)")
body(abrowser) // Call listener function at run time
abrowser.addListener(body) // Attach listener function on state changes

let bbrowser = window.matchMedia("(max-width: 640px)")
body(bbrowser) // Call listener function at run time
bbrowser.addListener(body) // Attach listener function on state changes

let cbrowser = window.matchMedia("(max-width: 768px)")
body(cbrowser) // Call listener function at run time
cbrowser.addListener(body) // Attach listener function on state changes

let dbrowser = window.matchMedia("(max-width: 960px)")
body(dbrowser) // Call listener function at run time
dbrowser.addListener(body) // Attach listener function on state changes

let ebrowser = window.matchMedia("(max-width: 1280px)")
body(ebrowser) // Call listener function at run time
ebrowser.addListener(body) // Attach listener function on state changes

let fbrowser = window.matchMedia("(min-width: 1280px)")
body(fbrowser) // Call listener function at run time
fbrowser.addListener(body) // Attach listener function on state changes

