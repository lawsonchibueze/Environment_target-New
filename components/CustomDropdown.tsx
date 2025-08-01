import { selectProps } from "@/types";

const DropDown = ({
  label,
  placeholder,
  handleChange,
  items,
  name,
  value,
}: selectProps) => {
  return (
    <div className="w-full">
      <label className="block mb-2 text-sm md:text-base font-medium">
        {label}
      </label>
      <select
        name={name}
        onChange={handleChange}
        value={value}
        className="block w-full outline-none focus:border-primary-blue-100 px-4 py-2 text-base text-gray-900 border rounded"
      >
        <option defaultValue={label}>{label}</option>
        {items?.map((item: string, index: number) => (
          <option
            key={index}
            className="disabled:text-red-600 disabled:text-opacity-40"
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
