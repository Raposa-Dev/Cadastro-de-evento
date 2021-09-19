let inputName = document.getElementById("input-name");
let inputAge = document.getElementById("input-age");
let inputdate = document.getElementById("input-date");
let participants = document.getElementById("count-participants");
let countParticipants = 99;


function ckeckDate() {

    if (countParticipants < 100){
        if(inputdate.value == "2021-09-08" && inputAge.value >= 18) {
            alert(`
            ${inputName.value} cadastro concluido!
            Para o dia ${inputdate.value}
            `);

            countParticipants++;
        
        } else if (inputAge.value === "" || inputName.value === "" || inputdate.value === ""){
            alert(`
                Preencha os campos!
            `);
        } else if(inputAge.value <= 17) {
            alert(`
            ${inputName.value} cadastro não pode ser concluido!
            Menor de idade!
            `);
        } else {
            alert(`
                ${inputName.value}
                Verifique os dados!
            `);
        };
        
    } else {
        alert("Número excedido de participantes no evento")
    };
    

    inputName.value = "";
    inputAge.value = "";
    participants.innerText = countParticipants;
};