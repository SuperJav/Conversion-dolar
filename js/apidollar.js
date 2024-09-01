const precioActuales=document.querySelectorAll(".precio")
const inputs=document.querySelectorAll(".input-calcular")


async function apiDollar() {
    let resultado=0
    let costoEuro=0
    let costoMexicano=0
    let costoautraliano=0

    try {
       const response = await fetch("https://api.frankfurter.app/latest?from=USD")
       const data =await response.json()
       costoEuro=data.rates.EUR;
       costoMexicano=data.rates.MXN;
       costoautraliano=data.rates.AUD;

       precioActuales[0].innerHTML=costoEuro
       precioActuales[1].innerHTML=costoMexicano
       precioActuales[2].innerHTML=costoautraliano
       
        
    } catch (error) {
        console.error("Hubo un error con la api",error)
    }

    inputs[0].addEventListener("input",()=>{
        resultado=inputs[0].value*costoEuro
        inputs[1].value=resultado
    })

    inputs[2].addEventListener("input",()=>{
        resultado=inputs[2].value*costoMexicano
        inputs[3].value=resultado
    })

    inputs[4].addEventListener("input",()=>{
        resultado=inputs[4].value*costoautraliano
        inputs[5].value=resultado
    })
}

