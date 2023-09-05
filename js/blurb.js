fetch('/blurb.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_blurb");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
	newelem.className = "blurb";
    oldelem.parentNode.replaceChild(newelem,oldelem);
})