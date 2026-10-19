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
  categoryBn: string;
  categoryEn: string;
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

export type AboutItem = AudienceItem;

export interface ValueItem {
  id: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  iconName: string;
}

export type EventStatus = "upcoming" | "latest" | "past" | "cancelled";
export type EventVenueType = "in-person" | "online" | "hybrid";

export interface EventSpeaker {
  nameBn: string;
  nameEn: string;
  roleBn: string;
  roleEn: string;
  avatar?: string;
}

export interface EventItem {
  id: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  date: string; // ISO date format: YYYY-MM-DD for database & sorting
  dayOfWeekBn: string; // e.g. 'শনি', 'সোম'
  dayOfWeekEn: string; // e.g. 'SAT', 'MON'
  dayNumber: string; // e.g. '24', '16'
  monthBn: string; // e.g. 'নভেম্বর'
  monthEn: string; // e.g. 'NOV'
  timeBn: string; // e.g. 'বিকাল ৩:০০ - সন্ধ্যা ৬:০০'
  timeEn: string; // e.g. '3:00 PM - 6:00 PM'
  locationBn: string; // e.g. 'জেলা শিল্পকলা একাডেমি, কুষ্টিয়া'
  locationEn: string; // e.g. 'Zilla Shilpakala Academy, Kushtia'
  venueType: EventVenueType;
  categoryBn: string; // e.g. 'মিটআপ', 'ওয়ার্কশপ', 'বুটক্যাম্প'
  categoryEn: string; // e.g. 'Meetup', 'Workshop', 'Bootcamp'
  status: EventStatus;
  featured?: boolean;
  image: string;
  registrationUrl?: string;
  registrationDeadlineBn?: string;
  registrationDeadlineEn?: string;
  capacity?: number;
  speakers?: EventSpeaker[];
  tags?: string[];
}

export interface LaunchpadTrack {
  id: string;
  stepBn: string;
  stepEn: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  coverImage: string;
  highlightsBn: string[];
  highlightsEn: string[];
}
