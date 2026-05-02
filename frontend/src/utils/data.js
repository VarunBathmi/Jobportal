import {
    Search,
    Users,
    FileText,
    MessageSquare,
    BarChart3,
    Shield,
    Clock,
    Award,
    Briefcase,
    Building2,
    LayoutDashboard,
    Plus,
} from "lucide-react";
export const jobSeekerFeature = [
    {
        icon: Search,
        title: "Smart Job Matching",
        description:"Ai powered algorithm matches you with relevant opportunities based on your skill and preference.",
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description:"Create professional resume with our intutive builder and templates designed by experts.",  
    },
    {
        icon: MessageSquare,
        title: "Direct Communication",
        description:"Connect directly with hiring managers and recruiters through our secure message platform.",
    },
    {
        icon: Award,
        title: "Skill assesment",
        description:"Showcase your abilities with verified skill tests and earn badges that employeee trust.",
    },
];

export const employerFeatures = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description:"Access our vast database of pre-screened candidates and find the perfect fit for your team.",
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description:"Track your hiring performance with detailed analytics and insight on candidate engagement.",

    },
    {
        icon: Shield,
        title: "Verified candidates",
        description:"All candidates undergo bacckground verification to ensure you're hiring trustworthy professionals.",
    },
    {
        icon: Clock,
        title: "Quick Hiring",
        description:"Streamlined hiring process reduces time-to-hire by 60% with automated screening tools.",
    }
];

//Navigation items configuration
export const NAVIGATION_MENU = [
    {id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard},
    {id: "post-job", name: "Post Job", icon: Plus },
    {id: "manage-jobs", name: "Manage Jobs", icon: Briefcase},
    {id: "company-profile", name: "Company Profile", icon: Building2},
];

// Categories and job types
export const CATEGORIES =[
{ value:"Engineering", label:"Engineering" },
{ value:"Design", label:"Design" },
{ value:"Marketing", label:"Marketing" },
{ value:"Sales", label:"Sales" },
{ value:"IT & Software", label:"IT & Software" },
{ value:"Customer-service", label:"Customer Service" },
{ value:"Product", label:"Product" },
{ value:"Operations", label:"Operations" },
{ value:"Finance", label:"Finance" },
{ value:"HR", label:"Human Resources" },
{ value:"Other", label:"Other" },
];

export const JOB_TYPES = [
    { value:"Full-time", label:"Full-time" },
    { value:"Part-time", label:"Part-time" },
    { value:"Contract", label:"Contract" },
    { value:"Internship", label:"Internship" },
    { value:"Remote", label:"Remote" },
];

export const Salary_Range = [
    "Less than $1000",
    "$1000 - $15,000",
    "More than $15,000",
];