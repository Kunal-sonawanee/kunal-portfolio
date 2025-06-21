"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Code,
  Trophy,
  BookOpen,
  Heart,
  Star,
  Calendar,
  User,
  GraduationCap,
  Briefcase,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "achievements", "coding", "blog", "spiritual", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                KS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: "hero", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "achievements", label: "Achievements" },
                  { id: "coding", label: "Coding" },
                  { id: "blog", label: "Blog" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "achievements", label: "Achievements" },
                { id: "coding", label: "Coding" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Kunal Sonawane
                  </span>{" "}
                  👋
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                  I build full-stack web applications, solve algorithmic problems, and explore the spiritual path.
                </p>
                <p className="text-lg text-gray-500">
                  MCA Student at MIT World Peace University, Pune | Passionate Developer | Problem Solver
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
              <a
  href="https://drive.google.com/file/d/1EdGQT-kP9MsphPxeKWT21X7f4qEkc2T4/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Get My Resume
                </Button>
                </a>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Connect with Me
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("projects")}>
                  <Code className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
              </div>

              <div className="flex items-center space-x-6">
                <a href="https://github.com/Kunal-sonawanee" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/kunalsonawane224" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/kunal.sonawanee" className="text-gray-600 hover:text-pink-600 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-white p-2">
                    <img
                      src="/cropped.png"
                      alt="Kunal Sonawane"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate computer science student on a journey of continuous learning and growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">My Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  Born and raised in Nashik, I made the bold decision to move to Pune to pursue my MCA at MIT World
                  Peace University. Living away from family has taught me independence, resilience, and the true value
                  of dedication. With a current CGPA of 8.44, I'm committed to excellence in everything I do.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">My Philosophy</h3>
                <blockquote className="text-lg italic text-gray-700 border-l-4 border-gray-300 pl-4">
                  "I am not just here for myself, I'm my parents' investment — and I will give the best returns."
                </blockquote>
                <p className="text-gray-600 mt-3">
                  This quote drives me every day. As a single child, I carry the responsibility and dreams of my family,
                  which motivates me to push beyond my limits.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a native Marathi speaker working on mastering English fluency. I love meaningful conversations,
                  embrace spiritual values, and believe in the power of continuous learning. My connection to
                  spirituality keeps me grounded while my passion for technology drives me forward.
                </p>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900">Master of Computer Applications (MCA)</h4>
                    <p className="text-gray-600">MIT World Peace University, Pune</p>
                    <p className="text-sm text-gray-500">Current CGPA: 8.44</p>
                  </div>
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h4 className="font-semibold text-gray-900">B.Sc. Computer Science</h4>
                    <p className="text-gray-600">KVN Naik College, Nashik (SPPU)</p>
                    <p className="text-sm text-gray-500">Third Highest GPA: 9.27</p>
                  </div>
                  <div className="border-l-2 border-green-200 pl-4">
                    <h4 className="font-semibold text-gray-900">Higher Secondary (12th)</h4>
                    <p className="text-gray-600">79%</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Location & Languages</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">From:</span>
                    <span className="font-medium">Nashik, Maharashtra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Currently:</span>
                    <span className="font-medium">Pune, Maharashtra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Languages:</span>
                    <span className="font-medium">Marathi, Hindi, English</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern applications and solving complex problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "JavaScript", "C", "C++", "PHP"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <ExternalLink className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Web Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "MySQL", "TailwindCSS", "ReactJS", "Spring Boot", "JSP", "Servlets"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["IntelliJ IDEA", "Ubuntu", "Windows", "Postman", "Git", "GitHub", "WAMP"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Critical Thinking", "Communication", "Event Management", "Time Management"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary" className="bg-red-100 text-red-800">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Core Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["OOP", "DSA", "DBMS", "Operating Systems", "Computer Networks"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-indigo-100 text-indigo-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Languages Known</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["English", "Marathi", "Hindi"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
{/* Projects Section */}
<section id="projects" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A showcase of my technical skills and problem-solving abilities
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* CloudForge */}
      <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
        <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <Code className="h-8 w-8" />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <a
              href="https://github.com/Kunal-sonawanee/CloudForge"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              CloudForge
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </a>
          </CardTitle>
          <CardDescription>Cloud-based IDE Platform</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            A comprehensive cloud-based IDE with terminal, coding panel, and dashboard. I handled the dashboard
            module using UI.shadcn and modern libraries.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">shadcn/ui</Badge>
            <Badge variant="outline">Node.js</Badge>
          </div>
        </CardContent>
      </Card>

      {/* E-Commerce App */}
      <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
        <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <Briefcase className="h-8 w-8" />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <a
              href="https://github.com/Kunal-sonawanee/kharedi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              E-Commerce App
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
            </a>
          </CardTitle>
          <CardDescription>Full-Stack E-Commerce Solution</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Complete e-commerce application built with Spring Boot and PostgreSQL, featuring product cart, payment
            integration, and admin dashboard.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Spring Boot</Badge>
            <Badge variant="outline">PostgreSQL</Badge>
            <Badge variant="outline">Java</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Leave Management System */}
      <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
        <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <Calendar className="h-8 w-8" />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <a
              href="https://github.com/Kunal-sonawanee/elms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              Leave Management System
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </a>
          </CardTitle>
          <CardDescription>Enterprise Leave Management</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Servlet-JSP based system for applying and approving leaves with role-based access control and
            comprehensive reporting features.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">JS</Badge>
            <Badge variant="outline">PHP</Badge>
            <Badge variant="outline">MySQL</Badge>
          </div>
        </CardContent>
      </Card>
    </div>

    {/* GitHub Button */}
    <div className="mt-12 text-center">
      <a
        href="https://github.com/Kunal-sonawanee?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="lg">
          <Github className="mr-2 h-5 w-5" />
          View All Projects on GitHub
        </Button>
      </a>
    </div>
  </div>
</section>
      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that reflect my dedication and continuous growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">LeetCode Excellence</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Achieved Top 4% globally on LeetCode with a consistent 100-day streak, demonstrating exceptional
                problem-solving skills and dedication.
              </p>
              <Badge className="bg-yellow-100 text-yellow-800">Top 1% Global</Badge>
            </Card>

            <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Coding Competitions</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Two-time winner of inter-college coding competitions, showcasing algorithmic thinking and competitive
                programming skills.
              </p>
              <Badge className="bg-blue-100 text-blue-800">2x Winner</Badge>
            </Card>

            <Card className="p-6 border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Academic Excellence</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Third highest GPA (9.27) in B.Sc. Computer Science department, reflecting consistent academic
                performance and dedication.
              </p>
              <Badge className="bg-green-100 text-green-800">9.27 GPA</Badge>
            </Card>

            <Card className="p-6 border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <User className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Event Management</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Successfully organized inter-college coding events, demonstrating leadership skills and ability to
                manage complex projects.
              </p>
              <Badge className="bg-purple-100 text-purple-800">Event Organizer</Badge>
            </Card>
          </div>
        </div>
      </section>

     {/* Coding Profiles Section */}
<section id="coding" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Coding Profiles</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Connect with me on various coding platforms and see my progress
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* LeetCode */}
      <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
          <Code className="h-8 w-8 text-orange-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">LeetCode</h3>
        <p className="text-gray-600 mb-4">Top 1% globally with 100-day streak</p>
        <a
          href="https://leetcode.com/u/kunal222004/" // Replace with your actual LeetCode profile URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Profile
          </Button>
        </a>
      </Card>

      {/* GeeksforGeeks */}
      <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
          <BookOpen className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">GeeksforGeeks</h3>
        <p className="text-gray-600 mb-4">Active problem solver and contributor</p>
        <a
          href="https://www.geeksforgeeks.org/user/sonawanekunal289/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Profile
          </Button>
        </a>
      </Card>

      {/* GitHub */}
      <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
          <Github className="h-8 w-8 text-gray-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">GitHub</h3>
        <p className="text-gray-600 mb-4">Open source projects and contributions</p>
        <a
          href="https://github.com/Kunal-sonawanee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="w-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Profile
          </Button>
        </a>
      </Card>
    </div>

     <div className="mt-12">
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Code Snippet Showcase</h3>
              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2">{"// Binary Search Implementation"}</div>
                <div className="mb-2">{"public int binarySearch(int[] arr, int target) {"}</div>
                <div className="mb-2 ml-4">{"int left = 0, right = arr.length - 1;"}</div>
                <div className="mb-2 ml-4">{"while (left <= right) {"}</div>
                <div className="mb-2 ml-8">{"int mid = left + (right - left) / 2;"}</div>
                <div className="mb-2 ml-8">{"if (arr[mid] == target) return mid;"}</div>
                <div className="mb-2 ml-8">{"else if (arr[mid] < target) left = mid + 1;"}</div>
                <div className="mb-2 ml-8">{"else right = mid - 1;"}</div>
                <div className="mb-2 ml-4">{"}"}</div>
                <div className="mb-2 ml-4">{"return -1;"}</div>
                <div>{"}"}</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

 {/* Blog Section */}
