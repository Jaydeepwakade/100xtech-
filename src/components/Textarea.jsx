
export function Textarea({ placeholder, value, onChange, rows }) {
    return (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="border border-gray-300 p-4 rounded-lg w-full"
      />
    );
  }
  