const Merit = () => {
    const appleMerits = [
        { title: '1962~대를이은전통' },
        { title: '산지직송' },
        { title: '우수관리검증' },
        { title: '예산군 응봉면농장' },
        { title: '17brix당도' },
    ];
    return (
        <div>
            <div>대표상품</div>
            <div className="grid grid-cols-4">
                {appleMerits.map((el) => (
                    <div className={el.title}>{el.title}</div>
                ))}
            </div>
        </div>
    );
};

export default Merit;