<section id="blog" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Blog & Insights</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Sharing my learning journey, technical insights and thoughts
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Blog 1 */}
      <a href="https://medium.com/@sonawanekunal289/escaping-tutorial-hell-a-guide-for-learners-5837650e6309" target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
          <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 p-6 text-white">
            <BookOpen className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">Escaping Tutorial Hell: A Guide for Learners</h3>
            <p className="text-blue-100 mt-2">Learning & Education</p>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">
              Tutorial hell is a common trap for learners, where you keep consuming content without applying it. The key to escaping this cycle is to start building projects, no matter how small. Focus on practical application and gradually increase the complexity of your projects.
            </p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">Tutorials</Badge>
              <span className="text-sm text-gray-500">3 min read</span>
            </div>
          </CardContent>
        </Card>
      </a>

      {/* Blog 2 */}
      <a href="https://medium.com/@sonawanekunal289/how-ai-is-revolutionizing-web-development-my-experience-with-cursor-ai-5d9637537f3d" target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
          <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 p-6 text-white">
            <Heart className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">How AI is Revolutionizing Web Development: My Experience with Cursor AI</h3>
            <p className="text-purple-100 mt-2">AI + Web Development</p>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">
              Exploring how AI tools like Cursor AI are transforming the way we build websites, making development faster and more intuitive.
              My firsthand experience with these tools and their impact on my workflow.
            </p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">Revolution</Badge>
              <span className="text-sm text-gray-500">4 min read</span>
            </div>
          </CardContent>
        </Card>
      </a>

      {/* Blog 3 */}
      <a href="https://medium.com/@sonawanekunal289/the-power-of-connections-more-than-just-networking-in-tech-3faded81e380" target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
          <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 p-6 text-white">
            <Code className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">Power Of Connections : More Than Just Networking in Tech</h3>
            <p className="text-green-100 mt-2">Networking Insights</p>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">
              Connections aren’t just about exchanging business cards or LinkedIn requests. They’re about building genuine relationships. When you connect with someone, think about how you can help them, not just how they can help you. The most powerful connections are built on trust, respect, and mutual growth.
            </p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">Networking</Badge>
              <span className="text-sm text-gray-500">4 min read</span>
            </div>
          </CardContent>
        </Card>
      </a>
    </div>

    {/* Read All Articles Button */}
    <div className="mt-12 text-center">
      <a
        href="https://sonawanekunal289.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" variant="outline">
          <BookOpen className="mr-2 h-5 w-5" />
          Read All Articles
        </Button>
      </a>
    </div>
  </div>
