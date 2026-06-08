import "./styles/botao.css"

export default function enviar({ texto, ...rest }) {
  return(
    <>
        <button {...rest}>{texto}</button>
    </>
  )
}