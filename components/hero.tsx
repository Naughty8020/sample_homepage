import React , {useState useffect} from 'react';



const images = [
'../public/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg',
'../public/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg',
'../public/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
