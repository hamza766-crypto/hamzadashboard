import Chart from '../../components/chart/Chart'
import Featuredinfo from '../../components/featuredinfo/featuredinfo'
import './home.css'
import { UserData } from '../../DummyData'
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"

export default function Home() {
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart data={UserData} title="User Anaylitics" grid dataKey="Active User"/>
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
