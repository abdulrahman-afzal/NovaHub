// let solutions = [
//     {
//         id: 1,
//         name: "Web Solutions",
//         category: "Web",
//         priority: "High",
//         status: "Active",
//         description: "Build simple and modern websites for businesses."
//     },
//     {
//         id: 2,
//         name: "Business Analytics",
//         category: "Analytics",
//         priority: "High",
//         status: "Active",
//         description: "Understand business data through clear insights."
//     },
//     {
//         id: 3,
//         name: "Team Support",
//         category: "Team",
//         priority: "Medium",
//         status: "Active",
//         description: "Help teams collaborate and organize projects."
//     },
//     {
//         id: 4,
//         name: "Marketing Dashboard",
//         category: "Analytics",
//         priority: "Medium",
//         status: "Inactive",
//         description: "Track marketing performance and campaign results."
//     },
//     {
//         id: 5,
//         name: "Secure Workspace",
//         category: "Web",
//         priority: "Low",
//         status: "Active",
//         description: "Provide a secure digital workspace for businesses."
//     },
//     {
//         id: 6,
//         name: "Project Management",
//         category: "Team",
//         priority: "High",
//         status: "Active",
//         description: "Organize tasks, teams and business projects."
//     }
// ];

// console.log("Solutions array loaded:", solutions);
// const solutionsContainer =
//     document.getElementById("solutionsContainer");

// const emptyMessage =
//     document.getElementById("emptyMessage");


// function displaySolutions(data = solutions) {

//     solutionsContainer.innerHTML = "";

//     if (data.length === 0) {

//         emptyMessage.classList.remove("hidden");

//         return;

//     } else {

//         emptyMessage.classList.add("hidden");

//     }


//     const cards = data.map(function (solution) {

//         return `
//             <div class="bg-white border border-gray-200
//                         rounded-2xl p-6 shadow-sm">

//                 <h3 class="text-xl font-bold text-gray-900">
//                     ${solution.name}
//                 </h3>

//                 <p class="text-blue-600 font-semibold mt-2">
//                     Category: ${solution.category}
//                 </p>

//                 <p class="text-gray-600 mt-2">
//                     Priority: ${solution.priority}
//                 </p>

//                 <p class="text-gray-600">
//                     Status: ${solution.status}
//                 </p>

//                 <p class="text-gray-500 mt-3">
//                     ${solution.description}
//                 </p>

//                 <p class="text-sm text-gray-400 mt-3">
//                     ID: ${solution.id}
//                 </p>
//                 <div class="flex gap-3 mt-5">
 
    
//     <button
//     onclick="editSolution(${solution.id})"
//     class="flex-1 bg-blue-500 hover:bg-blue-600
//            text-white py-2 rounded-lg font-semibold">

//     Edit

// </button>          
//   <button
//         onclick="deleteSolution(${solution.id})"
//         class="flex-1 bg-red-500 hover:bg-red-600
//                text-white py-2 rounded-lg font-semibold">

//         Delete

//     </button>

// </div>

//             </div>
//         `;

//     });


//     solutionsContainer.innerHTML = cards.join("");

// }


// displaySolutions();

// console.log("Solutions displayed successfully!");
// const solutionForm =
//     document.getElementById("solutionForm");


// solutionForm.addEventListener("submit", function (event) {

//     event.preventDefault();


//     const newSolution = {

//         id: Date.now(),

//         name:
//             document.getElementById("solutionName").value,

//         category:
//             document.getElementById("solutionCategory").value,

//         priority:
//             document.getElementById("solutionPriority").value,

//         status:
//             document.getElementById("solutionStatus").value,

//         description:
//             document.getElementById("solutionDescription").value

//     };


//     solutions.push(newSolution);


//     solutionForm.reset();


//     displaySolutions();


//     console.log("New solution added using push():", newSolution);

//     alert("New business solution added successfully!");

// });

// function deleteSolution(id) {

//     const confirmDelete = confirm(
//         "Are you sure you want to delete this solution?"
//     );

//     if (!confirmDelete) {
//         return;
//     }

//     solutions = solutions.filter(function (solution) {
//         return solution.id !== id;
//     });

//     displaySolutions();

//     console.log("Solution deleted using filter().");

//     alert("Solution deleted successfully!");
// }
// // ================= EDIT FUNCTIONALITY =================

