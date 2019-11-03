import { Input } from 'antd';

const Hero = ({type = "text", className=""}) => {
  return (
    <Input placeholder="Basic usage" type={type} className={className}/>
  );
};

export default Hero;