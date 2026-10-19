export type Language = "bn" | "en";

export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  categoryEn: string;
  badge: string;
  badgeEn: string;
  descriptionBn: string;
  descriptionEn: string;
  website?: string;
  location: string;
  locationEn: string;
  founder?: string;
  tags: string[];
}

export type DirectoryItem = PortfolioItem;

export interface TeamMember {
  id: string;
  nameBn: string;
  nameEn: string;
  roleBn: string;
  roleEn: string;
  designationBn: string;
  designationEn: string;
  image?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    github?: string;
  };
}

export interface FaqItem {
  id: string;
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
}

export interface PillarItem {
  id: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  iconName: string;
  tagBn?: string;
  tagEn?: string;
}

export interface AudienceItem {
  id: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  iconName: string;
}

export interface ValueItem {
  id: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  iconName: string;
}
