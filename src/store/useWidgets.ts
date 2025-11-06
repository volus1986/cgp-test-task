import { create } from 'zustand';

export enum WidgetTypes {
    headline = 'headline',
    paragraph = 'paragraph',
    button = 'button',
    image = 'image',
}

export type Widget = {
    type: WidgetTypes;
    value: string;
};

type State = {
    widgets: Widget[];
    moveWidget: (index: number, direction: 'up' | 'down') => void;
    addWidget: (widget: Widget) => void;
    removeWidget: (index: number) => void;
    updateWidget: (index: number, value: string) => void;
    copyWidget: (index: number) => void;
};

const testWidgets: Widget[] = [
    // todo: only for test
    {
        type: WidgetTypes.image,
        value: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg',
    },
    {
        type: WidgetTypes.headline,
        value: 'A legendary cap set that feels like new',
    },
    {
        type: WidgetTypes.paragraph,
        value: `Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal.
Using the "Insert" panel on the right, drag and drop 
the Abandoned Cart element onto the page below.`,
    },
    {
        type: WidgetTypes.button,
        value: 'Register now',
    },
];

export const useWidgets = create<State>((set) => ({
    widgets: [...testWidgets],
    moveWidget: (index, direction) =>
        set((state) => {
            const widgets = [...state.widgets];
            const newIndex = direction === 'up' ? index - 1 : index + 1;

            if (newIndex < 0 || newIndex >= widgets.length) return state;

            [widgets[index], widgets[newIndex]] = [widgets[newIndex], widgets[index]];

            return { widgets: widgets };
        }),

    addWidget: (widget) =>
        set((state) => ({
            widgets: [...state.widgets, widget],
        })),

    removeWidget: (index) =>
        set((state) => ({
            widgets: state.widgets.filter((_, i) => i !== index),
        })),

    updateWidget: (i, value) =>
        set((state) => {
            const widgets = [...state.widgets];
            widgets[i].value = value;
            return { widgets };
        }),

    copyWidget: (i) =>
        set((state) => {
            const widgets = [...state.widgets];
            const widget = widgets[i];

            if (!widget) return state;

            widgets.splice(i + 1, 0, { ...widget });
            return { widgets: widgets };
        }),
}));
