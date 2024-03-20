function ChatMessage({ msg, isMine, msgRef }) {
    return isMine === false ? (
        <div
            ref={msgRef}
            className='mb-[6px] w-fit max-w-[70%] break-words break-all rounded-[30px] bg-orange-100 px-[25px] py-[10px]'
        >
            {msg}
        </div>
    ) : (
        <div
            ref={msgRef}
            className='mb-[6px] ml-auto w-fit max-w-[70%] break-words break-all rounded-[30px] bg-blue-100 px-[25px] py-[10px]'
        >
            {msg}
        </div>
    );
}

export default ChatMessage;
