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
    title: "Project Title 1",
    members: "Group Members: Megan , bob",
    description: "A detailed description highlighting the groups project",
    image: "assets/images/project1.jpg",
  },
  project2: {
    title: "Project Title 2",
    members: "Group Members: jake, tiffany",
    description:
      "An interactive project that tackles elderly health with creative and engaging designs.",
    image: "assets/images/project2.jpg",
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
    $("#project-image").attr("src", project.image);

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
}

$(document).ready(function () {
  initListeners(); // Initialize the project card click event listeners
});
