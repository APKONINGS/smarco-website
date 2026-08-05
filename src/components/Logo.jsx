export default function Logo({ className = 'h-10 w-10' }) {
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-white shadow-sm overflow-hidden shrink-0 ${className}`}
    >
      <img
        src="/logo.png"
        alt="SMART Architecture & Construction Co. Ltd logo"
        className="h-full w-full object-cover"
      />
    </span>
  )
}
