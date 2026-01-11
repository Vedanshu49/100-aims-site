// Course metadata system for multi-course learning platform
// This file defines all available courses in the system

export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  colorClass: string;
  path: string;
  totalAims: number;
  difficulty: string[];
  tags: string[];
}

export const courses: Course[] = [
  {
    id: 'python',
    name: 'Python Programming',
    description: 'Master Python from basics to advanced concepts. 100 hands-on challenges covering variables, loops, functions, OOP, and more.',
    icon: '',
    color: '#3b82f6',
    colorClass: 'blue',
    path: '/aims',
    totalAims: 100,
    difficulty: ['Beginner', 'Intermediate', 'Advanced'],
    tags: ['Programming', 'Backend', 'Scripting', 'OOP']
  },
  {
    id: 'html',
    name: 'Web Development: HTML',
    description: 'Build a strong foundation in HTML. 50 structured challenges from semantic markup to forms and accessibility.',
    icon: '',
    color: '#f97316',
    colorClass: 'orange',
    path: '/html-aims',
    totalAims: 50,
    difficulty: ['Beginner', 'Intermediate', 'Advanced'],
    tags: ['Web Development', 'Frontend', 'Markup', 'Accessibility']
  }
];

// Planned courses (for future implementation)
export const plannedCourses: Course[] = [
  {
    id: 'css',
    name: 'Web Development: CSS',
    description: 'Master CSS styling and responsive design. 50+ challenges covering selectors, flexbox, grid, and animations.',
    icon: '',
    color: '#06b6d4',
    colorClass: 'cyan',
    path: '/css-aims',
    totalAims: 50,
    difficulty: ['Beginner', 'Intermediate', 'Advanced'],
    tags: ['Web Development', 'Frontend', 'Styling']
  },
  {
    id: 'javascript',
    name: 'JavaScript Fundamentals',
    description: 'Learn JavaScript from fundamentals to DOM manipulation. 75+ challenges covering ES6+, async, and modern practices.',
    icon: '',
    color: '#eab308',
    colorClass: 'yellow',
    path: '/javascript-aims',
    totalAims: 75,
    difficulty: ['Beginner', 'Intermediate', 'Advanced'],
    tags: ['Web Development', 'Frontend', 'Programming']
  }
];

// Helper functions for course management
export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getCourseByPath(path: string): Course | undefined {
  return courses.find(course => course.path === path);
}

export function getAllCourses(): Course[] {
  return courses;
}

export function getPlannedCourses(): Course[] {
  return plannedCourses;
}

export function getAllCoursesIncludingPlanned(): Course[] {
  return [...courses, ...plannedCourses];
}

// Utility function to get course context from current page path
export function getCourseFromUrl(url: string): Course | undefined {
  if (url.includes('/aims')) {
    return getCourseById('python');
  } else if (url.includes('/html-aims')) {
    return getCourseById('html');
  } else if (url.includes('/css-aims')) {
    return getCourseById('css');
  } else if (url.includes('/javascript-aims')) {
    return getCourseById('javascript');
  }
  return undefined;
}

// Get next and previous courses
export function getAdjacentCourses(courseId: string) {
  const allCourses = getAllCourses();
  const currentIndex = allCourses.findIndex(c => c.id === courseId);
  
  return {
    previous: currentIndex > 0 ? allCourses[currentIndex - 1] : null,
    next: currentIndex < allCourses.length - 1 ? allCourses[currentIndex + 1] : null
  };
}
