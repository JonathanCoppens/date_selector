const date = new Date;
const select_day = document.querySelector('#day');
const select_month = document.querySelector('#month');
const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre' ,'Novembre' ,'Décembre'];
const select_year = document.querySelector('#year');
const yearDate = date.getFullYear();

console.log(yearDate);

for(let i = 1; i <= 31; i++ ) { // crée une boucle permettant de 
    
    const option = document.createElement('option');
    
    option.value = i; // atttribue la valeur de i à option

    option.innerText = i; // affiche les différentes valeurs dans le selecteur

    select_day.append(option);
    
    console.log(option);
}

for(let i = 0; i <= month.length; i++) {

    const option = document.createElement('option'); 

    option.value = i;

    option.innerText = month[i];

    select_month.append(option);
    
    console.log(option);
}

/* for(let i = 0; i < month.length; i++ ) {
    const option = document.createElement('option');

    option.value = i;

    option.innerText = month[i];

    switch(select_month.value) { // vérifie le mpois sélectionné
        case 1:                  // les numéros corréspondent aux éléments du tableau (1 =janvier ...)
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            select_day.innerHTML = ''; // efface le contenu du sélecteur de jour
            for(let j = 1; j < month.length; j++) {
                
                const option = document.createElement('option');

                option.value = j;
                option.innerText = j;
                select_day.append(option);
            }
            break;
        case 2: // correspond à février
        if(yearDate % 4 === 0 && (yearDate % 100 !== 0 || yearDate % 400 === 0)) {
            select_day.innerHTML = ''; // efface le contenu du sélecteur de jour
            for(let j = 1; j <= 29; i++) { //ajoute 29 options

                const option = document.createElement('option');

                option.value = j;
                option.innerText = j;
                select_day.append(option);

                }
            } else { //année non bissextile
                select_day.innerHTML = ''; // efface le contenu du sélecteur de jour
                for(let j = 1; j <= 28; j++) {
                    const option = document.createElement('option');
                    option.value = j;
                    option.innerText = j;
                    select_day.append(option);
                }
            }
            break;
        default: //les autres mois
        select_day.innerHTML = ''; // efface le contenu du sélecteur de jour
        for(let j; j <= 30; j++) { // ajoute 30 options
            const option = document.createElement ('option');
            option.value = j;
            option.innerText = j;
            select_day.append(option);
        }
        }
        console.log(option);
    } */

    /* select_month.append(option); */

    /* console.log(option); */


for(let i = yearDate; i >= 1923; i-- ) {

    const option = document.createElement('option');

    option.value = yearDate;

    option.innerText = i;

    select_year.append(option);

    console.log(option);
}

