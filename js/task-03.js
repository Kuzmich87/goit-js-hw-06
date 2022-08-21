const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




//V1 Через map и join
// const imgRev = document.querySelector('.gallery')
// const makeGallary = (images) => 
//    images
//     .map(({url,alt}) => `<li><img src="${url}" alt="${alt}"></li>`)
//     .join("");
// imgRev.insertAdjacentHTML("afterbegin", makeGallary(images));
 // V2 Через reduce
const imgRev = document.querySelector('.gallery')  
const makeGallary = (images) =>
  images.reduce((acc, { url, alt }) => acc + `<li><img src="${url}" alt="${alt}" width="350"></li>`, "");
imgRev.insertAdjacentHTML("afterbegin", makeGallary(images));

imgRev.style.cssText += 
`display: flex;
 align-items: center; 
 justify-content:space-between;
 list-style: none;`
console.log(makeGallary(images));
