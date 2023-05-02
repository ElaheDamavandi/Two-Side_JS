const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(
      `Somthing went wrong, make sure that ${selector} exists or is typed correctly.`
    );
  };

  const addEvent = (element) => {
    element.addEventListener('mouseenter', () => {
        console.log('added hover event')
        element.classList.add("active");
      });
      element.addEventListener('mouseleave', () => {
        console.log('added leave event')
        element.classList.remove("active");
      });
  }

  const blackElement = selectElement('.black');
  const violetElement = selectElement('.violet');

  addEvent(blackElement);
  addEvent(violetElement);