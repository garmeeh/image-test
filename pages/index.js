import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const tempImages = [];
    for (let i = 0; i < 50; i++) {
      tempImages.push(`https://picsum.photos/600/450?i=${i}`);
    }
    setImages(tempImages);
  }, []);

  return (
    <div>
      <h1>Image Test: External Urls</h1>
      <Link href="/b">
        <a>Go to Internal Urls</a>
      </Link>
      <ul>
        {images.map((src, index) => (
          <li key={index}>
            <Image
              src={src}
              alt={`Image ${index}`}
              width={600}
              height={450}
              layout="responsive"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
