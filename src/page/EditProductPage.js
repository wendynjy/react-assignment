import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import ProductForm from "../ProductForm";

export default function EditProductPage() {
    
    const params = useParams();
    const navigate = useNavigate();
    const productId = params.productId;

    const context = useContext(ProductContext);
    const productToEdit = context.getProductById(productId);
console.log(typeof(productId));
    return <>
        <h1>Editing Product: {productToEdit.name}</h1>
        <ProductForm initialValue={productToEdit}
                    label="Edit Product"
                    onSubmit={(product)=>{
                        context.updateProductById(productId, product)
                        navigate('/')
                     }}
        />
    </>
}