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

export const useWidgets = create<State>((set) => ({
    widgets: [],
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
