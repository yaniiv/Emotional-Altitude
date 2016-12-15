import { Toaster, Position } from "@blueprintjs/core";

var x = document.getElementById('content')
console.log(x)
export const OurToaster = Toaster.create({
    className: "my-toaster",
    position: Position.TOP_RIGHT,
}, document.getElementById("poop"));