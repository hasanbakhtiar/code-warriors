// const text = document.querySelector('h1') as HTMLHeadingElement;
// const textOne = document.querySelector<HTMLHeadingElement>('h1');

const ul  = document.querySelector('ul') as HTMLUListElement;
fetch('https://rickandmortyapi.com/api/character')
.then((res:any)=>res.json())
.then((data:any)=>{
    let li:string = "";
    data.results.map((item:any)=>{
        li+=`<li><img src="${item.image}"/>${item.name}</li>`
    }) 
    ul.innerHTML = li;
})

