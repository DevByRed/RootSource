import { JobDto } from "./jobs-dto";

export interface EmployerDto {
  // Représente un employeur dans le système
  id: string;
  personalInfo: PersonalInfo; // Informations personnelles de l'employeur
  companyInfo: CompanyInfo; // Informations générales sur l'entreprise
  address: Address; // Adresse complète de l'entreprise
  contact: Contact; // Informations de contact de l'entreprise
  //  Offres d'emploi publiées par l'employeur
  jobOfferIds: string[]; // Liste des IDs des offres d'emploi
  jobOffers?: JobDto[]; // Objets complets des offres d'emploi (optionnel)
  benefits: string[]; // Avantages proposés par l'entreprise (ex : tickets resto, mutuelle, etc.)
  createdAt: string; // Date de création de l'employeur dans le système
  updatedAt?: string; // Date de dernière mise à jour (optionnel)
}

export interface CompanyInfo {
  name: string; // Nom de l'entreprise
  sector: string; // Secteur d'activité
  size: CompanySize; // Taille de l'entreprise
  description: string; // Description de l'entreprise
  website?: string; // Site web de l'entreprise (optionnel)
}

export interface Address {
  street?: string; // Rue (optionnel)
  city: string; // Ville
  postalCode?: string; // Code postal (optionnel)
  country: string; // Pays
}

export interface Contact {
  email: string; // Adresse e-mail de contact
  phone?: string; // Numéro de téléphone (optionnel)
  contactPerson: string; // Nom de la personne à contacter
}

export enum CompanySize {
  STARTUP = "Startup",
  PME = "PME",
  CHAINE = "Chaîne",
  GRANDE_ENTREPRISE = "Grande entreprise",
}

export enum ContractType {
  CDI = "CDI",
  CDD = "CDD",
  FREELANCE = "Freelance",
  INTERIM = "Intérim",
  STAGE = "Stage",
  TEMPS_PARTIEL = "Temps partiel",
  SAISONNIER = "Saisonnier",
}

export enum ExperienceLevel {
  JUNIOR = "Junior",
  INTERMEDIAIRE = "Intermédiaire",
  SENIOR = "Senior",
  EXPERT = "Expert",
}

export interface PersonalInfo {
  firstName: string; // Prénom de l'employeur
  lastName: string; // Nom de famille de l'employeur
  dateOfBirth?: string; // Date de naissance (optionnel, format ISO 8601)
  gender?: "MALE" | "FEMALE" | "OTHER"; // Genre (optionnel)
  nationalId?: string; // Numéro d'identité nationale (optionnel)
  phoneNumber?: string; // Numéro de téléphone personnel (optionnel)
  email: string; // Adresse e-mail personnelle
  profilePictureUrl?: string; // URL de la photo de profil (optionnel)
}
