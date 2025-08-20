interface ExpertComponentProps{
    title:string,
    label:string
}

export const ExpertComponent = ({title,label}:ExpertComponentProps)=>{
    return <div className="flex flex-col px-2">
        <div className="w-64 h-44 overflow-hidden rounded-lg">
            <img
                src="/assets/mountains.jpg"
                alt="Zoom"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            
        </div>
        <div className="w-64">
            <div className="w-50 text-2xl font-bold py-5">{title}</div>
            <div>{label}</div>
        </div>
        
    </div>
}