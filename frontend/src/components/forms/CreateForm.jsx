const CreateForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <label htmlFor="name">Nome completo:</label>
      <input type="text" id="name" name="name" placeholder="Digite seu nome completo" value={formData.name} onChange={handleChange}/> <br />
      
      <label htmlFor="city">Cidade:</label>
      <input type="text" id="city" name="city" placeholder="Digite sua cidade" value={formData.city} onChange={handleChange}/> <br />

      <label htmlFor="uf">Estado:</label>
      <input type="text" id="uf" name="uf" placeholder="Digite seu estado" value={formData.uf} onChange={handleChange}/> <br />
      
      <label htmlFor="phone">Telefone:</label>
      <input type="tel" id="phone" name="phone" placeholder="Digite seu telefone" value={formData.phone} onChange={handleChange}/> <br />
      
      <label htmlFor="linkedin">LinkedIn (opcional):</label>
      <input type="text" id="linkedin" name="linkedin" placeholder="Informe a url do seu LinkedIn" value={formData.linkedin} onChange={handleChange}/> <br />
    </div>
  )
}

export default CreateForm
