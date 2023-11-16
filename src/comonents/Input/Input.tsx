import React, { FC } from 'react';
import styles from './Input.module.scss';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { IAuthFormValues } from '@/types/types';
import test from '../../assets/icons/user-icon.svg';


type InputProps = {
  label: string;
  name: Path<IAuthFormValues>;
  register: UseFormRegister<IAuthFormValues>;
  required: string;
  errors: FieldErrors<IAuthFormValues>;
  type?: 'text' | 'password' | 'email';
  icon?: any;
  onIconClick?: () => void;
};

const Input: FC<InputProps> = (
  { label,
    name,
    register,
    required,
    errors,
    type = 'text',
    icon,
    onIconClick, }
) => {
  console.log(test)
  return (
    <div>
      <label className={styles.inputContainer}>
        <span className={styles.label}>{label}</span>

        <button
          type='button'
          style={{ background: `url("${icon}") center no-repeat` }}
          className={styles.icon}
          onClick={onIconClick}
          disabled={!onIconClick}>
        </button>

        <input
          className={styles.input}
          type={type}
          {...register}
          {...register(name, { required })} />

      </label>
      {errors[name] && <span className={styles.error}>{errors[name]?.message}</span>}
    </div>
  );
};

export default Input;