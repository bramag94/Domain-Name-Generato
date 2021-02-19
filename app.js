let name = ["the", "our"]
let adj = ["great", "big"]
let noun = ["jagger", "racoon"]
let dominio = [".com",".org", ".net", ".ac.cr"]

function Generator(arrname,arradj,arrnoun,arrdominio) {
    let dominiosGenerados = [];
    //recorro el primer array name
    arrname.forEach((elementname) => {
        //recorro el segundo array ajd
        arradj.forEach((elementadj) => {
            //se recorre tercer array noun
            arrnoun.forEach((elementnoun) => {
                //se recorre cuarto elemento dominio
                arrdominio.forEach((elementdominio) => {
                    //concateno elementos
                    let str = elementname + elementadj + elementnoun + elementdominio;
                    dominiosGenerados.push(str); //adiciono dominios a array
                })

            })

        })
    })
  return dominiosGenerados;
}
console.log("Dominios-->",Generator(name,adj,noun,dominio))
