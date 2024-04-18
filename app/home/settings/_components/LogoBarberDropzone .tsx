import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

export default function LogoBarberDropzone() {
  const [files, setFiles] = useState<any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles: any) => {
      setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    },
    maxFiles: 1
  });

  const thumbs = files.map((file: any) => (
    <div key={file.name}>
      <div className='relative w-40 h-32 md:w-36 lg:w-40 lg:h-36 xl:w-50 xl:h-36'>
        <Image
          fill
          src={file.preview}
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
          alt='Preview Image'
          className='object-cover rounded-md'
        />
      </div>
    </div>
  ));

  useEffect(() => {
    return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="relative w-full flex flex-col">
      <div {...getRootProps({ className: 'dropzone' })} className='mb-2 h-[150px]'>
        <input {...getInputProps()} />
        <p className='text-neutral-400 font-bold text-xs md:text-sm xl:text-base'>Arraste e Solte ou clique sua logo aqui ! </p>
      </div>
      <aside className='absolute top-11 lg:top-7 xl:top-8'>
        {thumbs}
      </aside>
    </section>
  );
}
