// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Toggle the mobile menu when the menu button is clicked
mobileMenu.addEventListener("click", () => {
  console.log("Mobile menu clicked");
  navLinks.classList.toggle("open");
});

// Sticky Navbar Effect: Adds a class to change navbar styling on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Project Data
const projectData = {
  project1: {
    title: "Team 1",
    members:
      "Group Members: Justin Bortone, Katharine Brunette, Gabriella Garcia,Brian Padgett, Teresa Ralston, Camella Nicole Casinelli, Na Yeon Kim",
    description:
      "Food Access in Indianapolis & through the Boner Center for the elderly/ Songdo or Seoul largely. Indy Hunger Network work to ensure that anyone in need, including seniors, has access to nutritious food Indy Hunger Network. The Equitable Food Access Initiative EFAI Website Elderly individuals face difficult choices Map the Meal Gap.",
    projectType: "Infographic Poster",
    image: "assets/images/project1.jpg",
    behance: `<div id="project-behance">
              <button>
                <a
                  href="https://www.behance.net/gallery/213076287/Yonsei-x-Herron"
                  >Design Info</a
                >
              </button>`,
  },
  project2: {
    title: "Team 2",
    members:
      "Group Members: Sydnie Barrett, Merce' Burney, Zoe Law, Hayden Coles,Logan Montoya, Ogla Glebova, Chaeeun Kim ",
    description:
      "Focused on food nutrition, diet/amount for the day–What makes up a balanced diet for the elderly? Highlight the specific nutritional needs of seniors (high-fiber foods, lean proteins, healthy fats, and calcium-rich options to support bone health. Include daily recommended intake of essential vitamins and minerals. Educate on portion control and adjusting caloric intake to meet lower activity levels (balanced diet)",
    projectType: "Brochure",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project3: {
    title: "Team 3",
    members:
      "Group Members: Megan Palmquist, Mira Render, Trevion Slack, Annika Solis, Parker Thomason, Xuan Xin Neo, Jeana Lee ",
    description:
      "Impact of Diet on Blood Pressure and Cardiovascular Health/How does blood pressure relate to diet? Importance of a heart-healthy diet; low-sodium foods and how they help manage hypertension, a common issue among seniors. DASH Diet (Dietary Approaches to Stop Hypertension), rich in fruits, vegetables, whole grains, and low-fat dairy, and its blood pressure benefits foods to avoid (processed snacks high in sodium, and alternatives (herbs)",
    projectType: "Infographic Poster",
    image: "assets/images/realworldimage.jpg",
    behance: "https://www.behance.net/gallery/213076287/Yonsei-x-Herron",
  },
  project4: {
    title: "Team 4",
    members:
      "Group Members: Gwen Canfield, Nicholas Gilbert, Isabella Parrales, Shyann Raser, Ella Teipen, Jhanayree Romero, Dabeen Jung ",
    description:
      "Meal Planning for Seniors with Chronic Conditions. Offer advice on how to adapt meals for common elderly health conditions such as diabetes, arthritis, or digestive issues like acid reflux or constipation. Include diabetes-friendly meal options (low in refined sugars and high in fiber) and joint-supporting nutrients like omega-3 fatty acids.",
    projectType: "Brochure",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project5: {
    title: "Team 5",
    members:
      "Group Members: Janeal Dade, Charlie Krause, Jansing Lunato, Marin McCoy, William Spink, Um Sohyun, Douaa Mir",
    description:
      "Importance of Hydration for the Elderly. Raise awareness about the risk of dehydration among older adults, who often experience reduced thirst sensation.Include daily water intake recommendations and tips on staying hydrated, such as eating water-rich foods like cucumbers, melons, and soups. ",
    projectType: "Brochure",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project6: {
    title: "Team 6",
    members:
      "Group Members: Maci Bennett, Cole Robinson, Tyler Schmadeke, Ryann Smith, Leilani Turner, Rachel Seng, Rafaella Flavia Velasquez Lau",
    description:
      "Exercise and Food Synergy: Connection between physical activity and nutrition; how regular exercise helps the elderly maintain muscle mass and energy levels when paired with proper diet. Create a section on simple exercises that can be done at home or outdoors, paired with suggestions on post-exercise recovery meals to support mobility and strength. ",
    projectType: "Infographic Poster",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project7: {
    title: "Team 7",
    members:
      "Group Members: Courtney Davis, Daniel Johnson, Riya Patel, Sierra Pruneski,Ariana Katarina Shahinfar, Aruzhan Zhaugashty",
    description:
      "Understanding Food Insecurity and Mental Health in the Elderly: Emotional and psychological impact of food insecurity on seniors. Lack of consistent access to nutritious food can contribute to anxiety, depression, and feelings of isolation. Link mental health and nutrition, showing how eating well can improve mood and cognitive function, and the consequences of poor nutrition on mental health. ",
    projectType: "Infographic Poster",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project8: {
    title: "Team 8",
    members:
      "Group Members: Ayaan Alam, Neferti Huynh, Dylan Jewell, Jay Macek, Scharlot Schepers, Huiseung Noh",
    description:
      "The Role of Fiber in Senior Health: Need fiber for digestive health, especially in preventing constipation, which is common among older adults.Fiber-rich foods: Whole grains, beans, fruits, and vegetables. Benefits: Improved digestion, weight management, and reduced risk of chronic diseases. American Heart Association (for heart and digestive health). Map the Meal Gap or Meals on Wheels meal plans",
    projectType: "Infographic Poster",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
};

// Function to display project details
function showProjectDetails(projectId) {
  const project = projectData[projectId];

  if (project) {
    // Update the content with the selected project details
    $("#project-title").text(project.title);
    $("#project-members").text(project.members);
    $("#project-description").text(project.description);
    $("#project-type").text(project.projectType);
    $("#project-image").attr("src", project.image);

    $("#project-behance a").attr("href", project.behance);

    // Hide the projects section and show the project details section
    $("#projects").hide();
    $("#project-details").show();
  }
}

// Function to go back to the projects section
$("#go-back").click(function () {
  // Hide the project details section and show the projects section
  $("#projects").show();
  $("#project-details").hide();
});

// Initialize event listeners for the project cards
function initListeners() {
  // Event listeners for project cards
  $("#project1").click(function () {
    showProjectDetails("project1");
  });

  $("#project2").click(function () {
    showProjectDetails("project2");
  });
  $("#project3").click(function () {
    showProjectDetails("project3");
  });
  $("#project4").click(function () {
    showProjectDetails("project4");
  });
  $("#project5").click(function () {
    showProjectDetails("project5");
  });
  $("#project6").click(function () {
    showProjectDetails("project6");
  });
  $("#project7").click(function () {
    showProjectDetails("project7");
  });
  $("#project8").click(function () {
    showProjectDetails("project8");
  });
}

$(document).ready(function () {
  initListeners(); // Initialize the project card click event listeners
});
