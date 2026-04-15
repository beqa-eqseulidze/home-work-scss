const extensions = [
  {
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    enabled: true,
  },
  {
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    enabled: true,
  },
  {
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    enabled: false,
  },
  {
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    enabled: true,
  },
  {
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    enabled: true,
  },
  {
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    enabled: false,
  },
  {
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
    enabled: true,
  },
  {
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    enabled: false,
  },
  {
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    enabled: true,
  },
  {
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    enabled: true,
  },
  {
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    enabled: false,
  },
  {
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    enabled: true,
  }
];



const cards=Array.from(document.querySelectorAll(".card"));
const buttons = document.querySelectorAll(".filters button");

cards.forEach((card, index)=>{
  const checker = card.querySelector("input");
  checker.checked = extensions[index].enabled;
});


buttons.forEach(button =>{
  button.addEventListener("click",()=>{

    
    buttons.forEach(btnn => btnn.classList.remove("active"));
    button.classList.add("active");

    const type = button.textContent.toLowerCase();

    const visibleCards = cards.reduce((acc, card, index) => {
      const Active = extensions[index].enabled;

      const show = type === "all" || (type === "active" && Active);
      return show ? [...acc, card] : acc;
    },[]);


    cards.forEach(card => {
      card.style.display = "none";
    });

   
    visibleCards.forEach(card => {
      card.style.display = "block";
    });
  });
});


cards.forEach((card, index) => {
  const checkbox = card.querySelector("input");

  checkbox.addEventListener("change",()=>{

    
    const activeButton = document.querySelector(".filters .active");
    activeButton.click();
  });
});