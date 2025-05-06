
import './App.css'
import {BrowserRouter,Routes,Route, useParams} from 'react-router-dom'
import Home from './pages/Home'
import SingleBlog from './pages/SingleBlog'
import AddBlog from './pages/AddBlog'
import EditBlog from './pages/EditBlog'

function App() {

  return (
   <>
 <BrowserRouter>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog/:id' element={<SingleBlog/>}/>
    <Route path='/addBlog/' element={<AddBlog/>}/>
    <Route path='/editBlog/:id' element={<EditBlog/>}/>
  </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
