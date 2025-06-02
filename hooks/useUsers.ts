import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../api";
interface User {
  id: number;
  firstName: string;
  lastName?: string | null;
  birthDate?: string | null;
  balance: string;
  password: string;
  image?: string | null;
  loginAttempts: number;
  lockedUntil?: string | null;
  isLocked: boolean;
  isActive: boolean;
  isDeleted: boolean;
  lastSeen?: string | null;
  hashedToken?: string | null;
  activation_link?: string | null;
  mainEmailId?: number | null;
  mainEmail?: Email | null;
  mainPhoneId?: number | null;
  mainPhone?: PhoneNumber | null;
  createdAt: string;
  updatedAt: string;
  districtId?: number | null;
  district?: District | null;
  languageId?: number | null;
  language?: Language | null;
  PhoneNumbers: PhoneNumber[];
}
interface Email {
  id: number;
  email: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface PhoneNumber {
  id: number;
  number: string;
  createdAt: string;
  updatedAt: string;
}

interface District {
  id: number;
  name: string;
  regionId: number;
  createdAt: string;
  updatedAt: string;
}

interface Language {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const useUserById = (id: number) => {
  return useQuery<User>({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};
