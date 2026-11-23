const guides = [
    {
        url: "guide1.html",
        title: "A Beginner's Guide To Becoming an Establishment",
        description: "For establishments who have failed and want advice, for establishments who are successful and want to keep going, and for young changemakers like you who wish to start your own establishment.",
        image: "https://cdn.britannica.com/42/58842-050-6E524F71/Mandarin-duck-Aix-galericulata.jpg" 
    },
    {
        url: "guide2.html",
        title: "Second Guide",
        description: "Short preview summary here.",
        image: "https://cdn.britannica.com/42/58842-050-6E524F71/Mandarin-duck-Aix-galericulata.jpg"
    },
    {
        url: "guide2.html",
        title: "Second Guide",
        description: "Short preview summary here.",
        image: "https://cdn.britannica.com/42/58842-050-6E524F71/Mandarin-duck-Aix-galericulata.jpg"
    }
];

const grid = document.getElementById("guide-grid");

guides.forEach(guide => {
    const card = document.createElement("a");
    card.href = guide.url;
    card.className = "item";

    card.innerHTML = `
        <h2>${guide.title}</h2>
        <p>${guide.description}</p>
        <img src="${guide.image}" alt="${guide.title}">
    `;

    grid.appendChild(card);
});
