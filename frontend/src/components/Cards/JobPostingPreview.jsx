import {
  MapPin,
  DollarSign,
  ArrowLeft,
  Building2,
  Clock,
  Users,
} from "lucide-react";
import { CATEGORIES, JOB_TYPES } from "../../utils/data";
import { useAuth } from "../../context/AuthContext";

const JobPostingPreview = ({formData, setIsPreview}) => {
    const {user} = useAuth()
  const currencies = [{ value: "usd", label: "$" }];
  return (
    <div>JobPosting Preview</div>
  )
}
export default JobPostingPreview