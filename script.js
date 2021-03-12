function addTask() {
    let li = document.createElement('li')
    let input_task = document.form_main.task.value;
    let imput_text = document.createTextNode(input_task);

    li.appendChild(input_task);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";

    
}