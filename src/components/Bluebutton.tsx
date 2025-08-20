interface BluebuttonProps{
    label: string
    href?:string

}

export const Bluebutton = ({label,href}:BluebuttonProps)=>{
    return <a href={"#"+href} className="hover:scale-110 transition-all text-slate-100 cursor-pointer px-5">
        {label}
    </a>
}