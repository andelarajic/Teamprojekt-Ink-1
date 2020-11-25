function myFunction() {
    var x = document.getElementById("myTopnav1");
    if (x.className === "topnav1") {
        x.className += " responsive";
    } else {
        x.className = "topnav1";
    }
}
/* var options = {
    //debug: 'info',
    modules: {
        toolbar: '#toolbar'
    },
    placeholder: 'Compose an epic...',
    readOnly: false,
    theme: 'snow'
};
var editor = new Quill('#editor', options); */

var quill = new Quill('#editor', {
    theme: 'snow'
});
