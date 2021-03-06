import React from 'react';
import LoaderWrapper from './styles';
import DotLoader from 'react-spinners/DotLoader';

interface ILoaderProps {
  children?: string | string[];
}

const Loader: React.FC<ILoaderProps> = ({ children }) => {
  return (
    <LoaderWrapper>
      <DotLoader size='30px' color='#4c4439' css='margin:25px 0' />
      <div>
        { children }
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
