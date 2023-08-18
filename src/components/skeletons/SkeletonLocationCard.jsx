import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonLocationCard() {
  return (
    <div className='my-4 w-full'>
        <Skeleton className='min-h-[360px] max-w-[400px] rounded-2xl' />
        <div className='flex items-center mt-6 mb-3 justify-between'>
            <Skeleton width={210} className='p-1' />
            <Skeleton width={90} className='p-1' />
        </div>
        <Skeleton width={180} className='p-1 mb-3' />
        <Skeleton width={150} className='p-1 mb-3' />
        <Skeleton width={120} className='p-1 mb-3' />
    </div>
  )
}

export default SkeletonLocationCard