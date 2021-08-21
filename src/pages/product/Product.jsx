import { Link, useRouteMatch } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../DummyData'
import { Publish } from '@material-ui/icons'
export default function Product(id) {
    let { path, url } = useRouteMatch();
    return (
       
        
            <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct"><button className="productAddButton">Create</button></Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={ productData } dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://www.mytrendyphone.eu/images/Apple-Airpods-2-with-Charging-Case-MV7N2ZM-A-0190199098572-13092019-01-p.jpg" alt="" className="productionInfoImg" />
                        <span className="productName">Apple Airports</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBotton">
                <form  className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder="Apple Airports"/>
                        <label >In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://www.mytrendyphone.eu/images/Apple-Airpods-2-with-Charging-Case-MV7N2ZM-A-0190199098572-13092019-01-p.jpg" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    

        
        
    )
     
}