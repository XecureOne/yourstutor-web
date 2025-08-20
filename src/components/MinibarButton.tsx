interface MinibuttonProps {
  label: string;
  d?: string;
  redirect?: string; // External link like https://instagram.com/...
}

export const Minibarbutton = ({ label, d, redirect }: MinibuttonProps) => {
  const content = (
    <div className="flex space-x-0.5 cursor-pointer hover:text-slate-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-[18px] w-5 mr-1 test-white flex items-center"
      >
        <path
          
          d={
            d ||
            "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          }
        />
      </svg>

      <div className="text-white hover:text-slate-200 text-[13px]">
        {label}
      </div>
    </div>
  );

  return redirect ? (
    <a href={redirect} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};