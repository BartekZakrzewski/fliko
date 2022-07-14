// const resolutions = document.querySelector('#sol');
// const blocks = document.querySelector('.fliko-blok-container');

// let isOverRes = false;
// let isOverBlocks = false;

// resolutions.addEventListener("mousemove", (e) => {
//     if(screen.width > 991){
//         isOverRes = true;
//     }
// });    

// resolutions.addEventListener("mouseout", (e) => {
//     if(screen.width > 991){
//         isOverRes = false;
//     }
// });

// blocks.addEventListener("mousemove", (e) => {
//     if(screen.width > 991){
//         isOverBlocks = true;
//     }
// });    

// blocks.addEventListener("mouseout", (e) => {
//     if(screen.width > 991){
//         isOverBlocks = false;
//     }
// })

// document.querySelector('#body').addEventListener("mousemove", () => {
//     if(isOverBlocks || isOverRes){
//         blocks.style.display = 'flex';
//     } else {
//         blocks.style.display = 'none';
//     }
// });

// const text = document.querySelector('#js-text');
// const textCL = text.classList;
// const sc1 = 'col-md-7', sc2 = 'col-md-9';
 
// window.addEventListener('resize', () => {
//     if(screen.width > 1370 && !textCL.contains(sc1)){
//         if(textCL.contains(sc2)){
//             textCL.remove(sc2);
//             textCL.add(sc1);
//         } else {
//             textCL.add(sc1);
//         }
//     } else {
//         if(textCL.contains(sc1)){
//             textCL.remove(sc1);
//             textCL.add(sc2);
//         } else {
//             textCL.add(sc2);
//         }
//     }
// })