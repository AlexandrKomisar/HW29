const btn = document.createElement("button");
const p = document.createElement("p");
p.textContent = "Open";
btn.append(p);
mainDiv.append(btn);
btn.addEventListener("click", () => {
    const div = document.createElement("div");
    div.setAttribute("id", "modal__div");
    const p = document.createElement("p");
    p.textContent = "TEXT";
    div.append(p);
    const innerBtn = document.createElement("button");
    const innerBtnP = document.createElement("p");
    innerBtnP.textContent = "Close";
    innerBtn.append(innerBtnP);
    div.append(innerBtn);
    mainDiv.append(div);
    btn.disabled = true;
    innerBtn.addEventListener("click", () => {
        div.remove();
        btn.disabled = false;
    });
});