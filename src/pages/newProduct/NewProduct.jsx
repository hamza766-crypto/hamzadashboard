import './newProduct.css'

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form  className="addProductForm">
            <div className="addProductItem">
                <label >Images</label>
                <input type="file" placeholder="file"/>
            </div>
            <div className="addProductItem">
                <label >Name</label>
                <input type="text" placeholder="Apple Airpod"/>
            </div>
            <div className="addProductItem">
                <label >Stock</label>
                <input type="text" placeholder="123"/>
            </div>
           
            <div className="addProductItem">
            <label >Activate </label>
            <select  name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </div>
            <button className="addProductButton">
                Create
            </button>
        </form>
        </div>
    )
}
