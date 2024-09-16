import { useEffect, useState } from 'react'
import { base_url, period_month } from '../utils/constants'
import { HeroInfo } from '../utils/types';

const AboutMe = () => {
  const [hero, setHero] = useState<HeroInfo>();

  useEffect(() => {
    const hero = JSON.parse(localStorage.getItem('hero')!);
    if (hero && ((Date.now() - hero.time) < period_month)) {
      setHero(hero.payload)
    }
    else {
      fetch(`${base_url}/v1/peoples/1`)
        .then(response => response.json())
        .then(data => {
          const info = {
            name: data.name,
            gender: data.gender,
            birth_year: data.birth_year,
            height: data.height,
            mass: data.mass,
            hair_color: data.hair_color,
            skin_color: data.skin_color,
            eye_color: data.eye_color
          }
          setHero(info);
          localStorage.setItem('hero', JSON.stringify({
            time: Date.now(),
            payload: info
          }))
        })
    }
  }, [])

  return (
    <>
      {(!!hero) &&
        <div className='text-3xl leading-loose text-justify tracking-widest ml-8'>
          {Object.keys(hero).map(key => <p key={key}><span className='text-[1.5em] capitalize'>{key.replace('_', ' ')}:</span> {hero[key as keyof HeroInfo]}</p>)}
        </div>
      }
    </>
  )
}

export default AboutMe