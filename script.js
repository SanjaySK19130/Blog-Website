const blogs = document.querySelectorAll(".blog-item");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let currentItems = 6;

// Initially hide blogs after 6
blogs.forEach((blog, index) => {
    if (index >= currentItems) {
        blog.style.display = "none";
    }
});

// Load More Button
loadMoreBtn.addEventListener("click", () => {

    let nextItems = currentItems + 5;

    blogs.forEach((blog, index) => {
        if (index < nextItems) {
            blog.style.display = "block";
        }
    });

    currentItems = nextItems;

    // Hide button if all blogs shown
    if (currentItems >= blogs.length) {
        loadMoreBtn.style.display = "none";
    }

});