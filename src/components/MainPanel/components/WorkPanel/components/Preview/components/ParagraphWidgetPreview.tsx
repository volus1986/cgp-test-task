export default function ParagraphWidgetPreview({ value }: { value: string }) {
    return (
        <p
            className="
                max-w-full
                font-[Roboto] font-normal text-[14px] leading-[150%] tracking-[0.275px] text-[#97AACD]
                align-middle text-center
                whitespace-pre-wrap
        "
        >
            {value}
        </p>
    );
}
