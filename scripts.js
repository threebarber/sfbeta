        
        async function getData(url) {
            const response = await fetch(url);

            return response.json();
        }


        function loadArticles(){
            
            (async () => {
                const data = await getData("https://api.spaceflightnewsapi.net/v3/articles")
              
                console.log(data);

                data.forEach(article => {
    
                    console.log(article["id"]);
                    console.log(article["title"]);

                    var articleDiv = document.createElement("div");
                    articleDiv.classList.add("articleDiv");


                    var articleImage = document.createElement("img");
                    articleImage.src = article["imageUrl"];
                    articleImage.classList.add("articleImg");
                    articleDiv.appendChild(articleImage);

                    var articleTitle = document.createElement("h3");
                    articleTitle.innerText = article["title"];
                    articleDiv.appendChild(articleTitle);   
                    
                    
                    var articleSum = document.createElement("p");
                    articleSum.innerText = article["summary"];
                    articleDiv.appendChild(articleSum);


                    var articleSec = document.querySelector(".mainDiv")
                    
                    articleSec.appendChild(articleDiv);
                });
            
            
            })()


            
        }


        /*for (let key in article) {
    console.log(`${article}: ${article[key]}`);
}*/


loadArticles();