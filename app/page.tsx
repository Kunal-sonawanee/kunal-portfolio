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
  Shield,
  Cpu,
  Globe,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "research", "achievements", "coding", "blog", "contact"]
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-200">
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
                  { id: "research", label: "Research" },
                  { id: "achievements", label: "Achievements" },
                  { id: "coding", label: "Coding" },
                  { id: "blog", label: "Blog" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-white bg-slate-700"
                        : "text-gray-300 hover:text-white hover:bg-slate-800"
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
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-t border-slate-700">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "research", label: "Research" },
                { id: "achievements", label: "Achievements" },
                { id: "coding", label: "Coding" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 w-full text-left transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="hero" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                  Hi, I'm{" "}
                  <span className="text-gray-800 font-semibold">
                    Kunal Sonawane
                  </span>{" "}
                  👋🏻
                </h1>
               <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
  Full-Stack Developer & Researcher with expertise in building scalable web applications, blockchain technology, and machine learning solutions. Passionate about solving complex algorithmic challenges and contributing to open-source projects.
</p>
<p className="text-lg text-gray-600">
  MCA Student at MIT World Peace University, Pune · Conference Speaker (ICT4SD 2025) · 550+ LeetCode Problems Solved · Open to Contribute
</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
              <a
  href="https://drive.google.com/file/d/11ZNvvM5GCcaVPZREEfwtwVsHYkJRgca2/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
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
                <a href="https://github.com/Kunal-sonawanee" className="text-gray-600 hover:text-slate-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/kunalsonawane224" className="text-gray-600 hover:text-slate-900 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com/kunal.sonawanee" className="text-gray-600 hover:text-slate-900 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 rounded-full bg-slate-200 p-1">
                  <div className="w-full h-full rounded-full bg-white p-2">
                    <img
                      src="/cropped.png"
                      alt="Kunal Sonawane"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate computer science student on a journey of continuous learning and growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-slate-200 pl-4">
                  <h4 className="font-semibold text-gray-900">Master of Computer Applications (MCA)</h4>
                  <p className="text-gray-600">MIT World Peace University, Pune</p>
                  <p className="text-sm text-gray-500">Current CGPA: 8.44</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4">
                  <h4 className="font-semibold text-gray-900">B.Sc. Computer Science</h4>
                  <p className="text-gray-600">KVN Naik College, Nashik (SPPU)</p>
                  <p className="text-sm text-gray-500">Third highest GPA: 9.27</p>
                </div>
                <div className="border-l-2 border-slate-200 pl-4">
                  <h4 className="font-semibold text-gray-900">Higher Secondary (12th)</h4>
                  <p className="text-gray-600">79%</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-slate-600 mr-3" />
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
      </section>

      <section id="skills" className="py-20 bg-gray-50">
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
                <Code className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "JavaScript", "C", "C++", "PHP"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <ExternalLink className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Web Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Python", "Java", "MySQL", "TailwindCSS", "ReactJS", "Spring Boot", "JSP", "Servlets"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Advanced Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Cloud Computing", "Microservices", "NLP"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["IntelliJ IDEA", "VS Code", "Ubuntu", "Windows", "Postman", "Git", "GitHub","Jupyter"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Critical Thinking", "Communication", "Event Management", "Time Management"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-800">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Core Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["OOP", "DSA", "DBMS", "Operating Systems", "Computer Networks"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Languages Known</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["English", "Marathi", "Hindi"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-800">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
<section id="projects" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A collection of projects showcasing my technical skills and learning journey
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <Card className="p-8">
        <div className="text-center mb-8">
          <Github className="h-16 w-16 text-slate-600 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Development Journey</h3>
          <p className="text-gray-600 mb-6">
            I've worked on various projects spanning different technologies and domains. 
            Here's an overview of my key projects that demonstrate my skills and growth as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-lg">Web Development</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>CodeScroll:</strong> Instagram like platform for computer science concepts and sharing</li>
              <li>• <strong>E-Commerce App:</strong> Full-stack shopping solution</li>
              <li>• <strong>Leave Management System:</strong> Enterprise application</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 text-lg">Specialized Projects</h4>
            <ul className="space-y-2 text-gray-600">
              <li>• <strong>IoT Cattle Healthcare:</strong> Research implementation</li>
              <li>• <strong>AI Task Manager:</strong> ML-powered productivity tool</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Technologies Used Across Projects:</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Java</Badge>
            <Badge variant="outline">Spring Boot</Badge>
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">MySQL</Badge>
            <Badge variant="outline">PostgreSQL</Badge>
            <Badge variant="outline">IoT</Badge>
           
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/Kunal-sonawanee?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            Explore my complete project portfolio, source code, and documentation
          </p>
        </div>
      </Card>
    </div>
  </div>
</section>

<section id="research" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Contributing to the academic community through innovative research in technology
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden hover:shadow-xl transition-shadow">
        <CardHeader className="bg-slate-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-slate-900 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900">
                  An IoT-Powered Real-Time Cattle Health Monitoring System for Enhanced Agricultural Productivity
                </CardTitle>
                <CardDescription className="text-slate-600 mt-1">
                   Research Paper • Presented at ICT4SD 2025 Conference
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              This research presents an innovative IoT-based system for real-time cattle health monitoring to enhance 
              agricultural productivity. The system utilizes wearable sensors to continuously monitor vital parameters 
              such as body temperature, heart rate, and activity levels, transmitting data wirelessly to a cloud server 
              for analysis and early disease detection through a user-friendly mobile application.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Contributions:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• IoT-based real-time cattle health monitoring</li>
                  <li>• Wearable sensor integration for vital parameters</li>
                  <li>• Cost-effective solution for smallholder farmers</li>
                  <li>• Mobile application for real-time alerts</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">IoT</Badge>
                  <Badge variant="outline">Wearable Sensors</Badge>
                  <Badge variant="outline">Cloud Computing</Badge>
                  <Badge variant="outline">Mobile App</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Presented at ICT4SD 2025
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  Lead Author & Presenter
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.youtube.com/watch?v=J73On-ga6Ss&t=2820s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="font-medium">Watch Presentation</span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1QIbvxFgyUUeHn3lcpjl2qKQOUkYgdqjM/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="font-medium">Read Full Paper</span>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Research Interests */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Research Interests</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-slate-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">IoT & Agriculture</h4>
            <p className="text-sm text-gray-600">
              Developing smart solutions for precision agriculture and livestock monitoring
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-6 w-6 text-slate-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Machine Learning</h4>
            <p className="text-sm text-gray-600">
              Developing AI-driven solutions for complex problem-solving scenarios
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="h-6 w-6 text-slate-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Distributed Systems</h4>
            <p className="text-sm text-gray-600">
              Research in scalable and fault-tolerant distributed computing systems
            </p>
          </Card>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="achievements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that reflect my dedication and continuous growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-l-slate-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Research Publication</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Authored and presented a research paper on "IoT-Powered Real-Time Cattle Health Monitoring System" 
                at the ICT4SD 2025 international conference, contributing to academic literature in IoT applications and precision agriculture.
              </p>
              <Badge className="bg-slate-100 text-slate-800">Presented at ICT4SD 2025</Badge>
            </Card>

            <Card className="p-6 border-l-4 border-l-slate-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">LeetCode Excellence</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Solved 550+ problems on LeetCode with consistent practice, demonstrating exceptional
                problem-solving skills and algorithmic thinking abilities.
              </p>
              <Badge className="bg-slate-100 text-slate-800">550+ Problems</Badge>
            </Card>

            <Card className="p-6 border-l-4 border-l-slate-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Coding Competitions</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Two-time winner of inter-college coding competitions, showcasing algorithmic thinking and competitive
                programming skills in data structures and algorithms.
              </p>
              <Badge className="bg-slate-100 text-slate-800">2x Winner</Badge>
            </Card>

            <Card className="p-6 border-l-4 border-l-slate-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Academic Excellence</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Third highest GPA (9.27) in B.Sc. Computer Science department, reflecting consistent academic
                performance and dedication.
              </p>
              <Badge className="bg-slate-100 text-slate-800">9.27 GPA</Badge>
            </Card>

            <Card className="p-6 border-l-4 border-l-slate-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <User className="h-8 w-8 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Event Management</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Successfully organized inter-college coding events, demonstrating leadership skills and ability to
                manage complex projects.
              </p>
              <Badge className="bg-slate-100 text-slate-800">Event Organizer</Badge>
            </Card>
          </div>
        </div>
      </section>

<section id="coding" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Coding Profiles</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Connect with me on various coding platforms and see my progress
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
          <Code className="h-8 w-8 text-slate-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">LeetCode</h3>
        <p className="text-gray-600 mb-4">550+ problems solved with consistent daily practice</p>
        <a
          href="https://leetcode.com/u/kunal222004/" 
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
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
          <BookOpen className="h-8 w-8 text-slate-600" />
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

      <Card className="p-6 text-center hover:shadow-lg transition-shadow group">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-200 transition-colors">
          <Github className="h-8 w-8 text-slate-600" />
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

   
        </div>
      </section>

<section id="blog" className="py-20 bg-gray-50">
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
          <div className="h-48 bg-slate-600 p-6 text-white">
            <BookOpen className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">Escaping Tutorial Hell: A Guide for Learners</h3>
            <p className="text-gray-200 mt-2">Learning & Education</p>
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

      <a href="https://medium.com/@sonawanekunal289/how-ai-is-revolutionizing-web-development-my-experience-with-cursor-ai-5d9637537f3d" target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
          <div className="h-48 bg-slate-700 p-6 text-white">
            <Heart className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">How AI is Revolutionizing Web Development: My Experience with Cursor AI</h3>
            <p className="text-gray-200 mt-2">AI + Web Development</p>
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

      <a href="https://medium.com/@sonawanekunal289/the-power-of-connections-more-than-just-networking-in-tech-3faded81e380" target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
          <div className="h-48 bg-slate-800 p-6 text-white">
            <Code className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-semibold">Power Of Connections : More Than Just Networking in Tech</h3>
            <p className="text-gray-200 mt-2">Networking Insights</p>
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

      <section id="contact" className="py-20 bg-white">
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
                    <Mail className="h-5 w-5 text-slate-600 mr-3" />
                    <span className="text-gray-600">sonawanekunal289@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-slate-600 mr-3" />
                    <span className="text-gray-600">+91 99754 62090</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-slate-600 mr-3" />
                    <span className="text-gray-600">Pune, Maharashtra, India</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Links</h3>
  <div className="flex flex-wrap gap-4">
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

    <a
      href="https://medium.com/@sonawanekunal289"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="outline" size="sm" className="flex items-center">
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
  href="https://drive.google.com/file/d/11ZNvvM5GCcaVPZREEfwtwVsHYkJRgca2/view?usp=drive_link"
  download
  className="w-full"
  target="_blank"
  rel="noopener noreferrer"
>
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume 
                </Button>
                </a>
              </Card>
            </div>
            <Card className="p-6">
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Send a Message</h3>
  <form
    action="https://formspree.io/f/movwvjwr"
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
      className="w-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
    >
      <Mail className="mr-2 h-4 w-4" />
      Send Message
    </Button>
  </form>
</Card>

          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">
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
              <p className="text-gray-400 text-sm">© 2025 Kunal Sonawane. Made with ❤️ and lots of ☕</p>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
