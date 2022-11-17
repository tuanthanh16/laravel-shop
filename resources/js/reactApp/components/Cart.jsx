
import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "./CartContext";
export default function Cart() {

    const { cart, setCart } = useContext(CartContext)


    return (



        <Button style={{
            width: '3rem', height: '3rem', position: 'relative', color: 'green', margin: '0em 0em 0em 7em'
        }}
            variant='outline-primary'
            className='rounded-circle col-12 col-md-4' >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
            </svg>
            <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                style={{
                    color: 'white',
                    width: '1.5rem',
                    height: '1.5rem',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(25%, 25%)',
                }}>3</div>
        </Button >

    )
}