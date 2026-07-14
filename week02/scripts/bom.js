const input1 = document.querySelector('#favchap');
const button1 = document.querySelector('button');
const list1 = document.querySelector('#list');




button1.addEventListener('click', function(event) {
    event.preventDefault();
    if(input1.value.trim() !== '') {
        chapter = input1.value.trim();
        input1.value = '';
        const li = document.createElement('li');
        const span = document.createElement('span');
        const deleteButton = document.createElement('button');
        li.appendChild(span);
        li.appendChild(deleteButton);
        span.textContent = chapter;  
        deleteButton.textContent = '❌';
        li.textContent = chapter;
        li.appendChild(deleteButton);
        list1.append(li);
        deleteButton.addEventListener('click', function() {list1.removeChild(li); input1.focus();
            });
    }
});

