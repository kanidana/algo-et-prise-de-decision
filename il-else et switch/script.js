// ********************IF ELSE \ SWITCH...CASE**********************************

// Vérificateur d’année bissextile : créez une fonction qui prend une année en entrée 
// et détermine s’il s’agit d’une année bissextile ou non.
//  Les années bissextiles sont divisibles par 4, mais pas par 
// 100 à moins qu’elles ne soient également divisibles par 400

let bissextile = (annee) =>{
    if(annee%4 === 0 ){
        return console.log(`${annee} est une annee bissextile`);
    }
    else if(annee%100 === 0){
        return console.log(`${annee} n'est pas une annee bissextile`); 
    }
    else if(annee%400 === 0){
        return console.log(`${annee} est une annee bissextile`);
    }
    else{
        return console.log(`${annee} n'est pas une annee bissextile`); 
    }
}
bissextile(2022);


// Prix des billets : Écrivez un programme qui invite l’utilisateur 
// à entrer son âge, puis détermine le prix d’un billet de cinéma 
// en fonction des critères suivants :

// Enfants (< = 12 ans) : 10 $
// Adolescents (13-17 ans) : 15 $
// Adultes (> = 18 ans) : 20 $

let cinema = ()=>{
    let childage = prompt("veuillez entrer votre age s'il vous plait")
    switch(true){
        case(childage <= 12) :
            console.log(`le prix du billet pour vous est de 10$`)
            break;
        case(childage >=13 && childage <= 17) :
            console.log(`le prix du billet pour vous est de 15$`)
            break;
        case(childage>= 18) :
            console.log(`le prix du billet pour vous est de 20$`)
            break;
        default:
            console.log("veuillez entrez un nombre")
    }
}
cinema()

// Conseiller en vêtements météo : Élaborez un programme qui 
// demande à l’utilisateur la température actuelle et s’il 
// pleut ou non. Sur la base de ces informations, conseillez 
// l’utilisateur sur les vêtements à porter.

let conseilMeteoVet = () => {

    let temperature = prompt("quelle temperature fait-il actuellement?")
    let pluie = prompt("est-ce qu'il pleut presentement?")

    if(temperature >= 25 && pluie === "non"){
        return console.log(`
            Matières légères et respirantes : Privilégiez le lin, le coton et le Tencel. Ces matières permettent 
                à la peau de respirer et évitent la surchauffe.
            Couleurs claires : Les couleurs claires reflètent la lumière du soleil et gardent votre corps plus frais.
            Vêtements amples : Les vêtements amples permettent une meilleure circulation de l’air autour de votre corps.
            `)
    }
    else if(temperature >= 15 && temperature <= 25 && pluie === "oui"){
        return console.log(`
            Couches légères : Portez des couches que vous pouvez enlever ou ajouter selon les variations de température. Par exemple, un t-shirt avec une veste légère.
            Matières naturelles : Le coton et le bambou sont de bons choix car ils sont confortables et respirants.
            `)
    }

    if(temperature < 15 && pluie === "oui"){
        return console.log(`
            Couches multiples : Utilisez la technique de l’oignon en superposant plusieurs couches de vêtements. 
            Commencez par une couche de base en matière synthétique pour évacuer l’humidité,
            ajoutez une couche isolante comme la laine, et terminez par une couche extérieure coupe-vent et imperméable2.
            Accessoires : N’oubliez pas les gants, les écharpes, le parapluie ou vote impermeable et les bonnets pour protéger les extrémités du froid.
            `)
    } 
    else if(temperature < 15 && pluie === "non"){
        return console.log(`
            Couches multiples : Utilisez la technique de l’oignon en superposant plusieurs couches de vêtements. Commencez par une couche 
            de base en matière synthétique pour évacuer l’humidité, ajoutez une couche isolante comme la laine, et terminez par une couche extérieure coupe-vent et imperméable2.
            Accessoires : N’oubliez pas les gants, les écharpes et les bonnets pour protéger les extrémités du froid.
            `);
    }

    if (temperature < 0 && pluie === "oui") {
        return console.log(`
            Vêtements thermorégulateurs : Ces vêtements sont conçus pour maintenir une température corporelle stable en évacuant la transpiration et en conservant la chaleur2.
            Matières isolantes : La laine mérinos et les fibres synthétiques comme le polyester sont excellentes pour l’isolation thermique.
            `)
        
    } 
    else if(temperature < 0 && pluie === "non"){
        return console.log(`
            Vêtements thermorégulateurs : Ces vêtements sont conçus pour maintenir une température corporelle stable en évacuant la transpiration et en conservant la chaleur2.
            Matières isolantes : La laine mérinos et les fibres synthétiques comme le polyester sont excellentes pour l’isolation thermique.
            `)
        
    }

    else{
        return console.log(`
            
            aller sur notre site pour en savoir plus et toujours etre habille de 
            maniere adapte quelque soit le temps.
            site: https://weather.com/?Goto=Redirected
            
            `)
    }

}

conseilMeteoVet()






