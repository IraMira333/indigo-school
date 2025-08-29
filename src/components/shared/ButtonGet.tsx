"use client";
export const ButtonGet = ({
    className,
    type,
    loading = false,
}: {
    className?: string;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
}) => {
    const handleClick = () => {
        if (type !== "submit") {
            const el = document.getElementById("application");
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    return (
        <button
            type={type ? type : "button"}
            onClick={handleClick}
            className={`from-light-blue pc:w-[400px] pc:text-2xl pc:py-5 pc:px-14 to-blue-custom relative w-[280px] rounded-full bg-gradient-to-b px-11 py-3 font-bold text-white uppercase shadow-[0_8px_20px_-5px_rgba(13,32,152,0.8)] transition-all hover:shadow-[0_10px_25px_-5px_rgba(13,32,152,0.9)] active:translate-y-1 active:shadow-none ${className}`}
        >
            {loading ? (
                <span className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
            ) : type === "submit" ? (
                "відправити заявку"
            ) : (
                "безкоштовний урок"
            )}
        </button>
    );
};
