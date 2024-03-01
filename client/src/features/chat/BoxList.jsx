import BoxListItem from './BoxListItem';

function BoxList() {
    const fakeList = Array.from({ length: 30 }, (value, index) => index);
    return (
        <div className='px-[5px]'>
            {fakeList.map((item) => (
                <BoxListItem key={item} name={'test'} />
            ))}
        </div>
    );
}

export default BoxList;
