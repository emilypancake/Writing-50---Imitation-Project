const guides = [
    {
        url: "guide1.html",
        title: "A Beginner's Guide To Becoming an Establishment",
        description: "For establishments who have failed and want advice, for establishments who are successful and want to keep going, and for young changemakers like you who wish to start your own establishment.",
        image: "https://static.spotapps.co/website_images/ab_websites/65829_website_v1/party/slide_1.jpg" 
    },
    {
        url: "guide2.html",
        title: "Branding",
        description: "We give spicy secrets about branding: the heart and soul of an establishment.",
        image: "https://cdn.brandingmag.com/wp-content/uploads/2026/03/Cover_Stephan-Reschke-_-001-_-Building-future-brands-through-the-lens-of-the-P.R.I.S.M._Brandingmag.jpg"
    },
    {
        url: "guide3.html",
        title: "Interacting with Protesters",
        description: "How to stay neutral as possible.",
        image: "https://a.pinatafarm.com/625x399/d1074ed299/side-eye-34b3cf3dbf6b2cc486370369b45bd04b-meme.jpeg"
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
