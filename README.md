# Rich Text Editor
![App preview](preview.jpg)
Simple WYSIWYG editor.

## How to start
To use app just open `src/index.html` in your favourite browser,<br>
or check it [LIVE](https://codepen.io/marcelmos/pen/vYxYaBw) on my Codepen.

### Saving/Opening File
App saving your documents in JSON file format, but to open file you can use `.txt` or `.json` format.

## About code
To allow user to save file without page reload I used:
> `<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>`

This link allow me to use `saveAs()` function which is part of AJAX.

## Author
- Marcel Moś - Developer