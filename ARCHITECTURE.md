# Architecture Fonctionnelle - JobConnect

## 🎯 Vision

Plateforme de recrutement Belgique - Candidats ↔ Employeurs

---

## 📋 Structure du Site

### Routes Principales

```
/                           # Accueil
├── /emplois               # Recherche d'emploi
│   └── /emplois/:id       # Détail offre
│       └── /postuler/:id  # Candidature
├── /publier-offre         # Publication (Employeurs)
├── /dashboard
│   ├── /candidat          # Espace candidat
│   └── /employeur         # Espace employeur
├── /bureaux               # Nos bureaux
├── /a-propos              # Présentation
├── /contact               # Contact
├── /inscription           # Inscription
└── /connexion             # Connexion
```

---

## 🏠 Page d'Accueil (`/`)

```
Navigation
├── Logo JobConnect
├── Menu: Emplois | Bureaux | À Propos | Contact
├── Actions: Connexion | Inscription
└── Profil: "Candidat" | "Employeur"

Hero Section
├── Titre: "Trouvez votre prochain emploi en Belgique"
├── Recherche rapide: [Poste] + [Ville] + [Rechercher]
└── Stats: Offres actives | Candidats | Entreprises

Contenu
├── Offres populaires (carrousel 6-8 offres)
├── Secteurs d'activité (grille avec compteurs)
├── Employeurs partenaires (logos + lien publication)
└── Bureaux (carte interactive 5 bureaux)
```

---

## 🔍 Recherche d'Emploi (`/emplois`)

```
Filtres
├── Principal: Poste/Compétences
├── Géographie: Ville | Province | Télétravail
├── Contrat: CDI | Freelance | Intérim | Stage
├── Expérience: Junior → Expert
├── Secteur: Sélection multiple
└── Salaire: Min/Max

Résultats
├── Compteur + Tri (Pertinence | Date | Salaire)
├── Carte offre (répétable):
│   ├── Titre (cliquable) + Entreprise + Logo
│   ├── Localisation + Type contrat (badges)
│   ├── Salaire + Expérience + Extrait
│   └── Actions: [Postuler] [Sauvegarder]
└── Pagination/Scroll infini
```

---

## 📄 Détail d'Offre (`/emplois/:id`)

```
En-tête
├── H1: Titre du poste
├── Entreprise: Nom + Logo + Lien profil
├── Infos: Localisation | Contrat | Expérience
├── Salaire (si communiqué)
└── CTA: [Postuler maintenant]

Contenu
├── Description:
│   ├── Résumé du poste
│   ├── Missions et responsabilités
│   ├── Profil recherché
│   └── Avantages proposés
├── Entreprise:
│   ├── À propos + Secteur + Taille
│   └── Autres offres (lien)
└── Suggestions: 4-6 offres similaires

Actions
├── Principal: [Postuler]
├── Secondaires: [Sauvegarder] [Partager]
└── Non-connecté: "Connectez-vous pour postuler"
```

---

## ✉️ Candidature (`/postuler/:id`)

```
Rappel offre
├── Titre + Entreprise
└── [Retour à l'offre]

Formulaire
├── Infos personnelles (pré-remplies si connecté)
├── Documents:
│   ├── CV (PDF)
│   ├── Lettre motivation
│   └── Portfolio/Certifications
├── Message personnalisé (2000 car.)
├── Questions spécifiques employeur:
│   ├── Disponibilité
│   ├── Prétentions salariales
│   └── Questions métier
└── Validation:
    ├── Prévisualisation
    ├── Consentement RGPD
    └── [Envoyer candidature]
```

---

## 👤 Dashboard Candidat (`/dashboard/candidat`)

```
Menu latéral
├── Mon Profil
├── Mes Candidatures
├── Offres Sauvegardées
├── Alertes Emploi
├── CV et Documents
└── Paramètres

Vue d'ensemble
├── Activité: Candidatures envoyées/réponses
├── Prochaines étapes: Entretiens planifiés
├── Recommandations: Offres suggérées
└── Stats: Taux réponse, profil complété

Gestion candidatures
├── Tableau: Poste | Date | Statut | Actions
├── Filtres: Toutes | En cours | Acceptées | Refusées
└── Export PDF/Excel

Profil
├── Infos personnelles (édition inline)
├── Expériences (chronologie)
├── Formations + Certifications
├── Compétences (tags + niveau)
└── Visibilité: Public/Privé
```

