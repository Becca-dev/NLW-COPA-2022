// criando as funções 

function createGame(player1, hour, player2 ) {
    return `
        <li>
             <img src="./assets/icon=${player1}.svg" alt="Logo da bandeira do ${player1}"/>
            <strong> ${hour} </strong>
            <img src="./assets/icon=${player2}.svg" alt="Logo da bandeira da ${player2}"/>
        </li>
    `
}

// criação dos cards do calendario dos jogos

let delay = -0.4;
function createCard (date, day, games) {
    delay = delay + 0.5;
    return`
        <div class="card" style="animation-delay: ${delay}s">
          
            <h2> ${date} <span> ${day} </span></h2>

                <ul>
                    ${games}
                </ul>
        </div> 
    `

}

document.querySelector("#cards").innerHTML = 
   
    createCard("20/11", "Domingo", createGame("qatar", "13:00","Ecuador")) +

    createCard("21/11", "Segunda", createGame ("England", "10:00", "Iran") +
    createGame ("Senegal", "13:00","Netherlands") +
    createGame ("United States","16:00","Wales"))+

    createCard("22/11", "Terça", createGame("Argentina", "07:00", "Saudi Arabia") +
    createGame("Denmark","10:00","Tunisia") +
    createGame("Mexico","13:00","Poland")+ createGame("France","16:00","Australia")) +
 

    createCard ("23/11", "Quarta", createGame("Morocco", "07:00","Croatia") +
    createGame ("Germany","10:00","Japan") + 
    createGame ("Spain","13:00","Costa rica") +
    createGame ("Belgium","16:00","Canada")) +
    
    createCard ("24/11", "Quinta", createGame ("Switzerland", "07:00", "Cameroon") + 
    createGame ("Uruguay", "10:00", "South Korea") +
    createGame ("Portugal","13:00","ghana") +
    createGame ("Brazil","16:00","Serbia")) +
    
    createCard ("25/11", "Sexta", createGame ("Wales", "07:00", "iran") +
    createGame ("qatar","10:00","senegal") + 
    createGame ("Netherlands","13:00","Ecuador") +
    createGame ("England", "16:00", "United States")) +

    createCard("26/11", "Sabado", createGame ("Tunisia", "07:00", "Australia") + 
    createGame ("poland","10:00","Saudi Arabia") +
    createGame ("france","13:00","Denmark") + 
    createGame ("argentina","16:00","mexico")) +
 

    createCard ("27/11", "Domingo", createGame ("japan","07:00","costa Rica") +
    createGame ("belgium", "10:00", "morocco") + 
    createGame ("croatia", "13:00","canada") +
    createGame ("spain","16:00","germany")) +
    
    createCard ("28/11", "Segunda", createGame ("Cameroon", "07:00", "serbia") + 
    createGame ("south korea","10:00","ghana") +
    createGame ("brazil","13:00","Switzerland") +
    createGame ("portugal","16:00","uruguay")) +

    createCard ("29/11", "Terça", createGame ("ecuador", "12:00", "senegal") + 
    createGame ("Netherlands","12:00","qatar") +
    createGame ("iran","16:00","United States") +
    createGame ("Wales","16:00","england")) +

    createCard ("30/11", "Quarta", createGame ("tunisia", "12:00", "france") + 
    createGame ("australia","12:00","denmark") +
    createGame ("poland","16:00","argentina") +
    createGame ("Saudi Arabia","16:00","mexico")) +

    createCard ("01/12", "Quinta", createGame ("croatia", "12:00", "belgium") + 
    createGame ("canada","12:00","Morocco") +
    createGame ("Japan","16:00","Spain") +
    createGame ("Costa Rica","16:00","Germany")) +

    createCard ("02/12", "Sexta", createGame ("South Korea", "12:00", "Portugal") + 
    createGame ("Ghana","12:00","Uruguay") +
    createGame ("Serbia","16:00","Switzerland") +
    createGame ("Cameroon","16:00","Brazil")) 
