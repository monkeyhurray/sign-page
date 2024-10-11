import { FieldError, UseFormRegister } from 'react-hook-form';
import { SignUserType } from '@/types/signType';

export interface InputType {
  register: UseFormRegister<SignUserType>;
  id?: string;
  password?: string;
  confirmPassword?: string;
  nickName?: string;
  phoneNumber?: string;
  placeholder: string;
  type: string;
  errors?: FieldError;
  changeType?: () => void;
}
