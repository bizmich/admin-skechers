'use client';

import SortableItem from '@/components/dnd-kit/sortableItem';
import { Gallery } from '@/types';
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
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

export type TItem = Gallery;

export default function DndKit({
  items,
  setItems,
  onDelete,
}: {
  onDelete: (id: string) => void;
  items: Gallery[];
  setItems: (data: any) => void;
}) {
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
      setItems((prev: any) => arrayMove<TItem>(prev, activeIndex, overIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <div className='grid grid-cols-4 gap-2'>
          {items.map((item) => (
            <SortableItem onDelete={onDelete} key={item.id} item={item} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
