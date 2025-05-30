import 'remixicon/fonts/remixicon.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NewCustomer from './NewCustomer'

const App = ()=>{
   return(
    <BrowserRouter>
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/new-customer" element={<NewCustomer />}></Route>
        </Routes>
    </Provider>    
    </BrowserRouter>
   )
}

export default App