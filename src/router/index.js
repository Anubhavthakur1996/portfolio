import { Routes, Route } from "react-router";
import App from "../App";
import Introduction from "../components/introduction";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Endorsements from "../components/endorsements";
import Contact from "../components/contact";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="intro" element={<Introduction />} />
      <Route path="history" element={<Projects />} />
      <Route path="skills" element={<Skills />} />
      <Route path="endorsements" element={<Endorsements />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
