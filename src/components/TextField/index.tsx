import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from "react";

import * as S from "./styles";

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  initialValue = "",
  icon,
  name,
  iconPosition = "left",
  disabled = false,
  onInput,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
