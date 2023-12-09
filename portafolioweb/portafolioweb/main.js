let app= document.getElementById('typewriter');

let typewriter=new typewriter(app,{
    loop:true,
    delay:75,
    cursor:"<span style='color:#fb4993;'>|</span>",

} );

typewriter
pauseFor(2500)
typeString('<span style="color:#fb4993;">Tengo conocimientos de programación, y hago paginas web.</span>')
pauseFor(200)
deleteChars(10)
StaticRange();