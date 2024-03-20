import { Spin } from 'antd';
import BoxListItem from './BoxListItem';
import { useBoxList } from './useBoxList';

function BoxList() {
    // const fakeList = Array.from({ length: 30 }, (value, index) => index);
    const { isLoadingBox, boxList } = useBoxList();
    if (isLoadingBox) return <Spin size='large' className='flex items-center justify-center' />;

    return (
        <div className=' flex h-full flex-col'>
            <div className='flex-grow overflow-y-scroll px-[5px]'>
                {boxList.map((item) => (
                    <BoxListItem key={item._id} box={item} />
                ))}
            </div>
        </div>
    );
}

export default BoxList;
