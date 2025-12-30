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
  BookOpen,
  Heart,
  Calendar,
  User,
  GraduationCap,
  Briefcase,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Globe,
  Cpu,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "freelance", "research", "skills", "projects", "blog", "contact"]
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
    <div className="min-h-screen bg-white text-gray-900">
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
                  { id: "freelance", label: "Work" },
                  { id: "research", label: "Research" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
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
                { id: "freelance", label: "Work" },
                { id: "research", label: "Research" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
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
                <p className="text-sm font-medium text-slate-600 tracking-wide uppercase">Java Developer â€¢ Problem Solver</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                  Hi, I'm{" "}
                  <span className="text-gray-800">
                    Kunal Sonawane
                  </span>
                </h1>
               <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
  Building robust solutions with Java and full-stack expertise. Passionate about clean code, system design, and sharing knowledge.
</p>
<div className="flex flex-wrap gap-3 text-sm text-gray-600">
  <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1" /> IT Intern at Cohesity</span>
  <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> Pune, India</span>
  <span className="flex items-center"><BookOpen className="h-4 w-4 mr-1" /> Published Researcher</span>
</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white" onClick={() => scrollToSection("freelance")}>
                  <Briefcase className="mr-2 h-5 w-5" />
                  Explore My Work
                </Button>
                <a
  href="https://drive.google.com/file/d/11ZNvvM5GCcaVPZREEfwtwVsHYkJRgca2/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
                <Button
                  size="lg"
                  variant="outline"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
                </a>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("research")}>
                  <BookOpen className="mr-2 h-5 w-5" />
                  Research
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
              Java-focused developer with a foundation in DSA, full-stack development, and a commitment to building reliable systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Who I Am</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Java developer with strong foundations in data structures, algorithms, and full-stack web development. 
                Currently an IT Intern at Cohesity, bringing freelance experience and published research to the table.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">My Approach</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Responsibility-driven. Problem-solving mindset. Not interested in showcasing metricsâ€”focused on 
                building and understanding systems deeply. Continuous learner, not a show-off achiever.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-slate-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <div className="space-y-3">
                <div className="border-l-2 border-slate-300 pl-3">
                  <h4 className="font-medium text-gray-900 text-sm">Master of Computer Applications</h4>
                  <p className="text-xs text-gray-600">MIT World Peace University, Pune</p>
                  <p className="text-xs text-gray-600">2023 - 2025 Â· CGPA: 8.44</p>
                </div>
                <div className="border-l-2 border-slate-300 pl-3">
                  <h4 className="font-medium text-gray-900 text-sm">B.Sc. Computer Science</h4>
                  <p className="text-xs text-gray-600">Savitribai Phule Pune University</p>
                  <p className="text-xs text-gray-600">2020 - 2023 Â· CGPA: 9.27</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Professional Journey */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Journey</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
                <div className="space-y-8">
                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 text-right pr-8">
                      <h4 className="font-semibold text-gray-900">IT Intern at Cohesity</h4>
                      <p className="text-sm text-gray-600">First organizational role</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white"></div>
                    <div className="w-5/12 pl-8">
                      <span className="text-sm text-slate-600">Current</span>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 text-right pr-8">
                      <h4 className="font-semibold text-gray-900">Freelance Development</h4>
                      <p className="text-sm text-gray-600">3 client projects delivered</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-400 rounded-full border-4 border-white"></div>
                    <div className="w-5/12 pl-8">
                      <span className="text-sm text-slate-600">2023-2024</span>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 text-right pr-8">
                      <h4 className="font-semibold text-gray-900">Research & Academics</h4>
                      <p className="text-sm text-gray-600">DSA, Projects, Publication</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-400 rounded-full border-4 border-white"></div>
                    <div className="w-5/12 pl-8">
                      <span className="text-sm text-slate-600">2021-2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Freelance Projects Section */}
      <section id="freelance" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Client projects delivered end-to-endâ€”from development to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cold Consult */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex flex-col justify-between">
                <Globe className="h-8 w-8 text-white/80" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Cold Consult</h3>
                  <p className="text-slate-300 text-sm">Ice Products & Consulting</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Professional consulting website for ice-based products and services. 
                  Full-stack development with client communication and ongoing maintenance.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">Full-Stack</Badge>
                  <Badge variant="outline" className="text-xs">Deployment</Badge>
                  <Badge variant="outline" className="text-xs">Maintenance</Badge>
                </div>
                <a href="https://coldconsult.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Live Site
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* SCADPL */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 p-6 flex flex-col justify-between">
                <Globe className="h-8 w-8 text-white/80" />
                <div>
                  <h3 className="text-xl font-semibold text-white">SCADPL</h3>
                  <p className="text-slate-300 text-sm">Corporate Web Presence</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Corporate website development with modern design principles. 
                  Delivered complete solution including hosting setup and deployment.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">Web Development</Badge>
                  <Badge variant="outline" className="text-xs">Hosting</Badge>
                  <Badge variant="outline" className="text-xs">SEO</Badge>
                </div>
                <a href="https://scadpl.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Live Site
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* RoboFye */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-700 p-6 flex flex-col justify-between">
                <Cpu className="h-8 w-8 text-white/80" />
                <div>
                  <h3 className="text-xl font-semibold text-white">RoboFye</h3>
                  <p className="text-slate-300 text-sm">Robotics & Technology</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Technology-focused website for robotics and automation services. 
                  End-to-end development with client coordination and technical consulting.
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <Badge variant="outline" className="text-xs">Full-Stack</Badge>
                  <Badge variant="outline" className="text-xs">Consulting</Badge>
                  <Badge variant="outline" className="text-xs">Deployment</Badge>
                </div>
                <a href="https://robofye.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Live Site
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-sm">
              Each project involved complete ownership: requirements gathering, development, deployment, and client handoff.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Languages & Frameworks */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Spring Boot", "Python", "JavaScript", "TypeScript", "React", "Next.js"].map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Databases & Tools */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">Databases & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "PostgreSQL", "Git", "Docker", "Postman", "Linux"].map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">Currently Learning</h3>
              <div className="flex flex-wrap gap-2">
                {["Salesforce", "Apex", "LWC", "System Design"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
<section id="projects" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Academic and personal projects I've worked on
      </p>
      <a
        href="https://github.com/Kunal-sonawanee?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
          <Github className="mr-2 h-5 w-5" />
          View Projects on GitHub
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </div>
  </div>
</section>

<section id="research" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Peer-reviewed research contributing to IoT and agricultural technology
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <Card className="overflow-hidden border-2 border-slate-200">
        <CardHeader className="bg-slate-900 text-white">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/10 rounded-lg">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <Badge className="bg-white/20 text-white mb-2">Published Research</Badge>
              <CardTitle className="text-xl text-white leading-tight">
                An IoT-Powered Real-Time Cattle Health Monitoring System for Enhanced Agricultural Productivity
              </CardTitle>
              <CardDescription className="text-slate-300 mt-2">
                ICT4SD 2025 Conference â€¢ Springer Publication
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* DOI Badge - Prominent */}
            <div className="flex items-center justify-center">
              <a 
                href="https://doi.org/10.1007/978-3-032-06671-8_38" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              >
                <span className="text-sm font-medium text-slate-700 mr-2">DOI:</span>
                <span className="text-sm font-mono text-slate-900">10.1007/978-3-032-06671-8_38</span>
                <ExternalLink className="h-4 w-4 ml-2 text-slate-600" />
              </a>
            </div>

            <p className="text-gray-700 leading-relaxed">
              This research presents an innovative IoT-based system for real-time cattle health monitoring to enhance 
              agricultural productivity. The system utilizes wearable sensors to continuously monitor vital parameters 
              such as body temperature, heart rate, and activity levels, transmitting data wirelessly to a cloud server 
              for analysis and early disease detection.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Contributions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start"><span className="mr-2">â€¢</span>Real-time health monitoring architecture</li>
                  <li className="flex items-start"><span className="mr-2">â€¢</span>Wearable sensor integration design</li>
                  <li className="flex items-start"><span className="mr-2">â€¢</span>Cost-effective solution for farmers</li>
                  <li className="flex items-start"><span className="mr-2">â€¢</span>Mobile alerting system</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">IoT Architecture</Badge>
                  <Badge variant="outline">Sensor Networks</Badge>
                  <Badge variant="outline">Cloud Computing</Badge>
                  <Badge variant="outline">Mobile Development</Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-4 border-t border-border gap-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> 2025</span>
                <span className="flex items-center"><User className="h-4 w-4 mr-1" /> Lead Author</span>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.youtube.com/watch?v=J73On-ga6Ss&t=2820s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="font-medium text-sm">Watch Presentation</span>
                </a>
                <a
                  href="https://doi.org/10.1007/978-3-032-06671-8_38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="font-medium text-sm">Read Paper</span>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section id="blog" className="py-20 bg-white">
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
              <span className="text-sm text-gray-600">3 min read</span>
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
              <span className="text-sm text-gray-600">4 min read</span>
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
              Connections arenâ€™t just about exchanging business cards or LinkedIn requests. Theyâ€™re about building genuine relationships. When you connect with someone, think about how you can help them, not just how they can help you. The most powerful connections are built on trust, respect, and mutual growth.
            </p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">Networking</Badge>
              <span className="text-sm text-gray-600">4 min read</span>
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

      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold mb-4 md:mb-0">
              Kunal Sonawane
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="https://github.com/Kunal-sonawanee/" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/kunalsonawane224" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sonawanekunal289@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">Â© 2025</p>
          </div>
        </div>
      </footer>
    </div>
    
  );
}
