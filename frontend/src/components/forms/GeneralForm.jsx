const GeneralForm = () => {
  return (
    <div>
      <label>
      Área de atuação:
      <input type="text" name="name" placeholder="Exemplo: Administação" /> <br />
      </label>
      <label>
      Selecione seu currículo (formato PDF): <br />
      <input type="file" />
      </label>
    </div>
  )
}

export default GeneralForm
