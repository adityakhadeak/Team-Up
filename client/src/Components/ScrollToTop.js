import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])




  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };


    // Scroll to top when the page is about to be reloaded
    const handleBeforeUnload = () => {
      handleScrollToTop();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
}

export default ScrollToTop
