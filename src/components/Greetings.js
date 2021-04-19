import coffeepic from '../images/photo2.png'

function Greetings() {
    return (
        <div id="greetingDiv">
            <div class="left" className="w-50  d-inline-block">
                <img src={coffeepic}  id="coffeepic" alt="Logo" />
            </div>
            <div class="right" className="w-50  d-inline-block">
                <p id="greetingsText">Greetings!</p>
                <p id="text">I'm Kevin- a full-stack developer based in Houston, Texas. I know that there are countless developer websites and portfolios out there, so whatever brought you here, I offer a sincere thank you for visiting. If you have any questions please don't hesitate to reach out to me!</p>
                <button id="resumeBTN">Résumé</button>
            </div>
        </div>
    )
}

export default Greetings