import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { dataIncrease, dataDecrease, itemRemove } from "./cartSlice";
import { MdPriceChange } from "react-icons/md";
import Button from 'react-bootstrap/Button';
const CartData=()=>{
    const cartData= useSelector(state=>state.mycart.cart);
    const dispatch= useDispatch();


    let totalAmount=0;
     const ans= cartData.map((key)=>{
       totalAmount+=key.price*key.qnty;
        return(
            <>
             <tr>
                <td> <img src={key.defaultImage} width="100" height="100" /></td>
                <td>{key.name}</td>
                 <td>{key.description}</td>
                  <td>{key.category}</td>
                  <td>{key.price}</td>
                  <td>
                   <FaPlusCircle onClick={()=>{dispatch(dataIncrease({id:key.id}))}} />
                    {key.qnty}   
                    <FaMinusCircle onClick={()=>{dispatch(dataDecrease({id:key.id}))}} />
                   </td>
                  <td> {key.qnty * key.price} </td>
                  <td>
                    <button onClick={()=>{dispatch(itemRemove({id:key.id}))}}> Remove </button>
                  </td>
             </tr>
            </>
        )
     })
    return(
        <>
          <h1> Our Cart Data</h1>
         <h3 align="center" style={{color:"blue"}}><MdPriceChange /> {totalAmount}
          <Button variant="warning" style={{marginLeft:"30px"}}>Check Out</Button>
          </h3>
        

           <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Description</th>
           <th>Category</th>
          <th>Price</th>
          <th> Quantity</th>
          <th> Total Price</th>
          <th></th>
         
        </tr>
      </thead>
      <tbody>
         {ans}
         <tr>
           <th colspan="6">
            <b>Total Price :</b>
           </th>
           <th>{totalAmount}</th>
           <th> </th>
         </tr>
      </tbody>
      </Table>
        </>
    )
}

export default CartData;