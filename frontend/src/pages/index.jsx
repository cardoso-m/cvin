import { useState } from "react"

//Forms:
import CreateForm from "../components/forms/CreateForm"
import GeneralForm from "../components/forms/GeneralForm"
import SpecificForm from "../components/forms/SpecificForm"

const Index = () => {

  const [form, setForm] = useState('create')
  const [formData, setFormData] = useState({ // Estado para armazenar os dados do formulário
    name: "",
    city: "",
    uf: "",
    phone: "",
    linkedin: "",
  })

  const handleSubmit = async (event) => {
    event.preventDefault() // Evita o recarregamento da página
    
    let userData = formData
    let token = localStorage.getItem('jwtToken')

    const cv = await fetch('http://localhost:8000/dify',{
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    
    console.log(cv)

  }

  return (
    <div>
      <h1>Index</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Selecione uma opção: <br />
          <select
            id="curriculo-opcao"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          >
            <option value="create">Criar um currículo</option>
            <option value="specific">Melhorar um currículo para uma vaga específica</option>
            <option value="general">Melhorar um currículo para vagas gerais</option>
          </select>
        </label>
        <br />
        {form == 'create' ? 
        <CreateForm formData={formData} setFormData={setFormData} /> 
        : form == 'specific' ? 
        <SpecificForm /> :
        form == 'general' ? 
        <GeneralForm /> : <> </>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Index
