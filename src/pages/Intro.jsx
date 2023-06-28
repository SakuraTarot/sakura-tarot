import backgroundImage from '../assets/fondo1.jpg';


export default function Intro() {
  return (
    <>
      <header>
        <img src="Logo" alt="Logo" />
      </header>
      <img src={backgroundImage} alt="background" className="backgroundImage" />
    </>
  )
}
