// Get DOM Elements
const popup = document.querySelector('#jsPopup');
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

if (!notesArr) {
    notesArr = []
}

notesArr.forEach(note => {
    savedAtSideNav(note.title, note.text)

});



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
        title: inpTitle.innerText,
        content: quill.getContents(),
        text: quill.getText(),
        favourite: false
    }
    notesArr.push(noteObj);
    saveNotes();
    setActiveNoteID(noteObj.id);
    /* renderNotesList(notesArr); */
}

function savedAtSideNav(savedTitleText, savedText) {
    /*   let savedText = quill.getText();
      let savedTitleText = inpTitle.innerHTML; */
    let savedAllText = `${savedTitleText} ${savedText}`
    let list = document.createElement('li')
    list.innerHTML = savedAllText

    noteList.appendChild(list);
    noteList.style.listStyleType = 'none';
};

function noteObjToHTML(noteObj) {
    // givet ett noteObj IN, returnera HTML
    let LI = document.createElement('li');
    LI.setAttribute('data-id', noteObj.id);
    LI.innerHTML = `<span>${noteObj.title}</span><p>${noteObj.text}</p>`
    return LI
}

noteList.addEventListener('click', function (sideBar) {
    if (sideBar.target && sideBar.target.id == 'brnPrepend') {
        inpTitle.innerText = notesArr.find(note => note.id == id).title
        let noteObj = inpTitle.innerText;
        noteObj.favourite = !noteObj.favourite;
    }
});

function toggleFav(id) {
    inpTitle.innerText = notesArr.find(note => note.id == id).title
    let noteObj = inpTitle.innerText;
    noteObj.favourite = !noteObj.favourite;
    /* saveNotes(); */
}

/* quill.setContents(notesArr[0].content)
inpTitle.innerText = notesArr.find(note => note.id == id).title */

saveBtn.onclick = function () {
    const savedTitle = inpTitle.innerText;
    const savedEditor = quill.getText();
    createNote()
    savedAtSideNav(savedTitle, savedEditor)

};

//POPUP Funktioner 
// Events

closeBtn.addEventListener('click', closePopup);
window.addEventListener('click', outsideClick);

// Open
function openPopup() {
    popup.style.display = 'block';
}

// Close
function closePopup() {
    popup.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
}
// POPUP FUNKTIONER SLUT

// NAV FUNKTIONER 
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openNav() {
    document.getElementById("sideNav").style.display = "block";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("sideNav").style.display = "none";
}

navUL.addEventListener('mouseenter', function (evt) {
    //console.log("MOUSE is on nav!")
    mainDIV.style = "margin-left: 200px;"
})
navUL.addEventListener('mouseleave', function (evt) {
    //console.log("MOUSE is off nav!")
    mainDIV.style = "";
})
// NAV FUNKTIONER SLUT

// QUILL FUNKTIONER 
let toolbarOptions = [
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
// QUILL FUNKTIONER SLUT

// PRINT FUNKTIONER 
function printDiv() {
    var editorContent = quill.container.firstChild.innerHTML
    var content = window.open('', 'PRINT', 'height=500,width=500');
    content.document.write(editorContent);
    content.document.close();
    content.print();
}
// PRINT FUNKTIONER SLUT

/* function fromStorage() {

    let notesArrStr = localStorage.getItem(activeNoteID, JSON.stringify({ title: savedTitle, content: savedEditor }));
    if (!notesArrStr) {
        return;
    }
    notesArr = JSON.parse(notesArrStr);
    savedAtSideNav()
}; */

/* saveBtn.addEventListener('click', function () {
    console.log("cNB func ran");
    createNote();
    renderNotesList(notesArr);
})
 */


