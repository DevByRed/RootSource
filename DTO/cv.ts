import { CandidatDto } from "./candidat-dto";

export interface cv {
  id: string;
  candidateId: string;
  candidat?: CandidatDto; // Objet complet du candidat (optionnel)
  summary?: string; // Résumé ou description personnelle (optionnel)
  skills: string[]; // Compétences principales
  languages: LanguageSkill[]; // Langues parlées et leur niveau
  hobbies: string[]; // Centres d'intérêt (optionnel)
  experiences: ExperienceDTO[]; // Liste des expériences professionnelles
  education: EducationDTO[]; // Liste des formations
  certifications?: CertificationDTO[]; // Certifications (optionnel)
  createdAt: string; // Date de création du CV sur le système
  updatedAt?: string; // Date de dernière mise à jour  sur le système(optionnel)
}

export interface ExperienceDTO {
  id: string;
  company: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  location?: string;
}

export interface EducationDTO {
  id: string; // Identifiant unique de la formation
  institution: string; // Nom de l'établissement
  degree: string; // Diplôme obtenu
  fieldOfStudy?: string; // Domaine d'étude (optionnel)
  startDate: string; // Date de début
  endDate?: string; // Date de fin (optionnel, pour les études en cours)
}

export interface CertificationDTO {
  id: string; // Identifiant unique de la certification
  name: string; // Nom de la certification
  issuingOrganization: string; // Organisation émettrice
  issueDate: string; // Date d'obtention
  expirationDate?: string; // Date d'expiration (optionnel)
}

export interface LanguageSkill {
  language: string; // Langue (ex: "Anglais", "Français")
  level: LanguageLevel; // Niveau de maîtrise
}

export enum LanguageLevel {
  BEGINNER = "BEGINNER", // Débutant
  INTERMEDIATE = "INTERMEDIATE", // Intermédiaire
  ADVANCED = "ADVANCED", // Avancé
  FLUENT = "FLUENT", // Courant
  NATIVE = "NATIVE", // Langue maternelle
}
