var info: number = 5;
// const infoArr:number[] = [1,2,3,4,5];
var infoArr: Array<number | string> = [1, 2, 3, 4, 5, "Hello"];

// type infoType={
//     title:string,
//     price:number,
//     stock:boolean
// }

interface infoType {
    title: string;
    price: number;
    stock: boolean;
}

var infoObj: infoType = {
    title: "test",
    price: 300,
    stock: true
}
console.log(infoArr);

