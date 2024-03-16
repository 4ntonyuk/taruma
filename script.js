const canvas = document.querySelector("#canvas");


const headerOffset = Number(getComputedStyle(document.documentElement)
                    .getPropertyValue("--header-offset")
                    .replace("px", ""));

const headerElementSize = Number(getComputedStyle(document.documentElement)
                          .getPropertyValue("--header-element-size")
                          .replace("px", ""));

canvas.width = innerWidth;
canvas.height = innerHeight - headerOffset*2 - headerElementSize;

const ctx = canvas.getContext("2d");
let draw = false;

canvas.addEventListener("mouseup", (e) => {
  draw = false;
  ctx.stroke();
  ctx.beginPath();
})
canvas.addEventListener("mousedown", (e) => {
  draw = true;

})
canvas.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY)
})

