'use client';

import { Color, Gallery } from '@/types';
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import ColorSortableItem from './color-sortable-item';
import useUpdateProductColorOrder from '@/services/hooks/product-hooks/useUpdateProductColorOrder';

export type TItem = Gallery;

export default function ColorDndKit({
  items,
  setItems,
  productId,
}: {
  items: Color[];
  setItems: (data: any) => void;
  productId: string;
}) {
  const updateOrder = useUpdateProductColorOrder();

  // for input methods detection
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(PointerSensor),

    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // triggered when dragging ends
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeItem = items.find((item) => item.id === active.id);
    const overItem = items.find((item) => item.id === over.id);

    if (!activeItem || !overItem) {
      return;
    }

    const activeIndex = items.findIndex((item) => item.id === active.id);
    const overIndex = items.findIndex((item) => item.id === over.id);

    if (activeIndex !== overIndex) {
      setItems((prev: any) => arrayMove<Color[]>(prev, activeIndex, overIndex));
      updateOrder.mutate({
        id: productId,
        colors: arrayMove<Color>(items, activeIndex, overIndex),
      });
    }
  };

  return (
    <DndContext
      modifiers={[restrictToVerticalAxis]}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {items.map((item) => (
          <ColorSortableItem
            key={item.id}
            id={item.id}
            active={item.active}
            item={item}
            name={item.name}
            galleries={item.galleries}
            price={item.price}
            salePrice={item.salePrice}
            sizes={item.sizes}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}
