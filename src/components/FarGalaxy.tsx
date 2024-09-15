import React, { useEffect, useState } from 'react';
import { base_url } from '../utils/constants';

const FarGalaxy = () => {
    const [openingCrawl, setOpenningCrawl] = useState('Loading...');

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl')
        if (opening_crawl) {
            setOpenningCrawl(opening_crawl)
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setOpenningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }

    }, [])

    return (
        <p className="text-3xl leading-loose text-justify tracking-widest">
            {openingCrawl}
        </p>
    )
}

export default FarGalaxy