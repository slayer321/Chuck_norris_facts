showFact=()=>{
    const displayFacts = document.querySelector(".display-facts")
    const image= document.querySelector('.image-asset')
    image
    const url="https://api.chucknorris.io/jokes/random";
    fetch(url)
        .then(response =>{
            return response.json()
         })
         .then(responseData=>{
             console.log("response",responseData)
             displayFacts.innerHTML=responseData.value;
         } )

}