import React, {useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"

function CharacterDetail() {

  useEffect(() => {
    fetchData()
  }, [])

  const { id } = useParams();

  const [character, setCharacter] = useState({})
  const [planet, setPlanet] = useState({})

  const fetchData = async () => {
    const res = await fetch(`/api/characters/show/${id}`)
    const character = await res.json()
    setCharacter(character)

    const planet_response = await fetch(`/api/planets/show/${character.Planet_id}`)
    const planet = await planet_response.json()
    setPlanet(planet)
  }

  return (
    <div className="container">
      <h2>Name: {character.name}</h2>
      <p>Height: {character.height} CM</p>
      <p>Mass: {character.mass} kg</p>
      <p>Hair Colour: {character.hair_color}</p>
      <p>Skin Colour: {character.skin_color}</p>
      <p>Eye Colour: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <p><Link to={`/Planets/${planet.id}`}>Planet: {planet.name}</Link></p>
    </div>
  )
}

export default CharacterDetail
