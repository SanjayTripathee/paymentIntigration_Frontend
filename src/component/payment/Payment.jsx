import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Payment = () => {
  // const dispatch = useDispatch();
  // const { enqueueSnackbar } = useSnackbar();
  // const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  // // const { user } = useSelector((state) => state.user);
  // const { error } = useSelector((state) => state.newOrder);

  const [payDisable, setPayDisable] = useState(false);
  // const totalPrice = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );

  const paymentData = {
    itemId: "product",
    totalPrice: 10,
    name: "test",
  };

  //test data

  // const paymentData1 = {
  //   return_url: "http://localhost:8000/payment/complete",
  //   itemId: "12",
  //   totalPrice: 10,
  //   name: "test",
  // };



  useEffect(() => {
    // console.log(cartItems);
    // if (error) {
    //   dispatch(clearErrors());
    //   enqueueSnackbar(error, { variant: "error" });
    // }
    submitHandler()
  }, []);

  return 
    // <>
    //   <MetaData title="ShopEase: Secure Payment | Khalti" />
    //   <main className="w-full mt-20">
    //     <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
    //       <div className="flex-1">
    //         <Stepper activeStep={3}>
    //           <div className="w-full bg-white">
    //             <form
    //               onSubmit={(e) => submitHandler(e)}
    //               autoComplete="off"
    //               className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden"
    //             >
    //               <FormControl>
    //                 <RadioGroup
    //                   aria-labelledby="payment-radio-group"
    //                   defaultValue="Khalti"
    //                   name="payment-radio-button"
    //                 >
    //                   <FormControlLabel
    //                     value="Khalti"
    //                     control={<Radio />}
    //                     label={
    //                       <div className="flex items-center gap-4">
    //                         <img
    //                           draggable="false"
    //                           className="h-[3rem] w-[5rem] object-contain"
    //                           src="https://web.khalti.com/static/img/logo1.png"
    //                           alt="Khalti Logo"
    //                         />
    //                       </div>
    //                     }
    //                   />
    //                 </RadioGroup>
    //               </FormControl>
    //               <input
    //                 type="submit"
    //                 value={`Pay Rs.${totalPrice.toLocaleString()}`}
    //                 disabled={payDisable}
    //                 className={`${
    //                   payDisable
    //                     ? "bg-primary-grey cursor-not-allowed"
    //                     : "bg-primary-orange cursor-pointer"
    //                 } w-1/2 sm:w-1/4 my-2 py-3 font-medium bg-primary-green text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`}
    //               />
    //             </form>
    //           </div>
    //         </Stepper>
    //       </div>
    //       <PriceSidebar cartItems={cartItems} />
    //     </div>
    //   </main>
    // </>
  // );
};

export default Payment;
