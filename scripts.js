

function retrieveArticleData(){
    const getJSON = async url => {
        const response = await fetch(url);
        return response.json(); // get JSON from the response 
      }
      
      console.log("Fetching data...");
      getJSON("https://api.spaceflightnewsapi.net/v3/articles")
        .then(data => console.log(data));
}


