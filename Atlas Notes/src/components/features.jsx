import React from 'react'
import '/src/Styles/features.css'

const FeaturesCard = ({icon, title, description}) => {
  return (
    <div className='features-card'>
        <div className='features-icon'>{icon}</div>

        <h3>{title}</h3>

        <p>{description}</p>
    </div>
  )
}

export default FeaturesCard