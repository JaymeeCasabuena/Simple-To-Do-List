var add = document.querySelector('#add-btn');
var input = document.querySelector('#new-task input');
var task_list = document.querySelector('#task-list');

add.onclick = function(){
    if(input.value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        task_list.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${input.value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

      
 var current_tasks = document.querySelectorAll(".delete");
 var tasks = document.querySelectorAll(".task");       
      
      
      for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#new-task input").value = "";
    }
}

//*TYPED*//


var typed = new Typed('.auto-input', {
  strings: ["TO DO LIST"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true 
})
                     