let url = "http://localhost:3000/api/products";
let items = document.getElementById('items');
//localStorage.setItem('monPrenom', 'Romain');
//items.innerHTML = localStorage.getItem('monPrenom');


fetch(url).then((data)=>{
    data.json().then((elements)=>{
        elements.forEach(element => {
            let a = document.createElement('a');
            a.href ="./product.html?id="+element._id;
            let article = document.createElement("article");
            let img = document.createElement('img');
            img.src = element.imageUrl;
            img.alt=element.altTxt;

            let h3=document.createElement('h3');
            h3.innerHTML = element.name;
            h3.classList.add("productName");

            let p=document.createElement('p');
            p.innerHTML=element.description;
            p.classList.add("productDescription");

            a.appendChild(article);
            article.appendChild(img);
            article.appendChild(h3);
            article.appendChild(p)

            items.appendChild(a);
        });
    })
})
