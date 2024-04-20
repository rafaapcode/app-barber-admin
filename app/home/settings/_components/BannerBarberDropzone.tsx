import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { UploadCloudIcon } from 'lucide-react';

export default function BannerBarberDropzone() {
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
      <div className='relative w-64 h-28 md:w-40 md:h-24 lg:w-56 lg:h-28 xl:w-72 xl:h-32'>
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
        <p className='text-neutral-400 font-bold text-xs md:text-sm xl:text-base'>Arraste e Solte ou clique seu banner aqui ! </p>
        <UploadCloudIcon className='w-4 h-4 xl:w-8 xl:h-8 mx-auto mt-3'/>
      </div>
      <aside className='absolute top-16 lg:top-24 xl:top-20'>
        {thumbs}
      </aside>
    </section>
  );
}
