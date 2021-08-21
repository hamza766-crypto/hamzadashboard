import  './widgetLg.css'
import a from './index.jpeg'
import b from './b.jpeg'
import c from './c.jpeg'
import d from './d.jpeg'
export default function WidgetSm() {


        const Button=({type})=>{
            return <button className={"widgetLgButton "+type}>{type}</button>
        }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTh">
                     <td className="widgetLgUser">
                         <img src={a} alt="" className="widgetLgImg" />
                         <span className="widgetLgName">Rional Messi</span>
                     </td>
                     <td className="widgetLgDate"> 3 Aug 2021</td>
                     <td className="widgetLgAmount"> $221.90</td>
                     <td className="widgetLgStatus"> <Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTh">
                     <td className="widgetLgUser">
                         <img src={b} alt="" className="widgetLgImg" />
                         <span className="widgetLgName">Alexa hales</span>
                     </td>
                     <td className="widgetLgDate"> 23 Aug 2020</td>
                     <td className="widgetLgAmount"> $811.90</td>
                     <td className="widgetLgStatus"> <Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTh">
                     <td className="widgetLgUser">
                         <img src={c} alt="" className="widgetLgImg" />
                         <span className="widgetLgName">Hellen Keller</span>
                     </td>
                     <td className="widgetLgDate"> 3 Aug 2021</td>
                     <td className="widgetLgAmount"> $723.90</td>
                     <td className="widgetLgStatus"> <Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTh">
                     <td className="widgetLgUser">
                         <img src={d} alt="" className="widgetLgImg" />
                         <span className="widgetLgName">Fatima Musani</span>
                     </td>
                     <td className="widgetLgDate"> 3 Jan 2021</td>
                     <td className="widgetLgAmount"> $564.90</td>
                     <td className="widgetLgStatus"> <Button type="Declined"/></td>
                </tr>
            </table>








        </div>
    )
}
