enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}

class Dropdown<T> {
    items: DropdownItem<T>[];
    selectedValue?: T;
    onSelect?: (item: DropdownItem<T>) => void;

    constructor(items: DropdownItem<T>[]) {
        this.items = items;
    }

    select(item: DropdownItem<T>): void {
        this.selectedValue = item.value;

        if (this.onSelect) {
            this.onSelect(item);
        }
    }
}

class DropdownItem<T> {
    value: T;
    label: string;

    constructor(value: T, label: string) {
        this.value = value;
        this.label = label;
    }
}

const dropdown = new Dropdown<Color>([
    new DropdownItem<Color>(Color.Red, 'Red Color'),
    new DropdownItem<Color>(Color.Green, 'Green Color'),
    new DropdownItem<Color>(Color.Blue, 'Blue Color'),
]);

dropdown.onSelect = (item) => {
    console.log(`Selected color: ${item.label} with value ${item.value}`);
};

const item = dropdown.items[1];

if (item) {
    dropdown.select(item);
}
