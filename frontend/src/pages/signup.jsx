import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const redirect = useNavigate()

    // Função chamada ao enviar o formulário
    const handleSubmit = async (event) => {
        event.preventDefault() // Evita o recarregamento da página

        let userData = {
            first_name,
            last_name,
            email,
            password
        }

        try {
            const signup = await fetch('http://localhost:8000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            if(signup.status == 200) {
                redirect('/signin')
            }

            // Limpando os campos após o envio
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <div>
            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome: <input type="text" name="first_name" placeholder="Digite seu nome"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        required />
                </label> <br />
                <label>
                    Sobrenome: <input type="text" name="last_name" placeholder="Digite seu sobrenome"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        required />
                </label> <br />
                <label>
                    E-mail: <input type="email" name="email" placeholder="Digite seu e-mail"
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
                <label>
                    Confirmar senha: <input type="password" name="confirm_password" placeholder="Digite sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default Signup