// const editModal = document.getElementById("editModal");
// const closeModal = document.getElementById("closeModal");
// const cancelEdit = document.getElementById("cancelEdit");
// const editForm = document.getElementById("editForm");


// function editSolution(id) {

//     const solution = solutions.find(function (item) {
//         return item.id === id;
//     });

//     if (!solution) {
//         return;
//     }

//     document.getElementById("editId").value = solution.id;
//     document.getElementById("editName").value = solution.name;
//     document.getElementById("editCategory").value = solution.category;
//     document.getElementById("editPriority").value = solution.priority;
//     document.getElementById("editStatus").value = solution.status;
//     document.getElementById("editDescription").value = solution.description;

//     editModal.classList.remove("hidden");
// }


// // ================= UPDATE =================

// editForm.addEventListener("submit", function (event) {

//     event.preventDefault();

//     const id = Number(document.getElementById("editId").value);

//     const solution = solutions.find(function (item) {
//         return item.id === id;
//     });

//     if (!solution) {
//         return;
//     }

//     solution.name =
//         document.getElementById("editName").value;

//     solution.category =
//         document.getElementById("editCategory").value;

//     solution.priority =
//         document.getElementById("editPriority").value;

//     solution.status =
//         document.getElementById("editStatus").value;

//     solution.description =
//         document.getElementById("editDescription").value;

//     editModal.classList.add("hidden");

//     displaySolutions();

//     console.log("Solution updated successfully:", solution);

//     alert("Solution updated successfully!");
// });


// // ================= CLOSE MODAL =================

// closeModal.addEventListener("click", function () {
//     editModal.classList.add("hidden");
// });


// cancelEdit.addEventListener("click", function () {
//     editModal.classList.add("hidden");
// });
// ```javascript
// // ================= SEARCH & FILTER =================

// const searchInput = document.getElementById("searchInput");
// const filterButtons = document.querySelectorAll(".filter-btn");

// let currentFilter = "All";


// // ================= SEARCH =================

// searchInput.addEventListener("input", function () {

//     const searchText = searchInput.value.toLowerCase();

//     const filteredSolutions = solutions.filter(function (solution) {

//         const matchesSearch =
//             solution.name.toLowerCase().includes(searchText) ||
//             solution.category.toLowerCase().includes(searchText) ||
//             solution.description.toLowerCase().includes(searchText);

//         const matchesFilter =
//             currentFilter === "All" ||
//             solution.category === currentFilter ||
//             solution.priority === currentFilter ||
//             solution.status === currentFilter;

//         return matchesSearch && matchesFilter;

//     });

//     displaySolutions(filteredSolutions);

// });


// // ================= FILTER BUTTONS =================

// filterButtons.forEach(function (button) {

//     button.addEventListener("click", function () {

//         currentFilter = button.dataset.filter;

//         const searchText = searchInput.value.toLowerCase();

//         const filteredSolutions = solutions.filter(function (solution) {

//             const matchesSearch =
//                 solution.name.toLowerCase().includes(searchText) ||
//                 solution.category.toLowerCase().includes(searchText) ||
//                 solution.description.toLowerCase().includes(searchText);

//             const matchesFilter =
//                 currentFilter === "All" ||
//                 solution.category === currentFilter ||
//                 solution.priority === currentFilter ||
//                 solution.status === currentFilter;

//             return matchesSearch && matchesFilter;

//         });

//         displaySolutions(filteredSolutions);


//         // Active button styling

//         filterButtons.forEach(function (btn) {
//             btn.classList.remove("active-filter");
//         });

//         button.classList.add("active-filter");

//     });

// });
// ```
// ```javascript
// // ==========================================
// // STEP 1 - IF ELSE CONDITIONS
// // ==========================================

// const conditionOutput = document.getElementById("conditionOutput");

// conditionOutput.innerHTML = "";

// solutions.forEach(function (solution) {

//     let result = "";

//     // Condition 1 - Priority
//     if (solution.priority === "High") {
//         result = "High Priority";
//     } else {
//         result = "Normal Priority";
//     }

//     // Condition 2 - Status
//     if (solution.status === "Active") {
//         result = result + " | Active Solution";
//     } else {
//         result = result + " | Inactive Solution";
//     }

//     // Condition 3 - Category
//     if (solution.category === "Web") {
//         result = result + " | Web Category";
//     } else if (solution.category === "Analytics") {
//         result = result + " | Analytics Category";
//     } else {
//         result = result + " | Team Category";
//     }

