export function Input({ placeholder, value, onChange }) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 px-4 py-2 rounded-lg w-full"
      />
    );
  }
  