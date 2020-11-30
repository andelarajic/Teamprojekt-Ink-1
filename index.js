
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
    var divContents = document.getElementById("editor").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body >');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
} 