import { useState } from 'react';

export const useTextInput = ({ onChange }: { onChange: (text: string) => void }) => {
    const [text, setText] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setText(value);
        onChange(value);
    };

    return {
        onChange: handleChange,
        value: text,
    };
};
