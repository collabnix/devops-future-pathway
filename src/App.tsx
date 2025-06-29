import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resources from "./pages/Resources";
import Tools from "./pages/Tools";
import Careers from "./pages/Careers";
import Certifications from "./pages/Certifications";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// Import all the missing roadmap and learning pages
import Roadmaps from "./pages/Roadmaps";
import LearningPaths from "./pages/LearningPaths";
import BestPractices from "./pages/BestPractices";
import Events from "./pages/Events";
import Glossary from "./pages/Glossary";
import InterviewPrep from "./pages/InterviewPrep";
import Labs from "./pages/Labs";
import SalaryGuide from "./pages/SalaryGuide";

const queryClient = new QueryClient();

// Set the basename for GitHub Pages deployment
const basename = import.meta.env.PROD ? '/devops-future-pathway' : '';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Core Learning Routes */}
          <Route path="/roadmaps" element={<Roadmaps />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/best-practices" element={<BestPractices />} />
          <Route path="/labs" element={<Labs />} />
          
          {/* Resource Routes */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/glossary" element={<Glossary />} />
          
          {/* Career Routes */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/salary-guide" element={<SalaryGuide />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          
          {/* Community Routes */}
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Information Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
