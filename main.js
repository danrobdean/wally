class Profile {
    constructor(src, name, role, fact) {
        this.src = src;
        this.name = name;
        this.role = role;
        this.fact = fact;
    }
}

names = {
    spooky: new Profile("head.jpg", "Wally", "Graduate Wally Engineer", "I love where's wally!"),
    cheery: new Profile("head2.jpg", "Waldo", "Sophomore Waldo Wrangler", "I love me a good waldo yeehaw")
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
    document.getElementById(name).classList.add("highlighted");
    document.getElementById("bigHead").src = names[name].src;
    document.getElementById("name").textContent = names[name].name;
    document.getElementById("role").textContent = names[name].role;
    document.getElementById("fact").textContent = `\"` + names[name].fact + `\"`;
}

function hideModal() {
    document.getElementById("modal").classList.remove("visible");
}

function highlightAll() {
    var heads = document.getElementsByClassName("head");
    for (let head of heads) {
        head.classList.add("highlighted");
    }
}