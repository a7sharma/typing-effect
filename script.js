
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["project", "fun", "free stuff",
"tutorial"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;
function type() {
if (charIndex < textArray[textArrayIndex].length) {
if(!cursorSpan.contains("typing"))
cursorSpan.add("typing");
typedTextSpan.textcontent +=
textArray[textArrayIndex].charAt(charIndex);
charIndex++;
setTimeout(type, typingDelay);
}
else {
cursorspan.classList.remove("typing");
setTimeout(erase, newTextDelay);
}
}
function erase() {
  if (charIndex > 0) {
  if(!cursorSpan.classList.contains("typing"))
  cursorSpan.add("typing");
  typedTextSpan.textcontent =
  textArray[textArrayIndex].substring(0, charIndex-1);
  charIndex--;
  setTimeout(erase, erasingDelay);
  }
  else {
  cursorSpan.classList.remove("typing");
  textArrayIndex++;
  if(textArrayIndex>=textArray.length) textArrayIndex=0;
  setTimeout(type, typingDelay + 1100);
  }
  }
  document.addEventListener("DOMContentLoaded", function() {
  // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
  });
  