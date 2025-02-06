import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState(true)
    const redirect = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault() // Evita o recarregamento da página

        let userData = { email, password }

        try {
            let response = await fetch('http://localhost:8000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            if (response.status == 401) {
                console.log('E-mail ou senha incorretos')
                setAuth(false)
            } else {
                let data = await response.json()
                
                localStorage.setItem('jwtToken', data.token)
                redirect('/index')
                setEmail('')
                setPassword('')
                setAuth(true)
            }

        } catch (error) {
            console.log('Resp:' + error.message)
        }
    }

    return (
        <div>
            <h1>Entrar</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email: <input type="email" name="email" placeholder="Digite seu E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </label> <br />
                <label>
                    Senha: <input type="password" name="password" placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </label> <br />
                {!auth && <p> E-mail ou senha incorretos </p>}
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Signin