//     // Condition 4 - Name Length
//     if (solution.name.length >= 10) {
//         result = result + " | Long Solution Name";
//     } else {
//         result = result + " | Short Solution Name";
//     }

//     // Condition 5 - Description Length
//     if (solution.description.length >= 30) {
//         result = result + " | Detailed Description";
//     } else {
//         result = result + " | Short Description";
//     }


//     // Create card without backticks
//     const card = document.createElement("div");

//     card.className =
//         "bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm";


//     const heading = document.createElement("h3");

//     heading.className =
//         "text-xl font-bold text-gray-900";

//     heading.textContent =
//         solution.name;


//     const paragraph = document.createElement("p");

//     paragraph.className =
//         "text-gray-600 mt-3";

//     paragraph.textContent =
//         result;


//     card.appendChild(heading);

//     card.appendChild(paragraph);

//     conditionOutput.appendChild(card);

// });


// console.log("5 If-Else conditions completed successfully!");
// ```


let solutions = [
    {
        id: 1,
        name: "Web Solutions",
        category: "Web",
        priority: "High",
        status: "Active",
        description: "Build simple and modern websites for businesses."
    },
    {
        id: 2,
        name: "Business Analytics",
        category: "Analytics",
        priority: "High",
        status: "Active",
        description: "Understand business data through clear insights."
    },
    {
        id: 3,
        name: "Team Support",
        category: "Team",
        priority: "Medium",
        status: "Active",
        description: "Help teams collaborate and organize projects."
    },
    {
        id: 4,
        name: "Marketing Dashboard",
        category: "Analytics",
        priority: "Medium",
        status: "Inactive",
        description: "Track marketing performance and campaign results."
    },
    {
        id: 5,
        name: "Secure Workspace",
        category: "Web",
        priority: "Low",
        status: "Active",
        description: "Provide a secure digital workspace for businesses."
    },
    {
        id: 6,
        name: "Project Management",
        category: "Team",
        priority: "High",
        status: "Active",
        description: "Organize tasks, teams and business projects."
    }
];

console.log("Solutions array loaded:", solutions);


// =================================================
// ELEMENTS
// =================================================

const solutionsContainer =
    document.getElementById("solutionsContainer");

const emptyMessage =
    document.getElementById("emptyMessage");

const solutionForm =
    document.getElementById("solutionForm");


// =================================================
// DISPLAY SOLUTIONS
// =================================================

function displaySolutions(data) {

    if (!solutionsContainer) {
        return;
    }

    if (!data) {
        data = solutions;
    }

    solutionsContainer.innerHTML = "";

    if (data.length === 0) {

        if (emptyMessage) {
            emptyMessage.classList.remove("hidden");
        }

        return;

    } else {

        if (emptyMessage) {
            emptyMessage.classList.add("hidden");
        }

    }


    const cards = data.map(function (solution) {

        return `
            <div class="bg-white border border-gray-200
                        rounded-2xl p-6 shadow-sm">

                <h3 class="text-xl font-bold text-gray-900">
                    ${solution.name}
                </h3>

                <p class="text-blue-600 font-semibold mt-2">
                    Category: ${solution.category}
                </p>

                <p class="text-gray-600 mt-2">
                    Priority: ${solution.priority}
                </p>

                <p class="text-gray-600">
                    Status: ${solution.status}
                </p>

                <p class="text-gray-500 mt-3">
                    ${solution.description}
                </p>

                <p class="text-sm text-gray-400 mt-3">
                    ID: ${solution.id}
                </p>

                <div class="flex gap-3 mt-5">

                    <button
                        onclick="editSolution(${solution.id})"
                        class="flex-1 bg-blue-500 hover:bg-blue-600
                               text-white py-2 rounded-lg font-semibold">

                        Edit

                    </button>

                    <button
                        onclick="deleteSolution(${solution.id})"
                        class="flex-1 bg-red-500 hover:bg-red-600
                               text-white py-2 rounded-lg font-semibold">

                        Delete

                    </button>

                </div>

            </div>
        `;

    });


    solutionsContainer.innerHTML =
        cards.join("");

}


displaySolutions();

console.log("Solutions displayed successfully!");


// =================================================
// ADD NEW SOLUTION
// =================================================

