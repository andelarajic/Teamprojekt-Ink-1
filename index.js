// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}


 /*var options = {
    //debug: 'info',
    modules: {
        toolbar: '#toolbar'
    },
    placeholder: 'Compose an epic...',
    readOnly: false,
    theme: 'snow'
};
var editor = new Quill('#editor', options); 
*/let toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ "header": [1, 2, 3, 4, 5, 6, false] }],
    [{ "list": "ordered" }, { "list": "bullet" }],
    [{ "script": "sub" }, { "script": "super" }],
    [{ "indent": "-1" }, { "indent": "+1" }],
    [{ "direction": "rtl" }],
    [{ "size": ["small", false, "large", "huge"] }],
    ["link", "image", "video", "formula"],
    [{ "color": [] }, { "background": [] }],
    [{ "font": [] }],
    [{ "align": [] }],
];
let quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    placeholder: 'Write your text here',
    readOnly: false,
    theme: 'snow'
});

function printDiv() {
    var divContents = document.getElementById("editor").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body >');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
};

const editor = document.querySelector('.editor');
const author = document.querySelector('.author');
const title = document.querySelector('.title');
const oldNotes = document.querySelector('.preview-notes');
const save = document.querySelector('.save');

save.addEventListener('click', () => { // vid klick på knappen försvinner texten
    let savedText = editor.innerHTML;
    let savedTitleText = title.innerHTML;
    let savedAuthorText = author.innerHTML;
    let savedAllText = document.createElement('DIV') // tilldelat en nyskapad div variabeln 'savedAllText'
    editor.innerHTML = '';//  'textrutan' ska bli tom efter save
    author.innerHTML = 'Author'; // Vad som ska stå vid 'author' efter save
    title.innerHTML = 'Ny titel' // Vad som ska stå vid titeln efter save
    savedAllText.innerHTML = `<h3>${savedTitleText}</h3> <p>${savedAuthorText}</p> <p>${savedText}</p>`; // variablerna för titel, author och editor tilldelas i en template. De läss in i den nyskapta divens variabel innehåll 'savedAllText.innerHTML'
    oldNotes.appendChild(savedAllText); // till sidospalten('oldNotes') läggs nu till en html childoch det är min nyskapta DIV variabel 'savedAllText'

});

