function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")



       //colocar img

    const img= document.querySelector ("#profile img")

    //substituir img

    if(html.classList.contains('light'))
    {img.setAttribute ('src','./assets/avatar-light.png')}
    else {img.setAttribute('src','./assets/avatar.png')}
}


    //function toogleMode() {
    //const html = document.documentElement
    //if(html.classList.contains('light')) {
    //html.classList.remove('light')} 
    //else {
    //html.classList.add('light')