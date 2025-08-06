import { useState, useRef, useEffect } from "react";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  options: Option[];
  selected: string;
  setSelected: (value: string) => void;
}

export default function CustomSelect({
  options,
  selected,
  setSelected
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === selected)?.label || "Selecione uma opção";

  return (
    <div ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedLabel}</span>
        <div>{isOpen ? "▲" : "▼"}</div>
      </div>

      {isOpen && (
        <div>
          {options.map((option) => (
            <div
              key={option.value}
              className={` ${option.value === selected }`}
              onClick={() => {
                setSelected(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
