import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.find((dog) => dog.name === name);

    if (!dog) {
        console.log(name);
        return <Navigate to="/dogs" />;
    }

    const { age, src, facts } = dog;

    return (
        <div>
            <h1>{name}</h1>
            <img src={src} alt={name} />
            <p>Age: {age}</p>
            <h2>Fun Facts</h2>
            <ul>
                {facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    );
}

export default DogDetails;
