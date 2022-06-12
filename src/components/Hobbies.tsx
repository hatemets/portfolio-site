import "../styles/index.scss"
import "../styles/Hobbies.scss"


const Hobbies = () => {
    return (
        <div id="hobbies">
            <h4 id="hobbies-title">Interests & hobbies</h4>
            <ul id="hobbies-list">
                <li className="hobbies-item">
                    <h6>Racket sports</h6>
                    <p className="list-text">
                        Racket sports have fascinated me for as long as I can remember. I regularly play tennis, occasionally competing in smaller tournaments.
                        I'm also a huge fan of table tennis, which I've played since I was 8.
                    </p>
                </li>

                <li className="hobbies-item">
                    <h6>Linux & Vim</h6>
                    <p className="list-text">
                        As nerdy as it sounds, I genuinely enjoy tweaking my workspace to make it aesthetically pleasing as well as to improve my productivity.
                        For most of my development, I use Linux with Vim text editor, which enables me to customize my environment to my liking.
                    </p>
                </li>

                <li className="hobbies-item">
                    <h6>Cycling & motorcycling</h6>
                    <p className="list-text">
                        To my mind, there's no better way to spend a sunny day than to go cycling and/or motorcycling.
                        The feeling of wind blowing against your face while enjoying the view is something that's difficult to imagine without trying it.
                    </p>
                </li>
            </ul>
        </div>
    )
}


export default Hobbies
