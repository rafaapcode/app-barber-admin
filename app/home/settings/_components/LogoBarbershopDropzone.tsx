import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { UploadCloudIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function LogoDropzone() {
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
    maxFiles: 1
  });

  const thumbs = files.map((file: any) => (
    <div key={file.name}>
      <div className='relative w-40 h-32 md:h-20 md:w-24 lg:w-24 lg:h-20 xl:w-32 xl:h-24'>
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
        <UploadCloudIcon className='mx-auto w-4 h-4 md:w-8 md:h-8 mt-3'/>
      </div>
      <aside className='absolute top-14 md:top-24 lg:top-24 xl:top-20'>
        {thumbs}
      </aside>
    </section>
  );
}
