import React from "react";
import  Vortex  from "./vortex";

export function Login() {
    const generateKey = async () => {
                try {
                    const response = await axios.post('http://localhost:3001/create-keypair')
                    const data = response.data
                    console.log(data)
                    // Save key to local storage
                    localStorage.setItem('key', data.key)
                } catch (error) {
                    console.error('Error generating key:', error)
                }
            }
    


  return (
    <div className=" mx-auto   h-screen overflow-hidden " >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Daichain Warfare
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Play, Earn, Repeat: Earn rewards in Real Time!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Login
          </button>
          <button className="px-4 py-2  text-white " onClick={generateKey}>Create</button>
        </div>
      </Vortex>
    </div>
  );
}

// import React from 'react'
// import axios from 'axios'

// const Login = () => {
//     const generateKey = async () => {
//         try {
//             const response = await axios.post('http://localhost:3001/create-keypair')
//             const data = response.data
//             console.log(data)
//             // Save key to local storage
//             localStorage.setItem('key', data.key)
//         } catch (error) {
//             console.error('Error generating key:', error)
//         }
//     }
//   return (
//     <div>
//         <h2>Login Page</h2>
//         <form>
//           <label>
//             secret:
//             <input type="text" name="username" />
//           </label>
//           <label>
//             Public-key:
//             <input type="password" name="password" />
//           </label>
//           <input type="submit" value="submit" />
          
//         </form>
//         <button onClick={generateKey}>createKey</button>
      
//     </div>
//   )
// }

// export default Login
