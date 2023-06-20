
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./partials/Header"
import { HomePage } from "./pages/HomePage/HomePage"
// import { Carrinho } from "./pages/Cart/Carrinho"
import { AppContext } from "./store/AppContext"

const initialState = {
  activeProductId: null,
  cartProducts: [],
  type: null,
  cards: []
}

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <AppContext initialState={initialState}>
            <Header/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>,
              {/* <Route path="/cart" element={<Carrinho/>}/> */}
            </Routes>
          </AppContext>
        </div>
      </BrowserRouter>
    </div>
  )
}
