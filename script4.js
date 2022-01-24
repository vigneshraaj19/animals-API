


var title = document.createElement('h1');
title.innerHTML ="Animal Facts";
document.body.append(title);

async function facts() {
    await animal_detail("name","diet","habitat","lifespan","image_link");
    var img = document.createElement('img');
    img.setAttribute('src',animalImage);

    var name = document.createElement('div');
    name.innerHTML ="<b>Name: </b>" + animalName;
   
    var diet = document.createElement('div');
    diet.innerHTML = "<b>Diet: </b>" + animalDiet;

    var habitat = document.createElement('div');
    habitat.innerHTML = "<b>Habitat: </b>" + animalHabitat;

    var lifeSpan = document.createElement('div');
    lifeSpan.innerHTML = "<b>LifeSpan: </b>" + animalLifespan;

    document.body.append(img,name,diet,habitat,lifeSpan);
}

var animalName;
var animalDiet;
var animalHabitat;
var animalLifespan;
var animalImage;

async function animal_detail (_para1,_para2,_para3,_para4,_para5) {
    try {
        let fact = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
        let result = await fact.json();
        console.log(result);
        animalName = result[_para1];
        console.log(animalName);
        animalDiet = result[_para2];
        console.log(animalDiet);
        animalHabitat = result[_para3];
        console.log(animalHabitat);
        animalLifespan = result[_para4];
        console.log(animalLifespan);
        animalImage = result[_para5]
        console.log(animalImage);

    } catch (error) {
        console.log(error);
    }

}

