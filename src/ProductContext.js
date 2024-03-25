import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const ProductContext = createContext();

const BASE_API_URL = "https://sell-your-products.onrender.com/api"

export default function ProductContextData(props) {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const loadData = async () => {
            const response = await axios.get(BASE_API_URL + "/products");
            setProducts(response.data);
        }
        loadData(); 
    }, [])

    const context = {
        getProducts:() => {
            // todo: set a timer like every 10 minutes fetch all new products
            return products
        },
        async addProduct(newProduct) {
            const response = await axios.post(BASE_API_URL + "/products", {
                ...newProduct,
                cost: parseInt(newProduct.cost)
            });

            newProduct._id = response.data.insertedId;
            setProducts([...products, newProduct]);
        },
        getProductById(productId) {
            return products.find(r => r._id === productId);
        },
        async updateProductById(productId, newProduct) {

            // const response = await axios.put(BASE_API_URL + "/products/" + productId,{
            //     ...newProduct,
            //     qty: parseInt(newProduct.qty)
            // });

            newProduct._id = productId
    
            const index = products.findIndex( r => r._id === productId);
            const left = [...products.slice(0, index)];
            const right = [...products.slice(index+1)];
            const modified  =[ ...left, newProduct, ...right];
   
            setProducts(modified);
        }
    }

    return <ProductContext.Provider value={context}>
       {props.children}
    </ProductContext.Provider>
}