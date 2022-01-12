export default function HeaderItem({ title, Icon }) {
    return (
        <div className="cursor-pointer flex flex-col items-center group w-12 sm:w-12 hover:text-white">
            <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
        </div>
    )
}
