import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";

export default function ProductListing() {
    const context = useContext(ProductContext);
    const navigate = useNavigate();
    return <ul className="list-group">
        {
            context.getProducts().map( r=> <li key={r.id} className="list-group-item">
                <h2>{r.name}</h2>
                <div>
                    Description: {r.description}
                </div>
                <div>
                    Cost: ${r.cost}
                </div>

                <button className="btn btn-primary mt-3 button-edit"
                    onClick={()=>{
                        navigate("/edit/" + r.id);
                    }}
                
                >Edit</button>
                <button className="btn btn-danger mt-3 button-delete"
                    onClick={()=>{
                        navigate("/delete/" + r.id);
                    }}
                
                >Delete</button>
            </li>)
        }

    </ul>
}