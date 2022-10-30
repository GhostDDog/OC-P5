// Essai 1
// const products = window.location.search.split("?").join("");
//     console.log(products); // affiche l'id avec "id=" devant

// let produitData = [];

// const fecthProduit = async () => {
//     await fetch(`http://localhost:3000/api/products/${products}`)
//     .then((res) => res.json())
//     .then((promise) => {
//     console.log(promise);
//     produitData = promise;
//     console.log(produitData); // affiche tout les produits
//     });
// };

// fecthProduit();

// const produitDisplay =async () => {
//     await fecthProduit();

//     document.getElementById("#item").innetHtml = `
//     <div id="card${produitData._id}"></div>
//     `
// };

// produitDisplay();


// Essai 2

const queryString_url_id = window.location.search;

const urlSearchParams = new URLSearchParams(queryString_url_id);

const id = urlSearchParams.get("id"); // affiche l'id sans "?id=" devant
console.log(id); 

fetch(`http://localhost:3000/api/products/${id}`).then(
    response => {
        response.json().then(
            element => {
                console.log(element);
                let img = document.createElement('img');
                let block = document.querySelector('.item__img');
                block.appendChild(img);
                img.src = element.imageUrl;
                img.alt = element.altTxt;
                
                document.getElementById('title').innerHTML=element.name;
                document.getElementById('price').innerHTML=element.price;
                document.getElementById('description').innerHTML=element.description;

                // -------------liste déroulante-------------- 
                let select = document.getElementById("colors");
                element.colors.forEach(function(color){
                    let option = document.createElement('option');
                    option.innerHTML = color;
                    option.value = color;
                    select.appendChild(option);
                 });
                

                localStorage.setItem('prénom', 'romain');
                })
            }
);
     


