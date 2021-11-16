function Main(){
    const parameters = getParameters();
    const URL = buildURL(parameters);

    const result = httpGetDeath(URL);
    console.log(JSON.stringify(result));
    console.log(result);
    console.log(result["response"].total);
    numberDeath(result);
};

// Améliorer la fonction pour récupérer automatiquement les données
// Les retourner dans un array Key value pairs
function getParameters() {
    const listParameters = ['lastName', 'firstName', 'deathCountry', 'deathCity'];
    const parameters = {};

    for(let i = 0; i < listParameters.length; i++) {
        if(document.getElementById(listParameters[i]) != "") {
            parameters[listParameters[i]] = document.getElementById(listParameters[i]).value;
        }
    }

    return parameters
};

// test Token

function buildURL(parameters) {
    return URL = `https://deces.matchid.io/deces/api/v1/agg?firstName=${parameters["firstName"]}&lastName=${parameters["lastName"]}&deathCity=${parameters["deathCity"]}&deathCountry=${parameters["deathCountry"]}&fuzzy=false&aggs=firstName`;
};

function httpGetDeath(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}

function numberDeath(result) {
    document.getElementById("death").textContent = result["response"].total;
}

