import  './widgetSm.css'
import { FormatTextdirectionLToRTwoTone, Visibility } from '@material-ui/icons'
import shezad from './shezad.jpg'
import arshiyan from './p2.jpeg'
import fatik from './p3.jpeg'
import mehdi from './p4.jpeg'
import ahsan from './p5.jpeg'
export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmItems">
                    <img src={shezad} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Shezad Pasha</span>
                        <span className="widgetSmJobTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmItems">
                    <img src={arshiyan} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Arshiyan Bashir</span>
                        <span className="widgetSmJobTitle">Novel Writter</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmItems">
                    <img src={fatik} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Fatik </span>
                        <span className="widgetSmJobTitle">MotivatSpeaker</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmItems">
                    <img src={mehdi} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Mehdi Raza</span>
                        <span className="widgetSmJobTitle">Architect</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmItems">
                    <img src={ahsan} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ahsan Khan</span>
                        <span className="widgetSmJobTitle">Teacher</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
