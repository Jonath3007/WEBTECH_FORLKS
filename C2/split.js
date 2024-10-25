function splitImage() {
    const container = document.getElementById("imageContainer");
    const xInput = document.getElementById("xInput").value;
    const yInput = document.getElementById("yInput").value;

    container.innerHTML = "";

    const xCount = parseInt(xInput);
    const yCount = parseInt(yInput);

    const cardWidth = container.clientWidth / xCount;
    const cardHeight = container.clientHeight / yCount;

    for (let y = 0; y < yCount; y++) {
        for (let x = 0; x < xCount; x++) {
            const card = document.createElement("div");
            card.className = "card";

            card.style.width = `${cardWidth}px`;
            card.style.height = `${cardHeight}px`;
            card.style.left = `${x * cardWidth}px`;
            card.style.top = `${y * cardHeight}px`;
            card.style.backgroundPosition = `-${x * cardWidth}px -${y * cardHeight}px`;

            card.addEventListener("click", () => {
                card.classList.add("disappear");
            });
            container.appendChild(card);
        }
    }
}