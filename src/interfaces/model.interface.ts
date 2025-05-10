export enum RoleAuth {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  MANAGER = 'MANAGER'
}

export interface User {
  id: number;
  userName: string;
  phoneNumber: string;
  email: string;
  password?: string;
  refreshToken?: string;
  avatar?: string;
  role: RoleAuth;
  isBlocked: boolean;
  otp?: string;
  otpExpiration?: number;
  otpAccessToken?: string;
  created_at: Date;
  updated_at: Date;
}
