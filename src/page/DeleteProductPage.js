import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";

export default function DeleteProductPage() {
    const params = useParams();
    const navigate = useNavigate();
    const productId = params.productId;

    const context = useContext(ProductContext);
    const productToDelete = context.getProductById(productId);

    const handleDelete = () => {
        context.deleteProductById(productId);
        navigate('/');
    };

    return (
        <>
            <h1>Delete Product: {productToDelete.name}</h1>
            <p>Are you sure you want to delete this product?</p>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </>
    );
}
