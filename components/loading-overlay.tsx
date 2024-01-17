import { Icons } from './icons';

interface LoadingOverlayProps {
  visible: boolean;
}
const LoadingOverlay = ({ visible }: LoadingOverlayProps) => {
  if (!visible) return null;
  return (
    <div className='fixed inset-0 z-50 bg-background/50 backdrop-blur-sm flex justify-center items-center'>
      <Icons.spinner className='size-16 animate-spin' />
    </div>
  );
};

export default LoadingOverlay;
