import { useState } from "react"
import { useDispatch } from "react-redux"
import { createCustomer } from "./redux/slices/customer"

const NewCustomer = ()=>{

    const dispatch = useDispatch()

    const [form,setForm] = useState({
        customer_name:'',
        product:'',
        price:'',
        discount:''
    })

    const addNewCustomer = (e)=>{

        e.preventDefault()
      dispatch(createCustomer(form))
        
    
    }


    const handleForm = (e)=>{
        const input = e.target
        const name = input.name
        const value = input.value
        setForm({...form,
            [name]:value
    })
    }

    return(
       <div className="bg-gray-200 min-h-screen">
        <div className="w-6/12 bg-white mx-auto p-8 shadow-lg space-y-8">
            <h1 className="text-5xl font-bold text-center">New Customer</h1>
            <form className="space-y-6" onSubmit={addNewCustomer}>
                <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium">Customer's Name</label>
                    <input className="border border-gray-300 rounded p-3"
                    placeholder="Enter Your Name"
                    name="customer_name"
                    onChange={handleForm}
                    />
                </div>

                 <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium">Product</label>
                    <input className="border border-gray-300 rounded p-3"
                    placeholder="Product Name"
                    name="product"
                    onChange={handleForm}
                    />
                </div>

                 <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium">Price</label>
                    <input className="border border-gray-300 rounded p-3"
                    placeholder="123"
                    name="price"
                    type="number"
                    onChange={handleForm}
                    />
                </div>

                 <div className="flex flex-col gap-3">
                    <label className="text-lg font-medium">Discount</label>
                    <input className="border border-gray-300 rounded p-3"
                    placeholder="123"
                    name="discount"
                    type="number"
                    onChange={handleForm}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <button className="py-3 rounded bg-indigo-600 text-white font-medium">Submit</button>
                </div>

            </form>
        </div>
       </div>
    )
}

export default NewCustomer