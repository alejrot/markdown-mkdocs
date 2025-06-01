var consent = __md_get("__consent")
console.log(consent)
if (consent && consent.custom) {
  /* The user accepted the cookie */
  console.log("Cookies aceptadas!")
} else {
  /* The user rejected the cookie */
  console.log("Cookies rechazadas")
}
