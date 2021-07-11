var playList = [
    {
        author: "Maneskin",
        song: "ZITI E BUONI"
    },
    {
        author: "Minelli",
        song: "Rampampam"
    },
    {
        author: "Maneskin",
        song: "Beggin"
    },
    {
        author: "Lordi",
        song: "Hard Rock Hallelujah"
    },
    {
        author: "LP",
        song: "Goodbye"
    }
];
const ol = document.createElement("ol");
const mainDiv = document.getElementById("content");
mainDiv.append(ol);
for (let a in playList) {
    const li = document.createElement("li");
    const pBtn = document.createElement("p");
    pBtn.append(playList[a].author);
    pBtn.append(" : ");
    pBtn.append(playList[a].song);
    li.append(pBtn);
    ol.append(li);
}