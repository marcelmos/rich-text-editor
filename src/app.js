const editor = document.querySelector('#editor');

function transform(option, argument) {
    document.execCommand(option, false, argument);
}

function saveFile(){
    const fileTitle = document.querySelector('.file-title').value;
    const file = new Blob([editor.innerHTML], {type: "application/json;charset=utf-8"});

    saveAs(file, fileTitle);
}

function displayModal(){
    const modal = document.querySelector('.modal');

    if(modal.getAttribute('aria-hidden') === 'true'){
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }else{
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    }
}

function openFile(){
    const fileInput = document.querySelector('#open-file').files[0];
    const render = new FileReader();

    render.addEventListener('load', (event) =>{
        const text = event.target.result;

        editor.innerHTML = '';      // Clear editor
        editor.innerHTML += text;   // Render file content
    });
    render.readAsText(fileInput);
}