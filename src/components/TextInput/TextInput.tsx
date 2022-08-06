import React, { FC } from 'react';
import { useTextInput } from './hooks/useTextInput';
import { cnTextInput } from './TextInput.classname';

type TextInputProps = {
    onChange: (text: string) => void
};

export const TextInput: FC<TextInputProps> = ({ onChange: propsOnChange }) => {
    const { onChange, value } = useTextInput({ onChange: propsOnChange });

    return <input className={cnTextInput()} onChange={onChange} value={value} />
};
