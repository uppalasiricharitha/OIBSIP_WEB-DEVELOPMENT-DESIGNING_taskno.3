/*==========================================
        THERMOX AI
        JavaScript Logic
==========================================*/


// Selecting HTML Elements

const temperatureInput = document.getElementById("temperature");

const unitSelect = document.getElementById("unit");

const convertBtn = document.getElementById("convertBtn");

const resetBtn = document.getElementById("resetBtn");


const celsiusResult = document.getElementById("celsiusResult");

const fahrenheitResult = document.getElementById("fahrenheitResult");

const kelvinResult = document.getElementById("kelvinResult");


const errorMessage = document.getElementById("error");
// Button Events


convertBtn.addEventListener("click", convertTemperature);


resetBtn.addEventListener("click", resetConverter);


// Enter key support

temperatureInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        convertTemperature();

    }

});
/*==========================================
        CONVERSION FUNCTION
==========================================*/


function convertTemperature(){

    let value = temperatureInput.value;

    let unit = unitSelect.value;


    if(!validateInput(value, unit)){

        return;

    }


    value = Number(value);


    let celsius;
    let fahrenheit;
    let kelvin;



    if(unit === "celsius"){

        celsius = value;

        fahrenheit = (value * 9/5) + 32;

        kelvin = value + 273.15;

    }



    else if(unit === "fahrenheit"){


        fahrenheit = value;

        celsius = (value - 32) * 5/9;

        kelvin = celsius + 273.15;


    }



    else if(unit === "kelvin"){


        kelvin = value;

        celsius = value - 273.15;

        fahrenheit = (celsius * 9/5) + 32;


    }



    showResults(
        celsius,
        fahrenheit,
        kelvin
    );

}
/*==========================================
        VALIDATION
==========================================*/


function validateInput(value,unit){


    if(value === ""){

        errorMessage.textContent =
        "Please enter temperature.";

        return false;

    }



    if(isNaN(value)){


        errorMessage.textContent =
        "Please enter a valid number.";

        return false;

    }



    value = Number(value);



    if(unit==="celsius" && value < -273.15){

        errorMessage.textContent =
        "Celsius cannot be below -273.15°C";

        return false;

    }



    if(unit==="fahrenheit" && value < -459.67){

        errorMessage.textContent =
        "Fahrenheit cannot be below -459.67°F";

        return false;

    }



    if(unit==="kelvin" && value < 0){

        errorMessage.textContent =
        "Kelvin cannot be below 0K";

        return false;

    }



    errorMessage.textContent="";


    return true;


}
/*==========================================
        DISPLAY RESULTS
==========================================*/


function showResults(c,f,k){


    celsiusResult.textContent =
    c.toFixed(2)+" °C";


    fahrenheitResult.textContent =
    f.toFixed(2)+" °F";


    kelvinResult.textContent =
    k.toFixed(2)+" K";


    temperatureMessage(c);
     
    animateResults();


}
/*==========================================
        TEMPERATURE INTELLIGENCE
==========================================*/


function temperatureMessage(c){


    if(c < 0){

        console.log("🥶 Freezing Temperature");

    }


    else if(c < 20){

        console.log("❄ Cool Temperature");

    }


    else if(c < 35){

        console.log("😊 Comfortable Temperature");

    }


    else{

        console.log("🔥 Hot Temperature");

    }


}
/*==========================================
        RESET
==========================================*/


function resetConverter(){


    temperatureInput.value="";


    unitSelect.value="celsius";


    celsiusResult.textContent="--";


    fahrenheitResult.textContent="--";


    kelvinResult.textContent="--";


    errorMessage.textContent="";


}
/*==========================================
        RESULT ANIMATION
==========================================*/


function animateResults(){


    const cards =
    document.querySelectorAll(".result-card");


    cards.forEach(card=>{


        card.style.transform="scale(1.05)";


        setTimeout(()=>{

            card.style.transform="";

        },200);


    });


}