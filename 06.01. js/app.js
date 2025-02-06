var icons = [
    {
     icon: "fa-solid fa-leaf",
     header: "AWESOME ICONS",
     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi odio nulla, tempora obcaecati
                sint neque quam accusantium rerum dolor labore recusandae modi suscipit omnis dicta quibusdam temporibus
                in delectus iste, illo deserunt inventore reiciendis impedit! Expedita dolore nesciunt unde.`,
     handle: "READ MORE"
    },
    {
     icon: "fa-solid fa-mobile-screen",
     header: "AWESOME ICONS",
     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi odio nulla, tempora obcaecati
                sint neque quam accusantium rerum dolor labore recusandae modi suscipit omnis dicta quibusdam temporibus
                in delectus iste, illo deserunt inventore reiciendis impedit! Expedita dolore nesciunt unde.`,
     handle: "READ MORE"
    },
    {
     icon: "fa-solid fa-car-battery",
     header: "AWESOME ICONS",
     desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi odio nulla, tempora obcaecati
                sint neque quam accusantium rerum dolor labore recusandae modi suscipit omnis dicta quibusdam temporibus
                in delectus iste, illo deserunt inventore reiciendis impedit! Expedita dolore nesciunt unde.`,
     handle: "READ MORE"
    }
 ]
 
 function container(x){
     var cardElement = document.querySelector(".main")
     cardElement.innerHTML += `
         <div class="icons">
             <div class ="icon">
                 <i class="${x.icon}"></i>
                 <h1>${x.header}</h1>
             </div>
             <p>${x.desc}</p>
             <button>${x.handle}</button>
         </div>`
 }
 for(var obj of icons){
     container(obj)
 }




 var pictures = [
    {
        image: "https://media.istockphoto.com/id/2163613064/photo/high-angle-view-of-people-walking-on-sidewalk-in-city-at-night.jpg?s=612x612&w=0&k=20&c=faSD-TmmAivZC8OkaMoaoN10xMikcfu-L0kHrdt1cZk=",
        header: "Welcome to the neon world",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
      
        image: "https://media.istockphoto.com/id/2165996062/photo/illuminated-city-street-and-buildings-at-night.jpg?s=612x612&w=0&k=20&c=-S0WDw6v5E1XipzkU5b-lUiL-eUePAWCi8q4hjNR5-8=",
        header: "Welcome to the neon world",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
        image: "https://media.istockphoto.com/id/1089669014/photo/streets-of-hongkong-at-night.jpg?s=612x612&w=0&k=20&c=0GPgGM-HsG1Q5AhlC6sg5IBJxmpldQDhNMQSWi8N_zw=",
        header: "Welcome to the neon world",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
        image: "https://media.istockphoto.com/id/2163612359/photo/city-street-at-night.jpg?s=612x612&w=0&k=20&c=TYuCh2F-MWOUX_bYvplmyWJePZ9wzzrhLWasUK7giUQ=",
        header: "Welcome to the neon world",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
        image: "https://media.istockphoto.com/id/1175666865/photo/china-ningbo-cityscape.jpg?s=612x612&w=0&k=20&c=HcqyG1KLUj_poFH4A7PPsBnujlj_0yRvKDUUz3Tl1Ns=",
        header: "Welcome to the neon world",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
        image: "https://media.istockphoto.com/id/181229132/photo/shanghai.jpg?s=612x612&w=0&k=20&c=5D02ubSLwq9AFMOWU3emdUOYW-UZSP-Zso3ACMr-da0=",
        header: "Welcome to the neon world",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    }
]
function creator(a){
    var elem = document.querySelector(".ynd")
    elem.innerHTML += `
        <div class="pict">
            <img src="${a.image}">
            <h1>${a.header}</h1>
            <p>${a.desc}</p>
        </div>`
}
for(var obj of pictures){
    creator(obj)
};