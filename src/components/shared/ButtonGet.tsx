export const ButtonGet = ({ className }: { className?: string }) => {
    return (
        <button className={`from-light-blue pc:text-2xl pc:py-5 pc:px-14 to-blue-custom relative rounded-full bg-gradient-to-b px-11 py-3 font-bold text-white uppercase shadow-[0_8px_20px_-5px_rgba(13,32,152,0.8)] transition-all hover:shadow-[0_10px_25px_-5px_rgba(13,32,152,0.9)] active:translate-y-1 active:shadow-none ${className}`}>
            безкоштовний урок
        </button>
    );
};
