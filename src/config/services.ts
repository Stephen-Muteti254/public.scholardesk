import {
  BookOpenCheck,
  ClipboardCheck,
  FileSearch,
  MonitorPlay,
  NotebookPen,
  type LucideIcon,
} from "lucide-react";

/**
 * ScholarDesk's five areas of focus. Single source of truth for the Services
 * page, the home page summary and the footer, so the offer never drifts apart.
 */
export type ServiceArea = {
  slug: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  summary: string;
  /** Concrete deliverables customers ask for inside this area. */
  covers: string[];
  /** What is guaranteed on every order in this area. */
  standards: string[];
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "assignment-help",
    name: "Assignment Help",
    tagline: "Written work, done to the rubric",
    icon: NotebookPen,
    summary:
      "Essays, coursework, research papers, dissertations, lab and technical reports, developed with an expert verified in that discipline, level and citation style.",
    covers: [
      "Essays, case studies and weekly coursework",
      "Research papers and literature reviews",
      "Dissertations and theses, chapter by chapter",
      "Lab, engineering and computing reports",
      "Data analysis in SPSS, R, Stata, Excel and NVivo",
      "Editing, proofreading, formatting and referencing",
    ],
    standards: [
      "Rubric-aligned structure",
      "APA, MLA, Harvard, Chicago or Vancouver",
      "Originality report with delivery",
    ],
  },
  {
    slug: "class-help",
    name: "Class Help",
    tagline: "Ongoing support across a full unit",
    icon: MonitorPlay,
    summary:
      "Continuous support for a whole course or semester: weekly tasks, discussion posts, problem sets, group work and progress tracking guided by one consistent, subject-matched expert.",
    covers: [
      "Full-semester and per-unit coverage",
      "Weekly assignments and discussion posts",
      "Practice quizzes, problem sets and learning activities",
      "Group project contributions",
      "One assigned expert for continuity",
      "Deadline calendar with checkpoint reminders",
    ],
    standards: [
      "Same expert for the whole unit",
      "Weekly progress visibility",
      "Deadline tracking, not last-minute rushes",
    ],
  },
  {
    slug: "exam-materials",
    name: "Exam Materials",
    tagline: "Prepared study and revision resources",
    icon: BookOpenCheck,
    summary:
      "Structured revision material built for the syllabus you are actually sitting: study guides, question banks, worked solutions, summaries and practice sets you can revise from.",
    covers: [
      "Syllabus-mapped study guides",
      "Question banks with worked solutions",
      "Topic summaries and revision sheets",
      "Practice papers, mock sets and past-paper guidance",
      "Flashcards and formula sheets",
      "Marking schemes and model answers",
    ],
    standards: [
      "Mapped to your syllabus",
      "Worked reasoning, not just answers",
      "Reusable, clearly formatted files",
    ],
  },
  {
    slug: "ai-and-plagiarism",
    name: "AI & Plagiarism",
    tagline: "Clear originality and AI-detection reports",
    icon: FileSearch,
    summary:
      "Clear similarity and AI-detection reports, source-by-source review, citation guidance and expert editing support for flagged passages.",
    covers: [
      "Similarity (plagiarism) screening and reporting",
      "AI-detection screening with score breakdown",
      "Source-by-source match review",
      "Citation and attribution correction",
      "Expert editing guidance for flagged passages",
      "Pre-submission originality review",
    ],
    standards: [
      "Report shared with every delivery",
      "Human-written remediation",
      "Clear, explainable findings",
    ],
  },
  {
    slug: "exams-and-interviews",
    name: "Exams & Interviews",
    tagline: "Take high-stakes moments with AI beside you",
    icon: ClipboardCheck,
    summary:
      "Live, undetectable AI assistance during proctored exams, tests, interviews and online assessments. Select any question on your screen with one hotkey, AssessDesk reads it with built-in OCR, answers it with an AI model, and displays the answer on an overlay that proctoring software cannot see or record.",
    covers: [
      "Live AI answers during proctored exams, tests and online assessments",
      "Works with screen monitoring, screen recording, screen sharing and lockdown browsers",
      "Reads questions straight from your screen — no photos, no second device, no typing",
      "Overlay invisible to screen capture, invisible in recordings, and cannot be flagged by screen-watch proctors",
      "Panel never steals focus from your exam window and never appears on camera-shared screens",
      "For written tests, technical screens, coding assessments, viva and live interviews",
    ],
    standards: [
      "Live AI answers during proctored exams and online tests",
      "Invisible to screen monitoring, recording and lockdown browsers",
      "Expert-taken sessions available if you prefer a human",
    ],
  },
];

export const DISCIPLINES = [
  "Nursing & Health Sciences",
  "Business & Management",
  "Psychology",
  "Education",
  "Law",
  "Engineering",
  "Computer Science & Technology",
  "Mathematics",
  "Biology",
  "Economics & Finance",
  "Sociology",
  "Public Health",
  "Literature & Humanities",
  "Environmental Science",
  "Statistics & Data Science",
  "Political Science",
];
