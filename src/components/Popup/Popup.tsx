import React, { FC, ReactNode, useRef } from 'react';

import { useClickOutside } from './hooks/useClickOutside';
import { cnPopup } from './Popup.classname';

import './Popup.css';

type PopupProps = {
    content: ReactNode;
};

export const Popup: FC<PopupProps> = ({ content }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const { open } = useClickOutside({ ref: popupRef });

    return open ? <div ref={popupRef} className={cnPopup()}>
        {content}
    </div> : null;
};
