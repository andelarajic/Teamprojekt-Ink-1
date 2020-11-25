function myFunction() {
    var x = document.getElementById("myTopnav1");
    if (x.className === "topnav1") {
        x.className += " responsive";
    } else {
        x.className = "topnav1";
    }
}
<<<<<<< HEAD
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
=======

var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
  });
>>>>>>> c6f222a025cc512cb8a46255ca12e45bc8782d9a
