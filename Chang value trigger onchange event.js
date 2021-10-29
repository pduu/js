// original : https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js

// for input element 

let input = document.querySelector('input');
var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
nativeInputValueSetter.call(input, 'Something value.');
var ev2 = new Event('input', { bubbles: true});
input.dispatchEvent(ev2);


// for textarea element
let textbox = document.getElementsByTagName('textarea')[0];
var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
nativeInputValueSetter.call(textbox, 'Somthing value.');
var ev2 = new Event('input', { bubbles: true});
textbox.dispatchEvent(ev2);

// then code, do someting , ex: click submit
