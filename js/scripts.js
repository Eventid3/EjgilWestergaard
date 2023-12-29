
function scrollTrigger(selector) {
  let elements = document.querySelectorAll(selector);
  elements = Array.from(elements);
  elements.forEach(element => {
    addObserver(element);
  })
}

let options = {
  rootMargin: "-100px",
};

function addObserver(element) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-animation')
        observer.unobserve(entry.target)
      }
    })
  }, 
  options)
  observer.observe(element);
}

scrollTrigger('.fade-in');

