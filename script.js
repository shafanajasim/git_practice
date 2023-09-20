function myFunction() {
    idArray = new Array()
    idArray [1] = "And Whoever turns away from My remembrance -indeed.he will have a depressed life"
    idArray [2] = "No one besides Allah can rescue a soul from hardship"
    idArray [3] = "Indeed,the patient will be given their without account"
    idArray [4] = "For indeed,with hardship will be ease"
    idArray [5] = "And we have created you in pairs"

    document.getElementById("reminder").onclick = myFunction;
  randomParagraph = Math.floor(Math.random()*5);

  document.getElementById("result").innerHTML = idArray[randomParagraph + 1];     
  
}