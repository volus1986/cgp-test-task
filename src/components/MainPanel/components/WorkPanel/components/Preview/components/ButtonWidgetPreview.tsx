export default function ButtonWidgetPreview({ value }: { value: string }) {
    return (
        <button
            className="
                bg-[#4368E0] rounded-sm px-[30px] py-[10px]
                font-[Roboto] font-medium text-[14px] leading-[145%] tracking-[0.275px] text-center align-bottom text-[#F6F9FE]
            "
        >
            {value}
        </button>
    );
}
