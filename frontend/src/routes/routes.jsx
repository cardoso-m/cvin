import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signup from '../pages/signup'
import Signin from '../pages/signin'
import Index from '../pages/index'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {<Route path='/signup' element={<Signup />} />}
          {<Route path='/signin' element={<Signin />} />}
          {<Route path='/index' element={<Index />} />}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
