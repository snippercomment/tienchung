import { useEffect, useRef } from "react";

import "./SearchBox.css";
interface Props {
  onClose: () => void;
}

const SearchBox = ({ onClose }: Props) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="search-popup" ref={boxRef}>
      <div className="search-inner">
        
        <input type="text" placeholder="Tìm sản phẩm, thương hiệu..." />
      </div>
    </div>
  );
};

export default SearchBox;
