import { useMediaQuery } from 'react-responsive';

export default function useIsMobile() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  return isMobile;
}