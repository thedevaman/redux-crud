import { Link } from "react-router-dom"

const Home = ()=>{
   
  const customers =[
    {
      coustomer:"Aman",
      product:"shirt",
      price:300,
      discount:50
    },
    {
      coustomer:"Akash",
      product:"pant",
      price:500,
      discount:40
    },
    {
      coustomer:"Abhay",
      product:"t-shirt",
      price:200,
      discount:20
    },
    {
      coustomer:"Ajit",
      product:"jeans",
      price:1000,
      discount:200
    },
    {
      coustomer:"Arun",
      product:"trouser",
      price:1000,
      discount:50
    },
  ]


  return(
    <div className='bg-gray-200 min-h-screen py-6'>
      <div className='bg-white rounded-lg shadow-lg w-8/12 mx-auto p-16 space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold text-rose-600'>Redux CRUD</h1>
          <Link to="new-customer" className='text-white bg-indigo-600 px-3 py-2.5 rounded-md font-medium'>
            <i className="ri-sticky-note-add-line mr-2"></i>
            New Customer
          </Link>
        </div>
        <table className='w-full'>
          <thead>
          <tr className='bg-violet-100 text-left'>
            <th className='py-3 pl-3'>S/No.</th>
            <th>Coustomer Name</th>
            <th>Product</th>
            <th>Price</th>
            <th>Discount</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {
            customers.map((item,index)=>(
              <tr className={index % 2 === 0 ? 'bg-white':'bg-rose-100'} key={index}>
                <td className='py-4 pl-3' >{index+1}</td>
                <td>{item.coustomer}</td>
                <td>{item.product}</td>
                <td>{item.price}</td>
                <td>{item.discount}</td>
                <td>
                  <div className='space-x-3'>
                  <button className='bg-indigo-600 w-8 h-8 rounded'>
                     <i className='ri-file-edit-line text-white'></i>
                  </button>
                  <button className='bg-rose-600 w-8 h-8 rounded'>
                     <i className='ri-delete-bin-6-line text-white'></i>
                  </button>
                  </div>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home