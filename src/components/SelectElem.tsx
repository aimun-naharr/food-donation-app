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
}: {
  label: string;
  placeholder?: string;
  name?: string;

  onChange: (e: string) => void;
}) => {
  return (
    <>
      <div>
        <div className="mb-2">
          <label htmlFor="" className="text-xs font-semibold  ">
            {label}
          </label>
        </div>
        <Select onValueChange={onChange}>
          <SelectTrigger className="w-full" onChange={(e) => onChange(e)}>
            <SelectValue placeholder={placeholder || label} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default SelectElem;
