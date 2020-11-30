<<<<<<< HEAD
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
=======
<<<<<<<< HEAD:index.js

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
========
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let toolbarOptions = [
>>>>>>>> 837c83663a6975e43ec41ed8a2df1fa3813511df:mainSida.js
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

<<<<<<<< HEAD:index.js
function printDiv() { 
    var divContents = document.getElementById("editor").innerHTML; 
    var a = window.open('', '', 'height=500, width=500'); 
    a.document.write('<html>'); 
    a.document.write('<body >'); 
    a.document.write(divContents); 
    a.document.write('</body></html>'); 
    a.document.close(); 
    a.print(); 
} 
========


>>>>>>>> 837c83663a6975e43ec41ed8a2df1fa3813511df:mainSida.js
>>>>>>> 837c83663a6975e43ec41ed8a2df1fa3813511df
