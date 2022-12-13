import React, { useMemo } from 'react'
import { getHeroesByPulisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroList = useMemo(() => getHeroesByPulisher(publisher), [publisher]);

    return (
        <div className='row rows-cols row-cols-md-3 g-3'>
            {heroList.map(hero => (
                <HeroCard hero={hero} key={hero.id} />
            ))}
        </div>
    )
}
