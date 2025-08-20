interface Personcardprops{
    label:string,
    desc:string,
    d?:string
}

export const Personcard = ({ label, desc,d }: Personcardprops) => {
  return (
    <div className="flex items-start space-x-3 py-4 max-w-md w-full">
      
      <div className="flex-shrink-0">
        <Icons d={d} />
      </div>

      
      <div className="flex flex-col">
        <div className="font-bold text-sm sm:text-lg text-slate-100">{label}</div>
        <div className="text-slate-200 text-sm sm:text-base">{desc}</div>
      </div>
    </div>
  );
};

interface Iconprops{
    d?:string
}


function Icons({d}:Iconprops) {
  return (
    <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-4xl flex items-center justify-center bg-slate-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-8 h-8 text-pink-500"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={d||"M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"}
        />
      </svg>
    </div>
  );
}