import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Chat from './pages/chat/Chat'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
       <Route path="/chat" element={<Chat />} />
	   <Route path="/" element={<Login />}/>
    </Routes>
    </div>
  )
}

export default App
