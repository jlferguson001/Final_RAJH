 import { BrowserRouter, Routes, Route} from 'react-router-dom'
 import {Container} from 'react-bootstrap'
 import HomeScreen from './screens/HomeScreen';
 import Header from './components/Header';
 import Footer from './components/Footer'
 import MensScreen from './screens/MensScreen';
 import WomensScreen from './screens/WomensScreen';
 import ChildrensScreen from './screens/ChildrensScreen';
 import ProductListScreen from './screens/ProductListScreen'
 import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
        <Container>
          <h1> Welcome to RAJH Frames</h1>
          
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/products/Mens' element={<MensScreen />} />
            <Route exact path='/products/Womens' element={<WomensScreen />} />
            <Route exact path='/products/Childrens' element={<ChildrensScreen />} />
            <Route exact path='/products/productslist' element={<ProductListScreen />} />
            <Route exact path='/products/:id' element={<ProductScreen />} />
            
            
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
 