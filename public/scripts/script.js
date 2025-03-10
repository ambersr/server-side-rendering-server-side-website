// 
document.querySelectorAll("input[name='category']").forEach(radio => {
    radio.addEventListener("change", function () {
      const selectedCategory = this.value;
      const url = selectedCategory ? `/?category=${encodeURIComponent(selectedCategory)}` : "/";
      window.location.href = url; // Pagina herladen met filter
    });
  });
