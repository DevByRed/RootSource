export interface OfficeDto {
  id: string;
  name: string;
  type: OfficeType;
  address: Address;
  contact: OfficeContact;
  specializations: string[];
  services: string[];
  staff: Staff;
  openingHours: OpeningHours;
  openedAt: string;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface OfficeContact {
  phone: string;
  email: string;
  manager: string;
}

export interface Staff {
  recruiters: number;
  consultants: number;
  administrative: number;
}

export interface OpeningHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday?: string;
  sunday?: string;
}

export enum OfficeType {
  SIEGE_SOCIAL = "Siège Social",
  AGENCE_REGIONALE = "Agence Régionale",
  AGENCE_SPECIALISEE = "Agence Spécialisée",
  AGENCE_LOCALE = "Agence Locale",
}
