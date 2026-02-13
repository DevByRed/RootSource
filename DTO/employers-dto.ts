export interface EmployerDto {
  id: string;
  companyInfo: CompanyInfo;
  address: Address;
  contact: Contact;
  jobOffers: JobOffers;
  benefits: string[];
  createdAt: string;
}

export interface CompanyInfo {
  name: string;
  sector: string;
  size: CompanySize;
  description: string;
  website: string;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Contact {
  email: string;
  phone: string;
  contactPerson: string;
}

export interface JobOffers {
  activePositions: string[];
  contractTypes: ContractType[];
  experienceLevels: ExperienceLevel[];
}

export enum CompanySize {
  STARTUP = 'Startup',
  PME = 'PME',
  CHAINE = 'Chaîne',
  GRANDE_ENTREPRISE = 'Grande entreprise'
}

export enum ContractType {
  CDI = 'CDI',
  CDD = 'CDD',
  FREELANCE = 'Freelance',
  INTERIM = 'Intérim',
  STAGE = 'Stage',
  TEMPS_PARTIEL = 'Temps partiel',
  SAISONNIER = 'Saisonnier'
}

export enum ExperienceLevel {
  JUNIOR = 'Junior',
  INTERMEDIAIRE = 'Intermédiaire',
  SENIOR = 'Senior',
  EXPERT = 'Expert'
}
