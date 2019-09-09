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
    spooky: new Profile("pics/head.jpg", "Wally", "Graduate Wally Engineer", "I love where's wally!", "303px", "325px"),
    cheery: new Profile("pics/head2.jpg", "Waldo", "Lead Waldo Designer", "I love me a good waldo!", "409px", "657px"),
    dani: new Profile("pics/dani.jpg", "Dani McColl", "Talent Partner", "Ask me about Saddam Hussein's rug!", "0px", "0px"),
    daniel: new Profile("pics/daniel.jpg", "Daniel Dean", "Graduate Software Engineer", "I once presented a (totally fake) bomb at a hackathon!", "0px", "0px"),
    elle: new Profile("pics/elle.jpg", "Elle Malaspina", "EBU Delivery Manager (6 month secondment from Civil Service Fast Stream)", "This is my 2nd rotation after a year at Department for Transport working on rail infrastructure projects!", "0px", "0px"),
    ivo: new Profile("pics/ivo.jpg", "Ivo Timev", "Graduate Software Engineer", "I used to teach Physics in high school!", "0px", "0px"),
    joe: new Profile("pics/joe.jpg", "Joe Stephenson", "Graduate Software Engineer", "If this software engineering thing doesn't work out I'm going to become a professional baker.", "0px", "0px"),
    justine: new Profile("pics/justine.jpg", "Justine Lambert", "Talent Partner", "I qualified for the Roller Derby World Championships! Also, ask me about serial killers!", "0px", "0px"),
    michael: new Profile("pics/michael.jpg", "Michael Gillan", "Graduate Software Engineer", "I have never had fun in my life.", "0px", "0px"),
    miron: new Profile("pics/miron.jpg", "Miron Zelina", "Graduate Software Engineer", "I once ended up in St Mary's hospital because I lost my water bottle and forgot to drink for two days!", "0px", "0px"),
    nikita: new Profile("pics/nikita.jpg", "Nikita Hukerikar", "Graduate Software Engineer", "Talk to me about the year I lived in Hong Kong!", "0px", "0px"),
    paul: new Profile("pics/paul.jpg", "Paul Larsen", "Graduate Software Engineer", "I am too boring to think of a fun fact!", "0px", "0px"),
    teri: new Profile("pics/teri.jpg", "Teri Drummond", "Partner Engineering - Games Solutions", "I love video games - currently all my spare time is going into the new Fire Emblem. I'm joining Improbable from a games programming background, and I'm excited to work on innovative tech that will help a wide range of game developers!", "0px", "0px"),
    tilman: new Profile("pics/tilman.jpg", "Tilman Schmidt", "Graduate Software Engineer", "I can do 4-ball juggling! For a little bit anyway.", "0px", "0px"),
    vlad: new Profile("pics/vlad.jpg", "Vlad Barvinko", "Graduate Software Engineer", "In true Dutch fashion, I live on my bike. Tell me about your favourite type of transport!", "0px", "0px")
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