export default function ParagraphWidgetPreview({ value }: { value: string }) {
    if (!value) return null;

    return (
        <div className="w-full px-[15px]">
            <img className="max-w-full rounded-sm" src={value} alt={value} />
        </div>
    );
}
