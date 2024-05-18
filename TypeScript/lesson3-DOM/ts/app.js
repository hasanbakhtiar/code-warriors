// const text = document.querySelector('h1') as HTMLHeadingElement;
// const textOne = document.querySelector<HTMLHeadingElement>('h1');
var ul = document.querySelector('ul');
fetch('https://rickandmortyapi.com/api/character')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var li = "";
    data.results.map(function (item) {
        li += "<li><img src=\"".concat(item.image, "\"/>").concat(item.name, "</li>");
    });
    ul.innerHTML = li;
});
