export interface CandidatDto {
  id: string;
  personalInfo: PersonalInfo;
  address: Address;
  professionalProfile: ProfessionalProfile;
  cvUrl: string;
  createdAt: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface ProfessionalProfile {
  experienceLevel: ExperienceLevel;
  skills: string[];
  availability: string;
  preferredContractTypes: ContractType[];
  preferredSectors: string[];
}

export enum ExperienceLevel {
  JUNIOR = "Junior",
  INTERMEDIAIRE = "Intermédiaire",
  SENIOR = "Senior",
  EXPERT = "Expert",
}

export enum ContractType {
  CDI = "CDI",
  CDD = "CDD",
  FREELANCE = "Freelance",
  INTERIM = "Intérim",
  STAGE = "Stage",
}
