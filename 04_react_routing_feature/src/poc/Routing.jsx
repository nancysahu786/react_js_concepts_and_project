import React, { useEffect, useState } from 'react'
import { Routes,Route, Link, Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function Routing() {
  return (
    <div>
      <h2>Routing examples</h2>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li> <Link to='/about'>About</Link></li>
          <li><Link to='/listing'>Listening</Link></li>
        </ul>
      </nav>
<Routes>
      <Route path='/home/' element={<Home></Home>}></Route>
      {/* nested route */}
      <Route path='/about/*' element={<About></About>}></Route>

      <Route path='/listing/' element={<Listening></Listening>}></Route>

      {/* template or dynamic route */}
      <Route path='/user/:id' element={<User isAdmin={true}></User>}></Route>
{/* redirect route */}
      <Route path='/abc' element={<Navigate to='/home'></Navigate>}></Route>

      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

      </Routes>
    </div>
  )
}

function Home(){
  return (
    <>
    <h1>I am home page</h1>
    </>
  )
}

function About(){
  return (
    <>
    <h1>I am About page</h1>
    <Routes>
      <Route path='company' element={<Company/>}></Route>
      <Route path='founder' element={<Founder/>}></Route>
    </Routes>
    </>
  )
}

function Company(){
  return (
    <>
    <h1>I am Company page</h1>
    </>
  )
}

function Founder(){
  return (
    <>
    <h1>I am Founder page</h1>
    </>
  )
}

function Listening(){
  return (
    <>
    <h1>I am Listening page</h1>
    </>
  )
}

function PageNotFound(){
  return (
    <>
    <h1>Page not found</h1>
    </>
  )
}

function User(props){

  var params = useParams();
  const [user,setUser] = useState(null);
  console.log(params.id);
  useEffect(()=>{
(async function() {
  const res = await fetch(`https://fakestoreapi.com/users/${params.id}`);
  console.log("res-->",res);
  
  const userData = await res.json();
  console.log("userData-->",userData.username);
  setUser(userData);
  // console.log("user-->",user);
  
})();
  },[]);

  return(
    <>
    {
      user == null ? <><h2>...Loading...</h2></> : <><h2>User name: {user.username}</h2>
      <h2>User full name: {user.name.firstname + " " + user.name.lastname}</h2></>

    }
    </>
    
  )

}

export default Routing
