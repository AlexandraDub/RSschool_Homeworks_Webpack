import "./index.css"
import JS_IMAGE from './assets/ava11.jpg'
console.log('Hello World!');

const jsImageHtml = document.createElement('img')
jsImageHtml.className = 'js-image'
jsImageHtml.src = JS_IMAGE
document.body.append(jsImageHtml)