---

## 🏢 Dashboard Employeur (`/dashboard/employeur`)

```
Menu principal
├── Vue d'Ensemble
├── Mes Offres
├── Candidatures Reçues
├── Profil Entreprise
├── Facturation
└── Paramètres

Vue d'ensemble
├── Métriques:
│   ├── Offres actives/total
│   ├── Candidatures reçues/à traiter
│   └── Taux conversion + Délai moyen
└── Actions rapides: [Publier offre] [Candidatures]

Gestion offres
├── Liste: Titre | Statut | Date | Vues | Candidatures
├── Actions: Modifier | Dupliquer | Fermer | Stats
└── [Nouvelle offre]

Gestion candidatures
├── Vue par offre (groupement)
├── Tableau candidats:
│   ├── Photo + Nom + Titre profil
│   ├── Formation + Date candidature
│   ├── Statut process + Note (5★)
│   └── Actions: Détail | Contact | Entretien
└── Filtres avancés + Notes collaboratives
```

---

## ✍️ Publication d'Offre (`/publier-offre`)

```
Étapes (5 étapes)
├── 1. Généralités: Titre | Secteur | Lieu | Contrat | Expérience
├── 2. Description: Résumé | Missions | Contexte | Évolutions
├── 3. Profil: Compétences tech | Soft skills | Formation | Expérience
├── 4. Conditions: Salaire | Avantages | Horaires | Prise de poste
└── 5. Prévisualisation + Publication

Assistance
├── Templates par secteur/fonction
├── Suggestions intelligentes
├── Prévisualisation live
└── Score d'attractivité

Options publication
├── Gratuite: 30 jours visibilité standard
└── Premium: Mise en avant + durée étendue
```

---

## 🏢 Page Bureaux (`/bureaux`)

```
En-tête
├── Titre: "Nos bureaux en Belgique"
└── Carte interactive (5 markers)

Pour chaque bureau
├── Photo + Nom + Type
├── Adresse complète
├── Contact: Tel | Email | Manager
├── Spécialisations (badges)
├── Services: CDI | Intérim | Conseil
├── Équipe: Recruteurs | Consultants | Admin
├── Horaires hebdomadaires
└── [Contacter ce bureau]

Interactions
├── Géolocalisation utilisateur
├── Bureau le plus proche
├── RDV en ligne (calendrier)
└── Chat direct pendant heures ouverture
```

---

## 📞 Page Contact (`/contact`)

```
Méthodes contact
├── Chat en direct (agents disponibles)
├── Callback (demande rappel)
└── FAQ intelligente (recherche mots-clés)

Coordonnées
├── Siège social: Adresse | Tel | Email
└── Horaires support globaux

Formulaire
├── Profil: Candidat | Employeur | Autre
├── Sujet par profil:
│   ├── Candidat: Candidature | Technique | Conseil
│   └── Employeur: Publication | Facturation | Support
├── Message + Pièce jointe
├── Urgence: Normal | Urgent
└── RGPD + [Envoyer]

Engagement
├── Réponse < 24h
├── Numéro ticket généré
└── Escalade vers expert si besoin
```

---

## ℹ️ Page À Propos (`/a-propos`)

```
Sections
├── Notre Histoire: Fondation | Évolution | Chiffres clés
├── Mission/Valeurs: Excellence | Proximité | Innovation | Éthique
├── Expertise: Secteurs | Types recrutement | Géographie Belgique
├── Équipe: Direction | Consultants experts | Philosophie RH
├── Certifications: Labels qualité | Partenaires | Adhésions
└── Témoignages: Success stories | Avis employeurs | Notes tiers
```

---

## 🔐 Authentification

```
Inscription (/inscription)
├── Sélection: Candidat | Employeur
├── Formulaire adapté par profil
├── Validation email sécurisé
└── Onboarding premiers pas

Connexion (/connexion)
├── Login: Email/mot de passe
├── Options: Se souvenir | Mot de passe oublié
├── Social: LinkedIn | Google (candidats)
└── Redirection intelligente
```

---