import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const tempImages = [];
    for (let i = 0; i < 21; i++) {
      tempImages.push(`/${i}.jpg`);
    }
    setImages(tempImages);
  }, []);

  return (
    <div>
      <h1>Image Test: Internal Urls</h1>
      <Link href="/">
        <a>Go to External Urls</a>
      </Link>
      <ul>
        {images.map((src, index) => (
          <li key={index}>
            <Image
              src={src}
              alt={`Image ${index}`}
              width={600}
              height={400}
              layout="responsive"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
