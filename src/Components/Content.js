import React from "react"
import Signup from "./SignUp"
import  Container  from "react-bootstrap/Container"
import { AuthProvider } from "../Context/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./LogIn"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

 export default function Content() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/> 
              <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} > </Route>
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}


