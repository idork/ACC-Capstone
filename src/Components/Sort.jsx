import React from 'react';
import { getSortedProduct } from '../API/index'

export default function Sort() {
    const [product, setProduct ] = useState({});

    useEffect(() => {
        async function sortProducts(){
            try{
                const product = await getSortedProduct();
                setProduct(product);
            }catch(err){
                console.log(err);
            }
        }
    sortProducts();
    }, []);

    const ascending = () => {
        let objectList = {...product};
        if (objectList.length > 0){
            objectList.sort((a,b) =>{
                const product1 = a.title.toUpperCase();
                const product2 = b.title.toUppserCase();
                return (product1 < product2) ? -1 : (product1 > product2) ? 1 : 0;
            })
        }
}
    return (
        <form method="post" onSubmit={ascending}>
            <input type="radio"> 
            <label> A to Z </label>
            </input>
            <input type="radio"> 
            <label> Z to A </label>
            </input>
        </form>
    )
}