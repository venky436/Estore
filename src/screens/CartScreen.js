import React,{useState,useEffect} from 'react'
import { ListGroup } from 'react-bootstrap'
import { products } from '../products'
import { useSelector,useDispatch } from 'react-redux'
import { CartAction } from '../Actions/CartAction'


export const CartScreen = ({match,history,location}) => {

    // let [cart,setCart] = useState([])

    // let state = useSelector(state => state.cartItems)

    // console.log(state.cartItems)

    let dispatch = useDispatch()
   

    let ID = match.params.id
    let q = location.search.split('=')[1]
    

    useEffect(()=>{
        if(ID !== undefined && q !== undefined){
            let c = products.find((e)=>e.id == ID)
            console.log(c)
            dispatch(CartAction({title : c.title,price : c.price,image : c.image}))
        }

    },[])
  return (
    <div>
        <div className='container' style={{marginTop:'19rem'}}>
            <div className='row'>
                <div className='col-md-6'>
                    <ListGroup>
                        <ListGroup.Item>
                            {/* <img src={} /> */}
                        </ListGroup.Item>
                    </ListGroup>
                    
                </div>
            </div>
        </div>

    </div>
  )
}
