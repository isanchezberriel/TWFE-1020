import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"



const Objeto = ({id}) => {
  const data = useStaticQuery(graphql`
  query {
      allApimiapi {
        edges {
          node {
            result {
             
            }
          }
        }
      }
    }
`)

if (!data) {
    return <p>Data not found</p>
}


var content = data.results[id] //Varía según los datos devueltos



return (
    <div>

    <h1>{result.campo1}</h1>
    <p>{result.campo2}</p>
    <img src={result.campo3}></img>
    /....
    <br></br>
   
    

    </div>
)



}

Objeto.propTypes = {
    id: PropTypes.number
}

Restaurante.defaultProps = {
    id: 0

}


export default Objeto