if (solutionForm) {

    solutionForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const newSolution = {

            id: Date.now(),

            name:
                document.getElementById("solutionName").value,

            category:
                document.getElementById("solutionCategory").value,

            priority:
                document.getElementById("solutionPriority").value,

            status:
                document.getElementById("solutionStatus").value,

            description:
                document.getElementById("solutionDescription").value

        };


        solutions.push(newSolution);

        solutionForm.reset();

        displaySolutions();

        console.log(
            "New solution added using push():",
            newSolution
        );

        alert(
            "New business solution added successfully!"
        );

    });

}


// =================================================
// DELETE SOLUTION
// =================================================

function deleteSolution(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this solution?"
    );


    if (!confirmDelete) {
        return;
    }


    solutions = solutions.filter(function (solution) {

        return solution.id !== id;

    });


    displaySolutions();

    console.log(
        "Solution deleted using filter()."
    );

    alert(
        "Solution deleted successfully!"
    );

}


// =================================================
// EDIT ELEMENTS
// =================================================

const editModal =
    document.getElementById("editModal");

const closeModal =
    document.getElementById("closeModal");

const cancelEdit =
    document.getElementById("cancelEdit");

const editForm =
    document.getElementById("editForm");


// =================================================
// EDIT SOLUTION
// =================================================

function editSolution(id) {

    const solution =
        solutions.find(function (item) {

            return item.id === id;

        });


    if (!solution) {
        return;
    }


    document.getElementById("editId").value =
        solution.id;

    document.getElementById("editName").value =
        solution.name;

    document.getElementById("editCategory").value =
        solution.category;

    document.getElementById("editPriority").value =
        solution.priority;

    document.getElementById("editStatus").value =
        solution.status;

    document.getElementById("editDescription").value =
        solution.description;


    if (editModal) {
        editModal.classList.remove("hidden");
    }

}


// =================================================
// UPDATE SOLUTION
// =================================================

if (editForm) {

    editForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const id =
            Number(document.getElementById("editId").value);


        const solution =
            solutions.find(function (item) {

                return item.id === id;

            });


        if (!solution) {
            return;
        }


        solution.name =
            document.getElementById("editName").value;

        solution.category =
            document.getElementById("editCategory").value;

        solution.priority =
            document.getElementById("editPriority").value;

        solution.status =
            document.getElementById("editStatus").value;

        solution.description =
            document.getElementById("editDescription").value;


        if (editModal) {
            editModal.classList.add("hidden");
        }


        displaySolutions();

        console.log(
            "Solution updated successfully:",
            solution
        );

        alert(
            "Solution updated successfully!"
        );

    });

}


// =================================================
// CLOSE EDIT MODAL
// =================================================

if (closeModal) {

    closeModal.addEventListener("click", function () {

        editModal.classList.add("hidden");

    });

}


if (cancelEdit) {

    cancelEdit.addEventListener("click", function () {

        editModal.classList.add("hidden");

    });

}


// =================================================
// SEARCH AND FILTER
// =================================================

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");

let currentFilter = "All";


function applySearchAndFilter() {

    if (!searchInput) {
        return;
    }


    const searchText =
        searchInput.value.toLowerCase();


    const filteredSolutions =
        solutions.filter(function (solution) {


            const matchesSearch =
                solution.name.toLowerCase().includes(searchText) ||
                solution.category.toLowerCase().includes(searchText) ||
                solution.description.toLowerCase().includes(searchText);


            const matchesFilter =
                currentFilter === "All" ||
                solution.category === currentFilter ||
                solution.priority === currentFilter ||
                solution.status === currentFilter;


            return matchesSearch && matchesFilter;

        });


    displaySolutions(filteredSolutions);

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            applySearchAndFilter();

        }
    );

}


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        currentFilter =
            button.dataset.filter;


        filterButtons.forEach(function (btn) {

            btn.classList.remove(
                "active-filter"
            );

        });


        button.classList.add(
            "active-filter"
        );


        applySearchAndFilter();

    });

});


// =================================================
// STEP 1 - IF ELSE CONDITIONS
// =================================================

const conditionOutput =
    document.getElementById("conditionOutput");


