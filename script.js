function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")



       //colocar img

    const img= document.querySelector ("#profile img")

    //substituir img

    if(html.classList.contains('light'))
    {img.setAttribute ('src','./assets/allana1.jpg')}
    else {img.setAttribute('src','./assets/allana2.jpg')}
}


    //function toogleMode() {
    //const html = document.documentElement
    //if(html.classList.contains('light')) {
    //html.classList.remove('light')} 
    //else {
    //html.classList.add('light')