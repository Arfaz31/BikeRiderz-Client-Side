import { useForm, FieldValues, Path } from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder: string;
  register: ReturnType<typeof useForm<T>>["register"];
  type?: string;
  defaultValue?: T[keyof T]; // Update the type to allow any type
}

const OptionalInputField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  register,
  type = "text",
  defaultValue,
}: InputFieldProps<T>) => {
  if (Array.isArray(defaultValue)) {
    // Handle array of strings (image)
    return (
      <div className="pb-6 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          {label}
        </label>
        {defaultValue.map((image: string, index: number) => (
          <input
            key={index}
            type="text"
            defaultValue={image}
            placeholder={placeholder}
            {...register(`${name}.${index}` as Path<T>)} // Use as Path<T> type assertion
            className="border border-[#ff950a] focus:outline-none w-full h-12 px-3"
          />
        ))}
      </div>
    );
  } else if (typeof defaultValue === "boolean") {
    // Handle boolean value (isAvailable)

    return (
      <div className="pb-6 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          {label}
        </label>

        <select
          defaultValue={defaultValue ? "true" : "false"}
          {...register(name as Path<T>)} // Use as Path<T> type assertion
          className="border border-[#ff950a] focus:outline-none w-full h-12 px-3"
        >
          <option value="true">True</option>

          <option value="false">False</option>
        </select>
      </div>
    );
  } else {
    // Handle string and number types
    return (
      <div className="pb-6 relative">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          {label}
        </label>
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name as Path<T>)} // Use as Path<T> type assertion
          className="border border-[#ff950a] focus:outline-none w-full h-12 px-3"
        />
      </div>
    );
  }
};

export default OptionalInputField;
