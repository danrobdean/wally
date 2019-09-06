class Profile {
    constructor(src, name, role, fact, left, top) {
        this.src = src;
        this.name = name;
        this.role = role;
        this.fact = fact;
        this.left = left;
        this.top = top;
    }
}

names = {
    spooky: new Profile("head.jpg", "Wally", "Graduate Wally Engineer", "I love where's wally!", "303px", "325px"),
    cheery: new Profile("head2.jpg", "Waldo", "Sophomore Waldo Wrangler", "I love me a good waldo yeehaw", "409px", "657px")
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

    // var modalInner = document.getElementById("modalInner");
    // modalInner.style.left = names[name].left;
    // modalInner.style.top = names[name].top;
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