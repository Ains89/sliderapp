import { useState, useEffect } from "react"

const PruebasHooks = ({ contador, setContador }) => {
  let arr = [
    "https://fondosmil.com/fondo/4595.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/34/586/550/anime-4k-full-hd-wallpaper-preview.jpg",
    "https://i.pinimg.com/736x/ed/78/6b/ed786b4d5ab1b788c4ded1158f8dee43.jpg",
    "https://www.todofondos.net/wp-content/uploads/Fondos-de-pantalla-de-anime-2500x1562-papel-tapiz-de-calidad-Full-HD-de-anime-fresco-para-dispositivos-moviles.jpg",
    "https://getwallpapers.com/wallpaper/full/0/0/1/184694.jpg"
  ]
  const [img, setImg] = useState("")
  useEffect(() => {
    setImg(arr[contador])
  }, [contador])

  return (
    <div style={{ position: 'relative' }}>
      <h4>{contador}</h4>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'blue',
          disabled: contador === 0
        }}
        onClick={() => setContador(contador - 1)}
      >
        Izquierda
      </button>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'blue',
          disabled: contador === 4
        }}
        onClick={() => setContador(contador + 1)}
      >
        Derecha
      </button>
      <img src={img} alt="" style={{ maxWidth: '500px', display: 'block', margin: 'auto' }} />
    </div>
  )
}

export default PruebasHooks;