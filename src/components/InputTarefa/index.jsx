import "./styles/input.css"

export default function enviar({ ...rest }) {
  return(
    <>
        <input {...rest} />
    </>
  )
}