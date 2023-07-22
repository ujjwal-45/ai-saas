import Image from 'next/image'

interface emptyProps {
    label: string;
}

export const Empty = ({ label }: emptyProps) => {
  return (
      <div className='h-full p-20 flex flex-col items-center'>
          <div className='relative h-72 w-72'>
              <Image
                  alt="empty"
                  fill
                  src="/empty.svg"
              />
              
          </div>
          <p className='text-muted-foreground text-sm text-center'>
                  {label}
              </p>
              
    </div>
  )
}

