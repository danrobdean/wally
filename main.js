names = {
    spooky: {
        src: "head.jpg",
        text: "I am a wally"
    },
    cheery: {
        src: "head2.jpg",
        text: "I am also a wally"
    }
};

function setHeads() {
    var heads = document.getElementsByClassName("head");
    for (let head of heads) {
        head.src = names[head.id].src;
        head.onclick = () => clickHead(head.id);
    };
}

function clickHead(name) {
    document.getElementById("modal").classList.add("visible");
    document.getElementById("bigHead").src = names[name].src;
    document.getElementById("headText").textContent = names[name].text;
}

function hideModal() {
    document.getElementById("modal").classList.remove("visible");
}