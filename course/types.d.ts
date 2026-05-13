/**
 * 课程系统类型定义
 */

// ── 学科键名类型 ─────────────────────────────────────────────

export type MuggleSubjectKey = 
  | 'math' | 'physics' | 'chemistry' | 'biology' 
  | 'history' | 'civics' | 'geography' | 'literature' | 'latin';

export type HogwartsSubjectKey =
  | 'transfiguration' | 'charms' | 'magicHistory' | 'defense'
  | 'herbology' | 'astronomy' | 'potions' | 'flight'
  | 'muggleStudies' | 'careOfMagicalCreatures' | 'apparition'
  | 'alchemy' | 'divination' | 'arithmancy' | 'ancientRunes';

export type SubjectKey = MuggleSubjectKey | HogwartsSubjectKey;

export type SubjectName =
  | '变形术' | '魔咒学' | '魔法史' | '黑魔法防御术'
  | '草药学' | '天文学' | '魔药学' | '飞行课'
  | '麻瓜研究' | '保护神奇动物' | '幻影移形'
  | '炼金术' | '占卜学' | '算术占卜' | '古代魔文';

// ── 评分类型 ───────────────────────────────────────────────

export type GradeRating = 'O' | 'E' | 'A' | 'P' | 'D' | 'T';

export interface HousePointsMap {
  O: number;
  E: number;
  A: number;
  P: number;
  D: number;
  T: number;
}

// ── 课程数据类型 ───────────────────────────────────────────

export interface CourseItem {
  level: number;
  name: string;
  icon: string;
  desc: string;
  unlock: boolean;
  studyRate: number;
  unlockGrade: number;
  muggleSubjectKey?: MuggleSubjectKey;
  hogwartsSubjectKey?: HogwartsSubjectKey;
  professor?: string;
  children?: CourseItem[];
  hasMuggleStudiesSystem?: boolean;
}

export interface CourseData {
  [key: string]: CourseItem[];
}

// ── 课时数据类型 ───────────────────────────────────────────

export interface Lesson {
  lesson: number;
  title: string;
  opening?: string;
  atmosphere?: string;
  keyPoints: (string | { point: string; context?: string })[];
}

export interface SyllabusChapter {
  title: string;
  lessons: Lesson[];
}

export interface SubjectMeta {
  name: string;
  icon: string;
  professor: string;
}

export interface Question {
  text: string;
  options?: string[];
  answer?: string;
  analysis: string;
  difficulty: 'basic' | 'medium' | 'hard';
  type?: 'choice' | 'open' | 'gesture';
  leadIn?: string;
  gestureId?: string;
  scoringPoints?: Array<{ text?: string; keywords: string[] }>;
  maxScore?: number;
}

export interface QuestionGroup {
  lesson: number;
  questions: Question[];
}

export interface SubjectData {
  subjectMeta: SubjectMeta;
  syllabus: SyllabusChapter[];
  lessonMap?: Record<number, Partial<Lesson>>;
  questionBank: QuestionGroup[];
  quickStudyEvents?: string[];
  professorComments?: Record<GradeRating, string[]>;
}

// ── 教授评语类型 ───────────────────────────────────────────

export interface ProfessorCommentMap {
  [subjectKey: string]: Record<GradeRating, string[]>;
}

// ── 进度数据类型 ───────────────────────────────────────────

export interface SubjectProgress {
  completed: number[];
  expired: number[];
}

export interface CourseProgress {
  [subjectKey: string]: SubjectProgress;
}

export interface CourseSaveData {
  [courseName: string]: number;
  absenceStats: {
    total: number;
    bySubject: Record<string, number>;
    records: Array<{
      date: string;
      window: string;
      period: number;
      type: string;
      subject: string;
      subjectKey?: string;
    }>;
  };
  attendance: Record<string, Record<string, 'attended' | 'missed'>>;
  muggleProgress?: CourseProgress;
  muggleSchedule?: Record<string, {
    currentLesson: number;
    lastStudiedDate: string | null;
    hasMetProfessor: boolean;
  }>;
  muggleHumanities?: string | null;
  aLevelSubjects?: string[];
  muggleExams?: {
    gcse: Record<string, ExamResult>;
    alevel: Record<string, ExamResult>;
  };
}

export interface ExamResult {
  grade: GradeRating;
  score: number;
  total?: number;
  correct?: number;
}

// ── 课堂状态类型 ───────────────────────────────────────────

export interface ClassroomState {
  kpIdx: number;
  qIdx: number;
  score: number;
  answered: boolean;
  maxPhase: number;
  openScore?: number;
  openMaxScore?: number;
  openFeedback?: string;
  openPointsAchieved?: string[];
}

// ── AI 评分类型 ────────────────────────────────────────────

export interface GradeOpenAnswerParams {
  question: string;
  scoringPoints: Array<{ text?: string; keywords: string[] }>;
  maxScore: number;
  studentAnswer: string;
  subject: string;
  lessonTitle: string;
  professor: string;
}

export interface GradeOpenAnswerResult {
  score: number;
  maxScore: number;
  feedback: string;
  pointsAchieved: string[];
}

// ── 工具函数类型 ───────────────────────────────────────────

export interface CourseUtils {
  SUBJECT_WIN_KEY: Record<SubjectKey, string>;
  SUBJECT_NAME_KEY: Record<SubjectName, HogwartsSubjectKey>;
  MUGGLE_SUBJECTS: MuggleSubjectKey[];
  HOGWARTS_SUBJECT_KEYS: Set<HogwartsSubjectKey>;
  getSubjectData: (subjectKey: SubjectKey) => SubjectData | null;
  clearSubjectDataCache: () => void;
  getAllLessons: (syllabus: SyllabusChapter[]) => Lesson[];
  getItemSubjectKey: (item: CourseItem) => SubjectKey | null;
  scoreToRating: (score: number) => GradeRating;
  HOUSE_POINTS_MAP: HousePointsMap;
}

// ── 全局类型声明 ───────────────────────────────────────────

declare global {
  interface Window {
    CourseUtils: CourseUtils;
    courseData: CourseItem[];
    getStudyEvent: (courseName: string) => string;
    getMuggleStudiesEvent: (subjectKey: MuggleSubjectKey) => string;
    courseDefault?: {
      getProfessorComment: (subjectKey: string, rating: GradeRating) => string;
      getMuggleStudiesEvent: (subjectKey: MuggleSubjectKey) => string;
      getQuickStudyEvent: (subjectKey: SubjectKey) => string;
    };
    classroom?: {
      showLearnChoiceModal: (item: CourseItem, items: CourseItem[], title: string) => void;
    };
    [key: string]: any;
  }
}