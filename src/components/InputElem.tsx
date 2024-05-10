import { Input } from "./ui/input";

const InputElem = ({
  label,
  type,
  placeholder,

  ...props
}: {
  label: string;
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string | number;
}) => {
  return (
    <>
      <div>
        <div className="mb-2">
          <label htmlFor="" className="text-xs font-semibold  ">
            {label}
          </label>
        </div>

        <Input type={type} placeholder={placeholder || label} {...props} />
      </div>
    </>
  );
};

export default InputElem;
