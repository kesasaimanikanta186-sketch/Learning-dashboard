
import Sidebar from "./components/dashboard/Sidebar";
import HeroCard from "./components/dashboard/HeroCard";
import StatsCard from "./components/dashboard/StatsCard";
import CourseCard from "./components/dashboard/CourseCard";
import SectionHeader from "./components/dashboard/SectionHeader";
import { supabase } from "../lib/supabase";
import type { Course } from "../types/course";
import type { Activity } from "../types/activity";
import type { Certificate } from "../types/certificate";
import AddCourseForm from "./components/dashboard/AddCourseForm";


async function getDashboardData(): Promise<Course[]> {
  const { data: courses, error } = await supabase
  .from("courses")
  .select("*")
  

  if (error) {
    console.error(error);
    return [] as Course[];
  }

  return courses;
}
async function getActivityData(): Promise<Activity[]> {
  const { data: activities, error } = await supabase
    .from("learning_activity")
    .select("*");

  if (error) {
    console.error(error);
    return [] as Activity[];
  }

  return activities;
} 
async function getCertificates(): Promise<Certificate[]> {
  const { data: certificates, error } = await supabase
    .from("certificates")
    .select("*");

  if (error) {
    console.error(error);
    return [];
  }

  return certificates;
}
export default async function Home() {
  
  const courses: Course[] = await getDashboardData();
  const activities: Activity[] = await getActivityData();
  const certificates: Certificate[] = await getCertificates();
  
  const completedHours = courses.reduce(
  (total, course) => total + course.progress,
     0
  );

  const stats = [
  {
    title: "Active Courses",
    value: courses.length.toString(),
  },
  {
    title: "Completed Hours",
    value: `${completedHours}h`,
  },
  {
    title: "Certificates",
    value: certificates.length.toString(),

  },
];
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <section className="flex-1 p-6 md:p-10">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">
              Welcome back, Sai Manikanta !
            </h1>

            <p className="mt-2 text-zinc-400">
              Continue your learning journey today.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Hero Card */}
             <HeroCard />

            {/* Stats Card */}
            {stats.map((item) => (
              <StatsCard
              key={item.title}
              title={item.title}
              value={item.value}
              />
            ))}
          {/* Add Course Form */}
          <section>
            <AddCourseForm />
          </section>
            {/* Course Cards */}
            {courses.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                progress={course.progress}
              />  
            ))}

            {/* Activity Card */}
            <article className="xl:col-span-4 rounded-3xl border border-white/10 bg-zinc-900/60 p-8 min-h-[300px]">

              <SectionHeader
                title="Learning Activity"
                subtitle="Last 30 Days"
              />

              <div className="mt-10 grid grid-cols-10 gap-2">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className={`h-10 rounded-md ${
                    activity.level === 3
                    ? "bg-cyan-500/70"
                    : activity.level === 2
                    ? "bg-purple-500/50"
                    : activity.level === 1
                    ? "bg-cyan-500/30"
                    : "bg-zinc-800"
                    }`}
                  />
                ))}
              </div>

            </article>

            {/* Certificates Section */}

          <article  className="col-span-full rounded-3xl border border-white/10 bg-zinc-900/60 p-8">            
          <SectionHeader
                title="Certificates"
                subtitle="Achievements & Certifications"
            />

          <div  className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {certificates.map((certificate) => (
          <div
                key={certificate.id}
                className="rounded-2xl border border-white/10 bg-zinc-800/50 p-6 min-h-[140px]"
                >
          <h3   className="text-base font-semibold">
                {certificate.name}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
                Issued by {certificate.issuer}
          
          </p>
      </div>
    ))}
  </div>
</article>

          </div>
        </section>
      </div>
    </main>
  );
}