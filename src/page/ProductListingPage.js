import { useEffect, useState } from "react";
import ProductListing from "../ProductListing";
import { useLocation } from "react-router-dom";

export default function ProductListingPage() {
    const [showFlash, setShowFlash] = useState(true);
    const location = useLocation(); 

    useEffect(() => {
        if (location.state?.message) {
            const timer = setTimeout(() => {
                setShowFlash(false);
            }, 5000);
            // Clear timeout if component unmounts or if message changes before timeout completes
            return () => clearTimeout(timer);
        }
    }, [location.state?.message]); // Add this dependency here

    return (
        <>
            {
                location.state?.message && showFlash && <div className="alert alert-success">
                    {location.state.message}
                </div>
            }
            <h1>All Products</h1>
            <ProductListing />
        </>
    );
}