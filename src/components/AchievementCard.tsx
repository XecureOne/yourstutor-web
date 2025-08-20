interface AchievementCardProps {
  name: string;
  grade: string;
  result: string;
  imgSrc?: string; // optional
}

export const AchievementCard = ({ name, grade, result, imgSrc }: AchievementCardProps) => {
  return (
    <div className="flex flex-col items-center text-white">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={name}
          className="w-25 h-25 sm:w-40 sm:h-40 rounded-full object-cover mb-2"
        />
      ) : (
        <div className="w-25 h-25 sm:w-40 sm:h-40 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-18 text-slate-500 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

        </div>
      )}
      <p className="text-sm font-semibold text-center">{name}</p>
      <p className="text-xs font-bold">{grade}</p>
      <p className="font-medium text-yellow-300 text-center">{result}</p>
    </div>
  );
};