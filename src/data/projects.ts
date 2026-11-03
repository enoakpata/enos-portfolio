export interface Screenshot {
  src: string;
  caption: string;
}

export interface ProblemCard {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface LearningCard {
  title: string;
  description: string;
  points: string[];
}

export interface ProjectDetailData {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  year: string;
  overview: string;
  screenshots: Screenshot[]; // leave empty until real screenshots exist — section auto-hides
  problems: ProblemCard[];
  features: FeatureItem[];
  techCategories: TechCategory[];
  learnings: LearningCard[];
  githubUrl: string;
  demoUrl?: string;
}

export const projectDetails: Record<string, ProjectDetailData> = {
  "pcos-multimodal-detection": {
    slug: "pcos-multimodal-detection",
    title: "Multimodal PCOS Detection System",
    tagline:
      "A late-fusion deep learning system that combines imaging and clinical data to support early detection of Polycystic Ovary Syndrome, with built-in model explainability.",
    duration: "Final Year Capstone",
    year: "2025 – 2026",
    overview:
      "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder that is frequently underdiagnosed due to overlapping symptoms and limited access to specialist screening. This project builds a multimodal machine learning system that fuses image-based and clinical (tabular) data to support earlier, more reliable detection — while keeping predictions interpretable enough for clinical use. The work was written up and submitted as a manuscript to the Nigerian Journal of Technology (Scopus Q3).",
    // PICTURES: drop image files in /public/screenshots, then add entries like:
    //   { src: "/screenshots/pcos_gradcam.png", caption: "Grad-CAM heatmap" },
    // The Pictures section appears on the case-study page as soon as this has an entry.
    screenshots: [],
    problems: [
      {
        title: "Underdiagnosis of PCOS",
        description:
          "PCOS symptoms overlap with several other conditions, and many cases go undetected due to limited access to specialist screening.",
      },
      {
        title: "Single-Modality Limitations",
        description:
          "Most existing detection approaches rely on either imaging or clinical data alone, missing diagnostic signal available from combining both.",
      },
      {
        title: "Black-Box Predictions",
        description:
          "Deep learning models often lack transparency, which makes clinicians hesitant to trust automated predictions without justification.",
      },
      {
        title: "Research-to-Deployment Gap",
        description:
          "Many healthcare ML models stay in research notebooks and are never packaged into something interactive or usable.",
      },
    ],
    features: [
      {
        title: "Late-Fusion Stacking Architecture",
        description:
          "Combined an EfficientNet-B0 CNN (image features) with an XGBoost classifier (clinical/tabular features), fused through a logistic regression meta-learner to produce a final prediction.",
      },
      {
        title: "Grad-CAM Visual Explainability",
        description:
          "Grad-CAM heatmaps highlight the image regions driving each prediction, giving a visual basis for the model's decisions.",
      },
      {
        title: "SHAP Feature Attribution",
        description:
          "SHAP values quantify how much each clinical feature contributes to a given prediction, surfacing which factors mattered most.",
      },
      {
        title: "Leakage-Safe Cross-Validation",
        description:
          "Built a careful K-fold cross-validation pipeline to prevent data leakage between training and test sets and ensure trustworthy performance estimates.",
      },
      {
        title: "Streamlit Deployment",
        description:
          "Deployed as an interactive Streamlit app so predictions and explainability visualizations can be explored in real time rather than only in a notebook.",
      },
      {
        title: "Peer-Reviewed Manuscript",
        description:
          "Findings were written up in CRISP-DM format, including a Threats to Validity section, and submitted to a Scopus Q3-indexed journal.",
      },
    ],
    techCategories: [
      {
        title: "Modeling",
        items: ["Python", "EfficientNet-B0", "XGBoost", "scikit-learn"],
      },
      {
        title: "Explainability",
        items: ["Grad-CAM", "SHAP"],
      },
      {
        title: "Data & Evaluation",
        items: ["pandas", "NumPy", "K-Fold Cross-Validation"],
      },
      {
        title: "Deployment",
        items: ["Streamlit", "Git"],
      },
    ],
    learnings: [
      {
        title: "Multimodal Fusion Techniques",
        description:
          "Learned how to combine heterogeneous data types into a single predictive pipeline.",
        points: [
          "Late fusion vs. early fusion trade-offs",
          "Designing a stacking meta-learner",
          "Aligning image and tabular data pipelines",
        ],
      },
      {
        title: "Explainable AI",
        description:
          "Went beyond accuracy to make the model's reasoning inspectable.",
        points: [
          "Implementing and interpreting Grad-CAM outputs",
          "Translating SHAP values into a clinically meaningful narrative",
          "Balancing model accuracy against interpretability",
        ],
      },
      {
        title: "ML Deployment",
        description: "Took the model out of the notebook and into a usable tool.",
        points: [
          "Packaging a trained multimodal model for production",
          "Debugging a Streamlit PATH/environment deployment issue",
          "Designing an interface usable by a non-technical audience",
        ],
      },
      {
        title: "Research Rigor & Writing",
        description: "Strengthened the project into a publishable piece of research.",
        points: [
          "Structuring a manuscript around the CRISP-DM framework",
          "Writing a Threats to Validity section",
          "Incorporating supervisor and reviewer feedback",
        ],
      },
    ],
    githubUrl: "https://github.com/enoakpata/pcos_multimodal_project.git",
    demoUrl: "https://pcosmultimodalproject-aappa6orsd4cyebe7xnid8u.streamlit.app/",
  },

  "color-readability-classifier": {
    slug: "color-readability-classifier",
    title: "Color Readability Classifier",
    tagline:
      "A machine learning classifier that predicts whether text is readable against a given background color, comparing classical models trained on WCAG-based contrast data.",
    duration: "Coursework Project",
    year: "2025",
    overview:
      "This project explores whether classical machine learning can reliably predict text readability from color pairs alone. Using the WCAG luminance and contrast-ratio formulas as a foundation for ground-truth labeling, the project builds a labeled dataset, compares logistic regression and SVM classifiers, and deploys the result as an interactive widget for real-time predictions.",
    screenshots: [],
    problems: [
      {
        title: "Manual Accessibility Checks",
        description:
          "Designers and developers often rely on one-off manual contrast checks rather than a scalable, automated readability assessment.",
      },
      {
        title: "Inconsistent Accessibility Standards",
        description:
          "Not every color combination that 'looks fine' actually meets accessibility guidelines for users with visual impairments.",
      },
      {
        title: "Limited Labeled Data",
        description:
          "No readily available dataset paired color combinations directly with readability outcomes suitable for ML training.",
      },
    ],
    features: [
      {
        title: "Synthetic Data Generation",
        description:
          "Generated a large set of labeled color-pair samples using the WCAG luminance and contrast-ratio formula to establish ground-truth readability labels.",
      },
      {
        title: "Survey-Based Validation",
        description:
          "Collected human survey responses on real color pairs to validate and supplement the synthetic dataset.",
      },
      {
        title: "Model Comparison",
        description:
          "Trained and compared logistic regression and SVM classifiers, evaluating accuracy, interpretability, and decision-boundary behavior.",
      },
      {
        title: "Feature Engineering",
        description:
          "Extracted contrast ratio, luminance difference, and RGB-based features from raw color-pair inputs.",
      },
      {
        title: "Interactive Deployment",
        description:
          "Deployed the final model as an interactive widget, letting users input two colors and get a real-time readability prediction.",
      },
    ],
    techCategories: [
      {
        title: "Modeling",
        items: ["Python", "scikit-learn", "Logistic Regression", "SVM"],
      },
      {
        title: "Data",
        items: ["WCAG Luminance Formula", "pandas", "NumPy"],
      },
      {
        title: "Deployment",
        items: ["Interactive Web Widget"],
      },
    ],
    learnings: [
      {
        title: "Model Comparison & Trade-offs",
        description: "Explored how different classical models handle the same problem.",
        points: [
          "Linear vs. margin-based classifiers",
          "Visualizing decision boundaries",
          "Precision/recall trade-offs for an accessibility use case",
        ],
      },
      {
        title: "Synthetic Data Design",
        description: "Learned to build a dataset when no ready-made one exists.",
        points: [
          "Defining ground truth from a formula-based standard",
          "Balancing synthetic data with real survey responses",
          "Validating overall data quality",
        ],
      },
      {
        title: "Accessibility & UX Fundamentals",
        description: "Connected the technical model to a real design problem.",
        points: [
          "WCAG contrast guidelines",
          "Designing with visual impairment in mind",
          "Translating a technical standard into a practical tool",
        ],
      },
    ],
    githubUrl: "https://github.com/enoakpata/color_readability_model.git",
  },

  "shift-management-system": {
    slug: "shift-management-system",
    title: "Shift Management System",
    tagline:
      "A comprehensive employee shift management solution with biometric authentication and real-time tracking.",
    duration: "3 months",
    year: "2025",
    overview:
      "The Shift Management System is a robust desktop application designed to streamline employee shift scheduling, attendance tracking, and workforce management. Built with Java and MySQL, the system provides a secure, role-based platform that caters to different organizational hierarchies including Directors, Supervisors, and regular employees.",
    screenshots: [
      { src: "/screenshots/it_dashboard.jpeg", caption: "IT Dashboard" },
      { src: "/screenshots/supervisordashboard.jpeg", caption: "Supervisor Dashboard" },
    ],
    problems: [
      {
        title: "Manual Attendance Tracking",
        description:
          "Traditional paper-based or spreadsheet attendance systems were prone to errors, time-consuming, and difficult to manage across multiple shifts.",
      },
      {
        title: "Security Concerns",
        description:
          "Buddy-punching and unauthorized clock-ins led to payroll discrepancies and compromised accountability.",
      },
      {
        title: "Lack of Real-Time Insights",
        description:
          "Managers struggled to access real-time attendance data and generate reports for informed decision-making.",
      },
      {
        title: "Inflexible Shift Management",
        description:
          "Employees had no automated way to request shift swaps or changes, leading to communication bottlenecks.",
      },
    ],
    features: [
      {
        title: "Biometric Sign-In",
        description:
          "Integrated fingerprint authentication ensures secure and accurate employee identification, eliminating buddy-punching and unauthorized access.",
      },
      {
        title: "Webcam Capture",
        description:
          "Automatic photo capture during clock-in/out provides visual verification and an additional layer of security for attendance records.",
      },
      {
        title: "Role-Based Dashboards",
        description:
          "Customized interfaces for Directors, Supervisors, and regular employees, each with appropriate access levels and functionalities.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Comprehensive admin panel for managing employees, viewing attendance reports, generating analytics, and configuring system settings.",
      },
      {
        title: "Shift Swap System",
        description:
          "Employees can request shift swaps which are routed to supervisors for approval, streamlining schedule modifications.",
      },
      {
        title: "Multi-Threading",
        description:
          "Efficient background processing for database operations, biometric scanning, and webcam capture without blocking the main UI thread.",
      },
      {
        title: "Login/Logout Tracking",
        description:
          "Precise timestamping of employee check-ins and check-outs with automatic calculation of work hours and overtime.",
      },
    ],
    techCategories: [
      { title: "Backend", items: ["Java", "MySQL", "JDBC"] },
      { title: "Frontend", items: ["Java Swing", "AWT"] },
      { title: "Hardware Integration", items: ["Biometric SDK", "Webcam API"] },
    ],
    learnings: [
      {
        title: "Database Management",
        description:
          "Mastered writing complex SQL queries, optimizing database performance, and implementing efficient data relationships for large-scale employee data.",
        points: [
          "Structured Query Language (SQL) best practices",
          "Database normalization and indexing",
          "Transaction management and data integrity",
        ],
      },
      {
        title: "Hardware Integration",
        description:
          "Learned to integrate external hardware devices with software applications, handling real-time data capture and processing.",
        points: [
          "Webcam integration and image processing",
          "Biometric device SDK implementation",
          "Real-time data synchronization",
        ],
      },
      {
        title: "Concurrent Programming",
        description:
          "Implemented multi-threading to handle simultaneous operations without compromising application responsiveness and user experience.",
        points: [
          "Thread management and synchronization",
          "Asynchronous task execution",
          "Deadlock prevention strategies",
        ],
      },
      {
        title: "Security Implementation",
        description:
          "Developed robust authentication systems and implemented role-based access control to ensure data security and user privacy.",
        points: [
          "Secure password hashing and storage",
          "Session management",
          "Authorization and access control",
        ],
      },
    ],
    githubUrl: "https://github.com/enoakpata/shift-management-system.git",
  },
};