</section>

{/* Spiritual Touch Section 
      <section id="spiritual" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Spiritual Connection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Balancing technology with spirituality for a meaningful life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-l-orange-500">
              <div className="text-center space-y-6">
                <div className="text-4xl font-bold text-orange-600 mb-4">ॐ नमः शिवाय</div>
                <div className="text-2xl font-semibold text-gray-800">हर हर महादेव</div>
                <p className="text-gray-700">
                  My spiritual journey is as important as my technical one. I believe in the power of connecting the ulimate source of energy .
                   This balance helps me stay grounded and focused amidst the fast-paced
                  world of technology.
                </p>
                <div className="flex justify-center space-x-4 pt-4">
                  <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Peace</Badge>
                  <Badge className="bg-red-100 text-red-800 px-4 py-2">Values</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2">Knowledge</Badge>
                </div>
              </div>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <Heart className="h-8 w-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Inner Peace</h3>
                <p className="text-gray-600 text-sm">
                  Finding tranquility amidst the chaos of competitive programming and deadlines
                </p>
              </Card>

              <Card className="p-6 text-center">
                <BookOpen className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Continuous Learning</h3>
                <p className="text-gray-600 text-sm">
                  Embracing both technical knowledge and spiritual wisdom for holistic growth
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Purpose-Driven</h3>
                <p className="text-gray-600 text-sm">
                  Using technology as a means to serve others and make a positive impact
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
*/}
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a meaningful conversation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-600">sonawanekunal289@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-600">+91 99754 62090</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-600">Pune, Maharashtra, India</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Links</h3>
  <div className="flex flex-wrap gap-4">
    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/kunalsonawane224"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" size="sm" className="flex items-center">
        <Linkedin className="h-4 w-4 mr-2" />
        LinkedIn
      </Button>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/Kunal-sonawanee"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" size="sm" className="flex items-center">
        <Github className="h-4 w-4 mr-2" />
        GitHub
      </Button>
    </a>

    {/* Medium (custom SVG or fallback text) */}
    <a
      href="https://medium.com/@sonawanekunal289"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" size="sm" className="flex items-center">
        {/* Use an icon if available, or simple 'M' fallback */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1043.63 592.71"
          className="h-4 w-4 mr-2"
          fill="currentColor"
        >
          <path d="M588.67 296.35c0 163.65-131.9 296.35-294.33 296.35S0 460 0 296.35 131.9 0 294.33 0s294.34 132.7 294.34 296.35zM719.47 296.35c0 154.35-56.23 279.54-125.58 279.54s-125.58-125.19-125.58-279.54 56.23-279.54 125.58-279.54 125.58 125.2 125.58 279.54zM1043.63 296.35c0 142.35-34.32 257.75-76.67 257.75s-76.66-115.4-76.66-257.75S924.61 38.6 967 38.6s76.63 115.4 76.63 257.75z"/>
        </svg>
        Medium
      </Button>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/kunal.sonawanee"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" size="sm" className="flex items-center">
        <Instagram className="h-4 w-4 mr-2" />
        Instagram
      </Button>
    </a>
  </div>
</Card>


              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Resume</h3>
                <p className="text-gray-600 mb-4">
                  Download my latest resume to learn more about my experience and skills.
                </p>
                <a
  href="https://drive.google.com/file/d/1EdGQT-kP9MsphPxeKWT21X7f4qEkc2T4/view?usp=sharing"
  download
  className="w-full"
  target="_blank"
  rel="noopener noreferrer"
>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume 
                </Button>
                </a>
              </Card>
            </div>
            <Card className="p-6">
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Send a Message</h3>
  <form
    action="https://formspree.io/f/movwvjwr" // ← replace with your real Formspree endpoint
    method="POST"
    className="space-y-4"
  >
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
        Name
      </label>
      <Input id="name" name="name" placeholder="Your full name" required />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Message
      </label>
      <Textarea
        id="message"
        name="message"
        placeholder="Tell me about your project, opportunity, or just say hello!"
        rows={5}
        required
      />
    </div>
    <Button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
    >
      <Mail className="mr-2 h-4 w-4" />
      Send Message
    </Button>
  </form>
</Card>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Kunal Sonawane
            </div>
            <p className="text-gray-400 mb-6">Building the future, one line of code at a time.</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/Kunal-sonawanee/" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/kunalsonawane224" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com/kunal.sonawanee" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#all?compose=GTvVlcSMVkzkzstWTkVnmTXbrPtlqvzDlcLZKrFDjQLksSjgwvpqzznjGLcvsszFJZzLLNLDnVlzj" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">© 2024 Kunal Sonawane. Made with ❤️ and lots of ☕</p>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
