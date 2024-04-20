import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { UploadCloudIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function BarbershopStructureDropzone() {
  const [files, setFiles] = useState<any>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles: any) => {
      setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      acceptedFiles.forEach((file: any) => {
        const reader = new FileReader();

        reader.onabort = () => toast.error("Upload abortado !!");
        reader.onerror = () => toast.error("Upload com erro !!");
        reader.onload = async () => {
          // await uploadImage(file);
        };
        reader.readAsArrayBuffer(file);
      })
    },
    maxFiles: 4
  });

  const thumbs = files.map((file: any) => (
    <div key={file.name}>
      <div className='relative w-20 h-16 md:w-20 md:h-12 lg:w-28 lg:h-20  xl:w-44 xl:h-28 mt-2'>
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
        <p className='text-neutral-400 font-bold text-xs md:text-sm xl:text-base'>Arraste e Solte ou clique para colocar as fotos de sua barbearia aqui ! </p>
        <UploadCloudIcon className='w-4 h-4 lg:w-8 lg:h-8 xl:w-8 xl:h-8 mx-auto mt-5'/>
      </div>
      <aside className='absolute top-20 lg:top-28 xl:top-28 flex gap-2 lg:gap-3'>
        {thumbs}
      </aside>
    </section>
  );
}
