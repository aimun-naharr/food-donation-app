import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SelectElem = ({
  label,
  placeholder,
  onChange,
  options,
}: {
  label: string;
  placeholder?: string;
  name?: string;
  options: string[];
  onChange: (e: string) => void;
}) => {
  return (
    <>
      <div>
        <div className="mb-1">
          <label htmlFor="" className="text-xs font-semibold  ">
            {label}
          </label>
        </div>
        <Select onValueChange={onChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder || label} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => {
              return (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default SelectElem;
