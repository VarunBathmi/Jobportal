import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  icons,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const isAuthenticated = true;
  const user = { fullname: "Alex", role: "employer" };
  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: "Active User", value: "2.4M+" },
    { icon: Building2, label: "Companies", value: "50K+" },
    {},
  ];
  return <div>Hero</div>;
};

export default Hero;
