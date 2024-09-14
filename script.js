let logout = document.querySelector('.logout');
let list = document.querySelector('.list');

let count = 0; 
const MAX_SELECTION = 5;

logout.addEventListener('click', () => {
    window.location.href = "index.html";
});

window.addEventListener("load", () => {
    fetchAPI()
    .then((data) => {
        data.forEach((element, index) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'todoItem');

            const taskDesc = document.createElement('p');
            taskDesc.classList.add('mb-0');
            taskDesc.textContent = element.title;

            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.classList.add('check');
            checkBox.id = `check${element.id}`;
            checkBox.autocomplete = 'off';

            const label = document.createElement('label');
                       
            todoItem.appendChild(taskDesc);
            todoItem.appendChild(checkBox);
            console.log(todoItem);
            list.appendChild(todoItem);

            checkBox.addEventListener('change', function() {
                if (checkBox.checked) {
                    if (count < MAX_SELECTION) {
                        count++;
                        checkSelectionLimit(); // Call promise checker
                    } else {
                        checkBox.checked = false;
                        alert(`You can only select up to ${MAX_SELECTION} tasks!`);
                    }
                } else {
                    count--; // Decrease the counter if unchecked
                }
                toggleCheckboxes(); // Disable/enable checkboxes based on limit
            });
            
            todoItem.appendChild(taskDesc);
            todoItem.appendChild(checkBox);
            list.appendChild(todoItem);
        });
    })
})

function fetchAPI() {
    
    const url = 'https://jsonplaceholder.typicode.com/todos';

    return fetch(url)
    .then((reponse) => {
        if(!reponse.ok){
            throw new Error('Please reload!');
                    }
        return reponse.json();
    })
}
function toggleCheckboxes() {
    const checkboxes = document.querySelectorAll('.check');
    checkboxes.forEach(checkbox => {
        if (selectedCount >= MAX_SELECTION && !checkbox.checked) {
            checkbox.disabled = true; 
        } else {
            checkbox.disabled = false; 
        }
    });
}


function checkSelectionLimit() {
    return new Promise((resolve, reject) => {
        if (selectedCount === MAX_SELECTION) {
            resolve();
        }
    }).then(message => {
 alert(' 5 tasks have been successfully completed.');
    });
}