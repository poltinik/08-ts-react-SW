import React, { useEffect, useState } from 'react';
import { base_url, period_month } from '../utils/constants';

// Определяем тип состояния
interface Planet {
  name: string;
}

const Contact: React.FC = () => {
  const [planets, setPlanets] = useState<string[]>(['wait...']); // Тип состояния - массив строк

  // Асинхронная функция для получения списка планет
  async function fillPlanets(): Promise<void> {
    try {
      const response = await fetch(`${base_url}/v1/planets`);
      const data: Planet[] = await response.json(); // Указываем тип возвращаемых данных
      const planetNames = data.map(item => item.name);
      setPlanets(planetNames);
      localStorage.setItem('planets', JSON.stringify({
        payload: planetNames,
        time: Date.now(),
      }));
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  }

  useEffect(() => {
    const savedPlanets = localStorage.getItem('planets');
    if (savedPlanets) {
      const planetsData = JSON.parse(savedPlanets);
      if ((Date.now() - planetsData.time) < period_month) {
        setPlanets(planetsData.payload);
      } else {
        fillPlanets();
      }
    } else {
      fillPlanets();
    }
  }, []);

  return (
    <form className='rounded-[5px] bg-[#f2f2f2] p-5'>
      <label className='w-full text-red-color'>
        First Name
        <input
          className='w-full p-3 border-[#ccc] border border-solid rounded-[4px] mt-1.5 mb-4 resize-y'
          type="text"
          name="firstname"
          placeholder="Your name.."
        />
      </label>

      <label className='w-full text-red-color'>
        Last Name
        <input
          className='w-full p-3 border-[#ccc] border border-solid rounded-[4px] mt-1.5 mb-4 resize-y'
          type="text"
          name="lastname"
          placeholder="Your last name.."
        />
      </label>

      <label className='w-full text-red-color'>
        Country
        <select
          className='w-full p-3 border-[#ccc] border border-solid rounded-[4px] mt-1.5 mb-4 resize-y'
          name="planet"
        >
          {planets.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className='w-full text-red-color'>
        Subject
        <textarea
          className='h-[200px] w-full p-3 border-[#ccc] border border-solid rounded-[4px] mt-1.5 mb-4 resize-y'
          name="subject"
          placeholder="Write something.."
        ></textarea>
      </label>
      
      <button className='bg-[#04AA6D] text-white px-3 py-5 border-none rounded-[4px] cursor-pointer hover:bg-[#45a049]'>
        Submit
      </button>
    </form>
  );
};

export default Contact;
