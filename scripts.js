
async function getData(url) {
    const response = await fetch(url);

    return response.json();
}


function loadArticles() {

    (async () => {
        const data = await getData("https://api.spaceflightnewsapi.net/v3/articles")

        console.log(data);

        data.forEach(article => {

            console.log(article["id"]);
            console.log(article["title"]);

            var articleDiv = document.createElement("div");
            articleDiv.classList.add("articleDiv");

            articleDiv.onclick = function () {
                window.open(article["url"], '_blank').focus();

            }


            var articleImage = document.createElement("img");
            articleImage.src = article["imageUrl"];
            articleImage.classList.add("articleImg");
            articleDiv.appendChild(articleImage);


            var divider = document.createElement("hr");
            articleDiv.appendChild(divider);


            var articleTitle = document.createElement("h3");
            articleTitle.innerText = article["title"];
            articleDiv.appendChild(articleTitle);


            var articleSum = document.createElement("p");
            var shortSummary = shortenSummary(article["summary"]);
            articleSum.innerText = shortSummary;
            articleDiv.appendChild(articleSum);


            var articleSec = document.querySelector(".mainDiv")

            articleSec.appendChild(articleDiv);
        });


    })()



}

/* shorten summary text so that it will fit better as some are very long*/

function shortenSummary(summaryText) {

    const wordCount = summaryText.split(' ').length;

    let shortSummary = summaryText.split(' ').slice(0, wordCount * .75).join(' ') + "...";

    return shortSummary;

}

/*for (let key in article) {
console.log(`${article}: ${article[key]}`);
}*/


loadArticles();