import React, { createRef, useEffect, useState } from 'react';

import { useDragHook } from './custom-drag.hook';
import { DeletableBackground } from './deletable-background';

type Props = {
    children: React.ReactNode;
    style?: Record<string, any>;
    onDelete?: () => void;
    loading?: boolean;
};

export function DragDeletable(props: Props) {
    const {
        style = {},
        onDelete = () => {},
        loading = false,
        children,
    } = props;

    const [listeners, dragContext] = useDragHook();
    const { onMouseDown, onMouseUp, onMouseMove } = listeners;
    const { translate, isDragging } = dragContext;

    const [width, setWidth] = useState<number | undefined>();
    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        setWidth(ref.current?.offsetWidth);
        const handleResize = (e: Event) => {
            setWidth(ref.current?.offsetWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [ref]);

    const [passedThreshold, setPassedThreshold] = useState(false);
    useEffect(() => {
        if (isDragging) {
            if (translate && width) {
                setPassedThreshold(-translate / width > 0.25);
            }
        }
    }, [translate, width, isDragging]);

    const transform =
        passedThreshold && !isDragging
            ? 'translateX(-1000%)'
            : `translateX(${Math.min(translate, 0)}px)`;

    useEffect(() => {
        if (passedThreshold && !isDragging) {
            onDelete();
        }
    }, [passedThreshold, isDragging]);

    return (
        <div
            ref={ref}
            role="presentation"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            style={{ position: 'relative', ...style }}
        >
            <div style={{ transform, cursor: 'move' }}>{children}</div>
            <DeletableBackground
                passedThreshold={passedThreshold}
                loading={loading}
            />
        </div>
    );
}
