'use client'
import LoginForm from "../components/LoginForm";
import UserProvider from "../context/userContext/UserProvider";
const Home = () => {



  return (


    <UserProvider>
      <main>


        <LoginForm />





      </main>
    </UserProvider>


  );
}

export default Home;


