import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cartSlice = createSlice({
    name: "mycart",
    initialState: {
        cart: []
    },
    reducers: {
        addtoCart: (state, actions) => {
            const data = state.cart.filter(key => key.id === actions.payload.id);
            if (data.length >= 1) {
                toast.error("Product already added!", { position: "top-right" });
            } else {
                state.cart.push(actions.payload);
                toast.success("Product successfully added!", { position: "top-right" });
            }
        },

        dataIncrease: (state, actions) => {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === actions.payload.id) {
                    state.cart[i].qnty++;
                }
            }
        },

        dataDecrease: (state, actions) => {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id === actions.payload.id) {
                    if (state.cart[i].qnty <= 1) {
                        toast.warning("Quantity cannot be less than one", { position: "top-right" });
                    } else {
                        state.cart[i].qnty--;
                    }
                }
            }
        },

        itemRemove: (state, actions) => {
            state.cart = state.cart.filter(item => item.id !== actions.payload.id);
            toast.info("Item removed from cart", { position: "top-right" });
        }
    }
});

export const { addtoCart, dataIncrease, dataDecrease, itemRemove } = cartSlice.actions;
export default cartSlice.reducer;
