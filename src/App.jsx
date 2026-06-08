import { useState } from "react"
import BotaoEnviar from "./components/BotaoEnviar"
import InputTarefa from "./components/InputTarefa"

export default function App() {

  const [tarefa, setTarefa] = useState("") // texto do input
  const [contador, setContador] = useState(0) // total de tarefas
  const [marcador, setMarcador] = useState(0) // tarefas feitas
  const [botao, setBotao] = useState(null) // botões na tela

  function adicionarValor(e) {
    setTarefa(e.target.value) // atualiza quando digita
  }

  function adicionarTarefa(e) {
    e.preventDefault() // pra não recarregar

    // pra colocar o botão e atualizar o marcador
    setBotao(function(botaoAtual) {
      return (
        <>
          {botaoAtual}
          <BotaoTarefa texto={tarefa} onMarcar={() => setMarcador(c => c + 1)} />
        </>
      )
    })

    setContador(c => c + 1)
  }

  return (
    <div className="container">
      <form onSubmit={adicionarTarefa}>
        <InputTarefa
          type="text"
          placeholder="Digite uma tarefa..."
          onChange={adicionarValor}
        />
        <BotaoEnviar
          texto="Enviar"
          type="submit"
          disabled={tarefa == "" ? true : false} // bloqueia se for vazio
          style={{ backgroundColor: tarefa == "" ? "rgb(156, 149, 113)" : "" }}
        />
      </form>

      <div className="tarefas">
        {contador < 1 ? "" : botao}
        <p>{contador < 1 ? "Você não possui tarefas!" : `${marcador}/${contador} feitos!`}</p> 
      </div>
    </div>
  )
}

// componente separado pra cada botão ter seu próprio estado de bloqueio
function BotaoTarefa({ texto, onMarcar }) {

  const [bloqueado, setBloqueado] = useState(false)

  return (
    <button
      onClick={() => {
        onMarcar()
        setBloqueado(true) // bloqueia só esse botão
      }}
      disabled={bloqueado}
      style={{ backgroundColor: bloqueado ? "rgb(156, 149, 113)" : "" }}
    >
      {texto}
    </button>
  )
}