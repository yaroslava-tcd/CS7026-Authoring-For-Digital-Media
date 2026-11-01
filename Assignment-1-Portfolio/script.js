

//getting the project information from the JSON file
fetch("../projects-info.json")
   .then(response => {

//converting the JSON for js
        return response.json();

    })



.then(data => {

// Gettingthe project titles for the projects page from the JSON file and inserting them into the HTML
const projNames = document.querySelectorAll(".project-title");

    projNames.forEach((name, index) => {
        name.textContent = data[index].name;
    });

//same but for the project descriptions
const projDesc = document.querySelectorAll(".proj-list-item p");

    projDesc.forEach((desc, index) => {
        desc.textContent = data[index].description;
    });

//same for the project images
const projImages = document.querySelectorAll(".proj-list-item img");

    projImages.forEach((img, index) => {
        img.src = data[index].image;
        img.alt = data[index].name;
    });

})

//check errors
.catch((err) => {
    console.log(err);
});