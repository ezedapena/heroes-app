import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

export const HeroCard = ({ hero }) => {

    const heroImageUrl = `assets/heroes/${hero.id}.jpg`;

    return (
        <div className='col animate__animated animate__fadeInLeft'>
            <div className='card'>

                <div className='row no-gutter'>
                    <div className='col-4'>
                        <img src={heroImageUrl} alt={hero.superhero} className='card-img' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">

                            <h5 className='card-title'>{hero.superhero}</h5>
                            <p className='card-text'>{hero.alter_ego}</p>

                            {
                                hero.characters != hero.alter_ego && <p>{hero.characters}</p>
                            }

                            <p className='card-text'>
                                <small className='text-muted'>{hero.first_appearance}</small>
                            </p>

                            <Link to={`/hero/${hero.id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
