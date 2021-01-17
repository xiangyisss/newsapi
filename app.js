let express = require('express')
let cors = require('cors')
let app = express()
 
app.use(cors())

const inputfield = document.getElementById('inputfield');
const search = document.getElementById('search');
const paragraph = document.getElementById('paragraph');

function newarr(article) {
    let div = document.createElement('div')
    let author = document.createElement('p')
    let description = document.createElement('p')
    author.innerHTML = article.author
    description.innerHTML = article.description
    author.appendChild(description)
    div.appendChild(author)
    paragraph.appendChild(div)
}

async function getnews (news){
    try{
        const livenews = await fetch('https://newsapi.org/v2/sources?apiKey=8e5dedc90a56424884c2f4a562cb685a', {mode: 'no-cors'});
        if(livenews.ok){
            paragraph.innerHTML = ''
            const worldnews = await livenews.json();
            console.log(worldnews);      
            worldnews.articles.map(item => {
                newarr(item)
            })
        }
    } catch(error) {
        console.log(error);
    }
}

search.addEventListener('click', () => {
    getnews(inputfield.value)
})

