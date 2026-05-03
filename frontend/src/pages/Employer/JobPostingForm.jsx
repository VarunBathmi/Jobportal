import DashboardLayout from '../../components/layout/DashboardLayout'
import {useState, useEffect} from "react";
import {
  AlertCircle,
  MapPin,
  DollarSign,
  Briefcase,
  Users,
  Eye,
  Send,
} from "lucide-react";
import { API_PATHS } from '../../utils/apiPaths';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from "../../utils/axiosInstance";
import {CATEGORIES, JOB_TYPES} from "../../utils/data";
import toast from "react-hot-toast";

const JobPostingForm = () => {
  return (
    <DashboardLayout activeMenu='post-job'>JobPostingForm</DashboardLayout>
  )
}

export default JobPostingForm