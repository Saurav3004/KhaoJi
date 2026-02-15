import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import {Toaster} from "react-hot-toast"
import PublicRoute from "./components/PublicRoute"
import ProtectedRoute from "./components/ProtectedRoute"
import SelectRole from "./pages/SelectRole"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/select-role" element={<SelectRole />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App