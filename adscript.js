const guides = [
    {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "[$67] Common Duck™",
        description: "Commonly sold to establishments who would like minimal cost for minimal protection. No special effect.",
        image: "https://i.etsystatic.com/33746016/r/il/1f6610/3673863043/il_fullxfull.3673863043_7qwy.jpg" 
    },
    {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "[$676] Uncommon Duck™",
        description: "Has eaten pickles to deter agitators. Does not work against persistent agitators.",
        image: "https://i.natgeofe.com/k/327b01e8-be2e-4694-9ae9-ae7837bd8aea/mallard-male-swimming_square.jpg"
    },
    {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "[$6767] Rare Duck™",
        description: "Commonly sold as a mandarin orange in disguise.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrE4DMzmqkPc_LBRrsWc0fbkOjcf-e0xLcP8WVy98mVtjmHGBW3Cs_EwmXyDgIqm3tW72yH-CGC_3uv2vd6mkGn25Exht9PW_7ZoR1Q&s=10"
    },
    {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "[$67676] Epic Duck™",
        description: "The Rare Duck's true form.",
        image: "https://cdn.britannica.com/42/58842-050-6E524F71/Mandarin-duck-Aix-galericulata.jpg"
    },
    {
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "[$676767] Legendary Duck™",
        description: "Anything's a duck if you have enough money.",
        image: "https://i.etsystatic.com/16185924/r/il/ccab3d/7951337871/il_fullxfull.7951337871_pu12.jpg"
    }
];

const grid = document.getElementById("guide-grid");

guides.forEach(guide => {
    const card = document.createElement("a");
    card.href = guide.url;
    card.target = '_blank';
    card.className = "item";

    card.innerHTML = `
        <h2>${guide.title}</h2>
        <p>${guide.description}</p>
        <img src="${guide.image}" alt="${guide.title}">
    `;

    grid.appendChild(card);
});
