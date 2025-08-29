export const ErrorMessage = () => {
    return (
        <div className="relative z-[-1] overflow-hidden text-center">
            <h2 className="font-montserrat pc:text-4xl mb-5 text-2xl font-semibold uppercase">
                Упс... Щось пішло не так!
            </h2>
            <p className="pc:text-2xl text-lg">
                Спробуйте ще раз пізніше або зв'яжіться з нами за телефоном.
            </p>
        </div>
    );
};
