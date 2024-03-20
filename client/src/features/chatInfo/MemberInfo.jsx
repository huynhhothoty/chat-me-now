function MemberInfo({ member }) {
    return (
        <div className='my-[4px] flex h-[50px] items-center gap-4 rounded-md border-[2px] border-solid border-black px-3 duration-500 hover:cursor-pointer hover:bg-slate-200'>
            <div className='h-[40px] w-[40px] rounded-full [border:1px_solid_black]'></div>
            {member.name}
            <div className='ml-auto'>✅ Online</div>
        </div>
    );
}

export default MemberInfo;
