const countLi = document.querySelectorAll('li.item');
console.log('Number of categories:', countLi.length);

countLi.forEach(function (item, index) {
    console.log('Category:', item.firstElementChild.outerText);
    console.log('Elements:', item.lastElementChild.children.length);
  });