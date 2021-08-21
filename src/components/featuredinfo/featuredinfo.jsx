import  './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
export default function featuredinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,562</span>
                    <span className="featuredMoneyRate">
                        
                -11.4<ArrowDownward className="featuredIcon negative"/>
                </span>
                </div>
                <span className="featuredsub">Compare to last Months</span>
            </div>
              <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$56,562</span>
                    <span className="featuredMoneyRate">
                        
                -1.4<ArrowDownward className="featuredIcon negative"/>
                </span>
                </div>
                <span className="featuredsub">Compare to last Months</span>
            </div>
               <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$76,92</span>
                    <span className="featuredMoneyRate">
                        
                +5.4<ArrowUpward className="featuredIcon"/>
                </span>
                </div>
                <span className="featuredsub">Compare to last Months</span>
            </div>
        </div>
    )
}
