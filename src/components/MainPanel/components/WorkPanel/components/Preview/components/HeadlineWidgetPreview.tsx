export default function HeadlineWidgetPreview({ value }: { value: string }) {
    return (
        <p
            className="
                max-w-full
                font-[Roboto] font-bold text-[22px] leading-[150%] tracking-[0.275px] text-[#252A32]
                align-middle text-center
        "
        >
            {value}
        </p>
    );
}
