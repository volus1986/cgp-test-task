export default function ParagraphWidgetPreview({ value }: { value: string }) {
    return (
        <img
            className="
                max-w-full px-[15px] rounded-sm
                font-[Roboto] font-normal text-[14px] leading-[150%] tracking-[0.275px]
                align-middle text-center
            "
            src={value}
            alt={value}
        />
    );
}