if (conditionOutput) {

    conditionOutput.innerHTML = "";


    solutions.forEach(function (solution) {

        let result = "";


        // Condition 1 - Priority

        if (solution.priority === "High") {

            result =
                "High Priority";

        } else {

            result =
                "Normal Priority";

        }


        // Condition 2 - Status

        if (solution.status === "Active") {

            result =
                result + " | Active Solution";

        } else {

            result =
                result + " | Inactive Solution";

        }


        // Condition 3 - Category

        if (solution.category === "Web") {

            result =
                result + " | Web Category";

        } else if (solution.category === "Analytics") {

            result =
                result + " | Analytics Category";

        } else {

            result =
                result + " | Team Category";

        }


        // Condition 4 - Name Length

        if (solution.name.length >= 10) {

            result =
                result + " | Long Solution Name";

        } else {

            result =
                result + " | Short Solution Name";

        }


        // Condition 5 - Description Length

        if (solution.description.length >= 30) {

            result =
                result + " | Detailed Description";

        } else {

            result =
                result + " | Short Description";

        }


        // Create output card

        const card =
            document.createElement("div");


        card.className =
            "bg-gray-50 border border-gray-200 rounded-xl p-5 shadow-sm";


        const heading =
            document.createElement("h3");


        heading.className =
            "text-xl font-bold text-gray-900";


        heading.textContent =
            solution.name;


        const paragraph =
            document.createElement("p");


        paragraph.className =
            "text-gray-600 mt-3";


        paragraph.textContent =
            result;

        card.appendChild(heading);

        card.appendChild(paragraph);

        conditionOutput.appendChild(card);

    });


    console.log(
    "5 If-Else conditions completed successfully!"
);


// ==========================================
// STEP 2 - FOR LOOP
// ==========================================

const forLoopOutput =
    document.getElementById("forLoopOutput");

const businessTools = [
    "Website Builder",
    "Business Analytics",
    "Team Collaboration",
    "Marketing Dashboard",
    "Secure Workspace",
    "Project Management"
];

for (let i = 0; i < businessTools.length; i++) {

    const card = document.createElement("div");

    card.className =
        "bg-white border border-gray-200 rounded-xl p-5 shadow-sm";

    const heading = document.createElement("h3");

    heading.className =
        "text-xl font-bold text-gray-900";

    heading.textContent =
        businessTools[i];

    const paragraph = document.createElement("p");

    paragraph.className =
        "text-gray-500 mt-2";

    paragraph.textContent =
        "Business Tool " + (i + 1);

    card.appendChild(heading);
    card.appendChild(paragraph);

    forLoopOutput.appendChild(card);
}

console.log(
    "For Loop completed successfully!"
);
}

// ==========================================
// STEP 3 - WHILE LOOP
// ==========================================

const whileLoopOutput =
    document.getElementById("whileLoopOutput");

let index = 0;

while (index < solutions.length) {

    const solution = solutions[index];

    const card = document.createElement("div");

    card.className =
        "bg-white border border-gray-200 rounded-xl p-5 shadow-sm";

    const heading = document.createElement("h3");

    heading.className =
        "text-xl font-bold text-gray-900";

    heading.textContent =
        solution.name;

    const paragraph = document.createElement("p");

    paragraph.className =
        "text-gray-600 mt-2";

    paragraph.textContent =
        "Status: " + solution.status;

    const category = document.createElement("p");

    category.className =
        "text-blue-600 mt-2 font-medium";

    category.textContent =
        "Category: " + solution.category;

    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(category);

    whileLoopOutput.appendChild(card);

    index++;
}


// ==========================================
// STEP 4 - COMBINE LOOPS WITH CONDITIONS
// ==========================================

const combinedOutput =
    document.getElementById("combinedOutput");

let i = 0;

while (i < solutions.length) {

    const solution = solutions[i];

    const card = document.createElement("div");

    card.className =
        "bg-white border border-gray-200 rounded-xl p-5 shadow-sm";

    const heading = document.createElement("h3");

    heading.className =
        "text-xl font-bold text-gray-900";

    heading.textContent =
        solution.name;

    const result = document.createElement("p");

    result.className =
        "mt-3 font-semibold";

    if (solution.priority === "High") {

        result.textContent =
            "Category: High Priority Solution";

        result.classList.add("text-red-600");

    } else if (solution.status === "Active") {

        result.textContent =
            "Category: Active Solution";

        result.classList.add("text-green-600");

    } else {

        result.textContent =
            "Category: Other Solution";

        result.classList.add("text-gray-600");
    }

    const details = document.createElement("p");

    details.className =
        "text-gray-500 mt-2";

    details.textContent =
        "Category: " + solution.category;

    card.appendChild(heading);

    card.appendChild(result);

    card.appendChild(details);

    combinedOutput.appendChild(card);

    i++;
}

