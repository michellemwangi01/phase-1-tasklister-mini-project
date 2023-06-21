document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener("submit", (e)=>{
    e.preventDefault();
    addListItem(e);
  })
});


 function addListItem(e){
  //add the task list Item
    console.log(e.target.task_description.value)
    taskItem = e.target.task_description.value
    let listItem = document.createElement('li')
    listItem.textContent = taskItem
    document.querySelector('#tasks').append(listItem)
    e.target.task_description.value = ''

    //add the delete button to the list item
    let listItemDelete = document.createElement('Button')
    listItemDelete.textContent = "Delete"
    listItem.appendChild(listItemDelete)
    listItemDelete.style.margin = '5px 10px'
    
    //add eventListener to the delete button
    listItemDelete.addEventListener("click", deleteTaskItem)

  }

  function deleteTaskItem(e){
    e.target.parentNode.remove()
  }
  