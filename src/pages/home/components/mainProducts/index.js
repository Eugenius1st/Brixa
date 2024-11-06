const MainProduct = () => {
    const appleKinds = [
        { title: '아로니아' },
        { title: '시나노골드' },
        { title: '시나노 스위트' },
        { title: '재즈사과' },
    ];
    return (
        <div>
            <div>대표상품</div>
            <div className="grid grid-cols-4">
                {appleKinds.map((el) => (
                    <div className={el.title}>{el.title}</div>
                ))}
            </div>
        </div>
    );
};

export default MainProduct;
