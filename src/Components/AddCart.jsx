import { addCart } from '../API/index';

export default function AddCart(){
    const [result, setResult] = useState([]);
    const [cart, setAddCart] = useState([]);

    useEffect(() => {
        async function addedToCart(){
            try{
                const cart = await addCart();
                setAddCart(cart);
            }catch(err){
                console.log(err);
            }
        }
        addedToCart();
    })

    useEffect(() =>{
        async function addedToCart(){
            try{
                const cart = await addCart();
                setAddCart(cart);
            }catch(err){
                console.log(err);
            }
        }
        addedToCart();
    })

    return (
        <div>
            <h1> </h1>
        </div>
    )
}