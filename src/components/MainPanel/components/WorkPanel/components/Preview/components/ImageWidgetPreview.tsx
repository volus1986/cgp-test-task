export default function ParagraphWidgetPreview({ value }: { value: string }) {
    return (
        <div className="w-full px-[15px]">
            <img className="max-w-full rounded-sm" src={value} alt={value} />
        </div>
    );
}
