export function Card({ children }) {
    return <div className="shadow-lg p-4 rounded-lg bg-white">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-6">{children}</div>;
  }