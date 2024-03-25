import { useContext } from "react";
import ProductForm from "../ProductForm";
import { ProductContext } from "../ProductContext";
import { useNavigate } from "react-router-dom";

export default function AddProductPage() {

    const context = useContext(ProductContext);
    const navigate = useNavigate();

    return <>
        <h1>Add Product</h1>
        <ProductForm
            label="Add Product"
            onSubmit={(product) => {
                context.addProduct(product);
                navigate('/', {
                    'state': {
                        'message': 'New product has been added'
                    }
                });
            }} />
    </>
}