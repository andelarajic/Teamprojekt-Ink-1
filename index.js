// Get DOM Elements
const modal = document.querySelector('#my-modal');
const closeBtn = document.querySelector('.close');

const inpTitle = document.querySelector('.title');
const inpEditor = document.getElementById('editor');
const saveBtn = document.querySelector('.saveBtn');
const lsOutput = document.querySelector('.lsOutput');
const navUL = document.querySelector('.navbar-nav');
const mainDIV = document.querySelector('#main');
const favBtn = document.querySelector('.favSecBtn');
const noteList = document.querySelector(".note-list");

let notesArr = JSON.parse(localStorage.getItem("notesArr"))
let activeNoteID;

navUL.addEventListener('mouseenter', function (evt) {
    //console.log("MOUSE is on nav!")
    mainDIV.style = "margin-left: 200px;"
})
navUL.addEventListener('mouseleave', function (evt) {
    //console.log("MOUSE is off nav!")
    mainDIV.style = "";
})
// Events
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
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
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
    theme: 'snow'
});

function printDiv() {
    var editorContent = quill.container.firstChild.innerHTML
    var content = window.open('', 'PRINT', 'height=500,width=500');
    content.document.write(editorContent);
    content.document.close();
    content.print();
}

function openNav() {
    document.getElementById("sideNav").style.display = "block";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("sideNav").style.display = "none";
}


/* function newNote() {
    let noteInfo = {
        id: Date.now(),
        title: '',
        content: quill.getContents(),
        text: quill.getTexts(),
        favourite: false
    }
    notesArr.push(noteInfo);
    saveNotes();
    */
   function saveNotes() {
    localStorage.setItem('notesArr', JSON.stringify(notesArr))
}
function renderNotesList(arr) {
    noteList.innerHTML = '';
    arr.forEach(function (note) {
        noteList.appendChild(noteObjToHTML(note));
    })
}

function setActiveNoteID(id) {
    activeNoteID = id;
}

   function createNote() {
    let noteObj = {
        id: Date.now(),
        title: inpTitle.value,
        author: '',
        content: quill.getContents(),
        text: quill.getText(),
        favourite: false
    }
    notesArr.push(noteObj);
    saveNotes();
    setActiveNoteID(noteObj.id);
    renderNotesList(notesArr);
}

saveBtn.onclick = function () {
    const savedTitle = inpTitle.innerHTML; //varför .innerHTML och inte .value
    const savedEditor = inpEditor.innerHTML;


    if (savedTitle && savedEditor) {
        localStorage.setItem(activeNoteID, JSON.stringify({ title: savedTitle, content: savedEditor }));
        location.reload();
    }
};
/*saveBtn.addEventListener('click', function () {
    console.log("cNB func ran");
    createNote();
    renderNotesList(notesArr);
})*/


/*save.addEventListener('click', () => { // vid klick på knappen försvinner texten
    let savedText = editor.innerHTML;
    let savedTitleText = title.innerHTML;
    let savedAuthorText = author.innerHTML;
    let savedAllText = document.createElement('DIV') // tilldelat en nyskapad div variabeln 'savedAllText'
    editor.innerHTML = '';//  'textrutan' ska bli tom efter save
    author.innerHTML = 'Author'; // Vad som ska stå vid 'author' efter save
    title.innerHTML = 'Ny titel' // Vad som ska stå vid titeln efter save
    savedAllText.innerHTML = `<h3>${savedTitleText}</h3> <p>${savedAuthorText}</p> <p>${savedText}</p>`; // variablerna för titel, author och editor tilldelas i en template. De läss in i den nyskapta divens variabel innehåll 'savedAllText.innerHTML'
    oldNotes.appendChild(savedAllText); // till sidospalten('oldNotes') läggs nu till en html childoch det är min nyskapta DIV variabel 'savedAllText'

})*/


/*noteList.addEventListener('click', function (evt) {
    let clickedLI = evt.target.closest('li');
    let clickedID = clickedLI.getAttribute('data-id');
    setEditor(readNote(clickedID));
})*/


