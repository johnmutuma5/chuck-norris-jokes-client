import React from 'react';
import LoaderWrapper from './styles';
import DotLoader from 'react-spinners/DotLoader';

interface ILoaderProps {
  children?: string | string[];
}

const Loader: React.FC<ILoaderProps> = ({ children }) => {
  return (
    <LoaderWrapper>
      <DotLoader color='#4c4439' css='margin-right:25px' />
      { children }
    </LoaderWrapper>
  );
};

export default Loader;
