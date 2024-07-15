import React from 'react'
import axios from 'axios'

const Login = () => {
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
    <div>
        <h2>Login Page</h2>
        <form>
          <label>
            secret:
            <input type="text" name="username" />
          </label>
          <label>
            Public-key:
            <input type="password" name="password" />
          </label>
          <input type="submit" value="submit" />
          
        </form>
        <button onClick={generateKey}>createKey</button>
      
    </div>
  )
}

export default Login
