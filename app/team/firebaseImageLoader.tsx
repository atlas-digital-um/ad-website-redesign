
interface LoaderProps {
    src: string;
    width?: number; // Optional because fill attribute does not provide width
    quality?: number;
  }
  
const firebaseImageLoader = ({ src, width, quality }: LoaderProps) => {
    return `${src}${quality ? `&q=${quality}` : ''}`;
};
  
  export default firebaseImageLoader;
   