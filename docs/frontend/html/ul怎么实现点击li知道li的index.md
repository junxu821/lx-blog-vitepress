# ul怎么实现点击li知道li的index
```javascript

document.getElementById('myList').addEventListener('click', function(event) {
  if (event.target && event.target.nodeName === 'LI') {
    var index = Array.prototype.indexOf.call(this.children, event.target);
    console.log('Clicked item index:', index);
  }
});
```
