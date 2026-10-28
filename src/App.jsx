import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LikeButton from './components/LikeButton'
import LiveInput from './components/LiveInput'
import Page from './components/Page'
import ProductList from './pages/ProductList'
import Header from './layouts/Header'
import Notice from './pages/Notice'


function App() {

  return (
    <>
      {/* <section>
        <LikeButton />
        <LiveInput />
        <Page />
      </section> */}
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />  
          <Route path="/notice" element={<Notice />} />  
        </Routes>  
      </main>    
    </BrowserRouter>
    </>
  )
}

export default App
