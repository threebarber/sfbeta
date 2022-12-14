/*document.getElementById("newsButton").addEventListener("click", function(){
    loadArticles();
 });

 document.getElementById("blogButton").addEventListener("click", function(){
    loadBlogs();
 });
*/


async function getData(url) {
    const response = await fetch(url);

    return response.json();
}


function loadArticles() {

    /*document.getElementById("newsButton").disabled = true;
    document.getElementById("blogButton").disabled = false;*/

    /*document.querySelector(".mainDiv").innerHTML = "";*/

    (async () => {
        const data = await getData("https://api.spaceflightnewsapi.net/v3/articles")

        console.log(data);

        data.forEach(article => {

            console.log(article["id"]);
            console.log(article["title"]);

            var articleDiv = document.createElement("div");
            articleDiv.classList.add("articleDiv");
            articleDiv.classList.add("news");

            articleDiv.onclick = function () {
                window.open(article["url"], '_blank').focus();

            }


            var articleImage = document.createElement("img");
            articleImage.src = article["imageUrl"];
            articleImage.classList.add("articleImg");
            articleDiv.appendChild(articleImage);


            var divider = document.createElement("hr");
            articleDiv.appendChild(divider);


            var articleTitle = document.createElement("h4");
            articleTitle.innerText = article["title"];
            articleDiv.appendChild(articleTitle);


            var articleSum = document.createElement("p");
            var shortSummary = shortenSummary(article["summary"]);
            articleSum.innerText = shortSummary;
            articleDiv.appendChild(articleSum);


            var articleSec = document.querySelector(".News")

            articleSec.appendChild(articleDiv);
        });


    })()
}



function loadBlogs() {
    /*document.getElementById("blogButton").disabled = true;
    document.getElementById("newsButton").disabled = false;*/


    /* document.querySelector(".mainDiv").innerHTML = "";*/

    (async () => {
        const data = await getData("https://api.spaceflightnewsapi.net/v3/blogs")

        console.log(data);

        data.forEach(article => {

            console.log(article["id"]);
            console.log(article["title"]);

            var articleDiv = document.createElement("div");
            articleDiv.classList.add("articleDiv");
            articleDiv.classList.add("blog");

            articleDiv.onclick = function () {
                window.open(article["url"], '_blank').focus();

            }


            var articleImage = document.createElement("img");
            articleImage.src = article["imageUrl"];
            articleImage.classList.add("articleImg");
            articleDiv.appendChild(articleImage);


            var divider = document.createElement("hr");
            articleDiv.appendChild(divider);


            var articleTitle = document.createElement("h4");
            articleTitle.innerText = article["title"];
            articleDiv.appendChild(articleTitle);


            var articleSum = document.createElement("p");
            var shortSummary = shortenSummary(article["summary"]);
            articleSum.innerText = shortSummary;
            articleDiv.appendChild(articleSum);


            var articleSec = document.querySelector(".Blogs")

            articleSec.appendChild(articleDiv);
        });


    })()
}


/* shorten summary text so that it will fit better as some are very long*/

function shortenSummary(summaryText) {

    const wordCount = summaryText.split(' ').length;

    if (wordCount >= 60){

        let shortSummary = summaryText.split(' ').slice(0, wordCount * .60).join(' ') + "...";
        return shortSummary;
    }
    else{
        let shortSummary = summaryText.split(' ').slice(0, wordCount * .80).join(' ') + "...";
        return shortSummary;
    }

}


loadBlogs();
loadArticles();
/*for (let key in article) {
console.log(`${article}: ${article[key]}`);
}*/

