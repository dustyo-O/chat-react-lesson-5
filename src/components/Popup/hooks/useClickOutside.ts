import React, { useState, useEffect } from 'react';

function isInParent(block: HTMLElement, parent: HTMLElement): boolean {
    if (block === parent) {
        return true;
    }

    if (!block.parentElement) {
        return false;
    }

    return isInParent(block.parentElement, parent);
}

export const useClickOutside = ({ ref }: { ref: React.RefObject<HTMLElement> }) => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        document.documentElement.addEventListener('click', (event: MouseEvent) => {
            const target = event.target;

            if (!(target instanceof HTMLElement)) {
                return;
            }

            if (!isInParent(target, ref.current!)) {
                setOpen(false);
            }
        }, true);
    }, [ref]);

    return { open };
}
