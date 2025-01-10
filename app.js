document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Adding new task -------
    btn.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task === '') {
            alert('Please enter a task');
            return;
        }
        else{
            document.querySelector('#tasks').innerHTML+= `
                <div class ="task">
                    <span id = "taskname">
                        ${document.querySelector('#newtask input').value}
                    </span> 
                    <button class = "delete"><i class='bx bx-trash'></i></button>
                </div>
            `;
        }

        // Add delete functionality --------
        let current_tasks = document.querySelectorAll('.delete');
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll('.task');
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    });
    
        // Dark mode functionality
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            darkModeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
        });

});
