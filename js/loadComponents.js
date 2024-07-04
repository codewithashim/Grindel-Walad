async function loadComponent(elementId, filePath) {
    const response = await fetch(filePath);
    const text = await response.text();
    document.getElementById(elementId).innerHTML = text;
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "../components/shared/header/header.html");
    loadComponent("hero", "../components/hero/hero.html");
    loadComponent("about", "../components/about/about.html");
    loadComponent("info", "../components/info/info.html");
    loadComponent("unique-room", "../components/uniqueRoom/uniqueRoom.html");
    loadComponent("offer", "../components/offer/offer.html");
    loadComponent("testimonial", "../components/testimonial/testimonial.html");
    loadComponent("newslatter", "../components/newslatter/newslatter.html");
    loadComponent("footer", "../components/shared/footer/footer.html");
});
