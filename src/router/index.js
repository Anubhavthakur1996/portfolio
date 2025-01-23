import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";
import { setMobile } from "../redux/coreSlice";
import { showMenu } from "../redux/menuSlice";
import App from "../App";
import Introduction from "../components/introduction";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Endorsements from "../components/endorsements";
import Contact from "../components/contact";
import Menu from "../components/shared/menu";
import NotFound from "../components/not_found";

const checkMenu = () => {
  return sessionStorage.getItem("menu");
};

export default function Router() {
  const dispatch = useDispatch();

  const menu = checkMenu();

  if (menu) {
    dispatch(showMenu());
  }

  /* Storing user's device details in a variable*/
  let details = navigator.userAgent;

  /* Creating a regular expression  
  containing some mobile devices keywords  
  to search it in details string*/
  let regexp = /android|iphone|kindle|ipad|iPod/i;

  /* Using test() method to search regexp in details 
  it returns boolean value*/
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    dispatch(setMobile(true));
  } else {
    dispatch(setMobile(false));
  }

  return (
    <Routes>
      <Route path="portfolio" element={<App />} />
      <Route element={<Menu />}>
        <Route path="intro" element={<Introduction />} />
        <Route path="history" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="endorsements" element={<Endorsements />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
