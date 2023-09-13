// components/Btn.tsx
import React from 'react';
import  './page.scss';

interface BtnProps {
  buttonText: string;
}

const Btn: React.FC<BtnProps> = ({ buttonText }) => {
  return (
    <div className="green-btn">
      <button type="submit">{buttonText}</button>
    </div>
  );
};

export default Btn;
