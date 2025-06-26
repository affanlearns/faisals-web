// search.js

document.addEventListener("DOMContentLoaded", function () {
  const searchInputs = document.querySelectorAll(".search-widget input");

  searchInputs.forEach((input) => {
    input.addEventListener("keyup", function () {
      const filter = input.value.toLowerCase();
      const posts = document.querySelectorAll(".blog-list article");

      posts.forEach((post) => {
        const text = post.textContent.toLowerCase();
        post.style.display = text.includes(filter) ? "block" : "none";
      });
    });
  });
});
