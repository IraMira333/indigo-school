export const SuccessMessage = () => {
    return (
        <div className="relative z-[-1] h-screen w-screen overflow-hidden">
            <div className="pc:max-w-[485px] tab:mt-[50vh] mx-auto mt-[40vh] w-[80%] max-w-[436px] min-w-[288px] text-center">
                <h2 className="font-exo text-2xl13 tab:text-4xl12 mb-5 font-semibold uppercase">
                    Вітаємо
                </h2>
                <p className="text-sm13 tab:text-base13 pc:text-lg13">
                    Наш менеджер зв'яжеться з вами найближчим часом.
                </p>
            </div>
        </div>
    );
};
