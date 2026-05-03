import { useEffect, useState } from "react";
import { Search, Filter, Grid, List, X } from "lucide-react";
import LoadingSpinner from "../../components/LoadingSpinner";
import axiosInstance from "../../utils/axiosInstance";
import FilterContent from "./components/FilterContent";
import { API_PATHS } from "../../utils/apiPaths";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
const JobSeekerDashboard = () => {
  const { user } = useAuth();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Filter states
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
    type: "",
    minSalary: "",
    maxSalary: "",
  });

  //Slidbar collapse states
  const [expandedSections, setExpandedSections] = useState({
    jobType: true,
    salary: true,
    categories: true,
  });

  //Function to fetch jobs from API
  const fetchJobs = async (filterParams = {}) => {
    try{
      setLoading(true)
      setError(null)

      //Build query parameters
      const params =new URLSearchParams()
      
      if(filterParams.keyword) params.append("keyword",filterParams.keyword);
      if(filterParams.location) params.append("location",filterParams.location);
      if(filterParams.minSalary) params.append("minSalary",filterParams.minSalary);
      if(filterParams.maxSalary) params.append("maxSalary",filterParams.maxSalary);
      if(filterParams.type) params.append("type",filterParams.type);
      if(filterParams.category) params.append("category",filterParams.category)
      
      const response=await axiosInstance.get(
        `${API_PATHS.JOBS.GET_ALL_JOBS}?${params.toString()}`
      );
      const jobsData=Array.isArray(response.data)
      ?response.data
      :response.data.jobs || [];
      setJobs(jobsData)
    }catch(err){
      console.error("Error fetching jobs : ",err)
      setError("Failed to fetch jobs. Please try again later.");
      setJobs([]);
    }finally{
      setLoading(false)  
    }
  };

  //Fetch jobs when filters change (debounced)
  useEffect(
    () => {
      const timeoutId = setTimeout(() => {
        const apiFilters = {
          keyword: filters.keyword,
          location: filters.location,
          minSalary: filters.minSalary,
          maxSalary: filters.maxSalary,
          category: filters.category,
          type: filters.type,
          experience: filters.experience,
          remoteOnly: filters.remoteOnly,
        };

        // only call API if there are meaningfull filters
        const hasFilters = Object.values(apiFilters).some(
          (value) =>
            value !== "" &&
            value !== false &&
            value !== null &&
            value !== undefined,
        );

        if (hasFilters) {
          fetchJobs(apiFilters);
        } else {
          fetchJobs(); //Fetch all jobs if no filters
        }
      }, 500); //500ms debounce
      return () => clearTimeout(timeoutId);
    },
    (filters, user),
  );

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const clearAllfilters = () => {
    setFilters({
      keyword: "",
      location: "",
      category: "",
      type: "",
      minSalary: "",
      maxSalary: "",
    });
  };

  const MobileFilterOverlay = () => (
    <div
      className={`fixed inset-0 z-50 lg:hidden${showMobileFilters ? "" : "hidden"}`}
    >
      <div
      className="fixed inset-0 bg-black"
      onClick={()=>setShowMobileFilters(false)}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className=" flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-lg">Filters</h3>
          <button onClick={()=>setShowMobileFilters(false) }className="p-2 hover:bg-gray-100 rounded-xl transition-colors ">
            <X className="w-5 h-5"/>
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-full pb-20 ">
          <FilterContent 
          toggleSection={toggleSection}
          clearAllfilters={clearAllfilters}
          expandedSections={expandedSections}
          filters={filters}
          handleFilterChange={handleFilterChange}/>
        </div>
      </div>
    </div>
  );

  const toggleSaveJob = async (jobId, isSaved) => {

    try{
      if(isSaved){
        await axiosInstance.delete(API_PATHS.JOBS.UNSAVE_JOB(jobId));
        toast.success("Job removed successfully!");
      }else{
        await axiosInstance.post(API_PATHS.JOBS.DELETE_JOB.SAVE_JOB(jobId));
        toast.success("job saved successfully!");
      }
      fetchJobs();
    }catch(err){
      console.log("Error:",err);
      toast.error("Somthing went wrong! Try again later")
    }
  };
  const applytoJob = async (jobId) => {
    try{
      if(jobId){
        await axiosInstance.post(API_PATHS.APPLICATIONS.APPLY_TO_JOB(jobId));
        toast.success("Applied to job successfully")
      }
      fetchJobs()
    }catch(err){
      console.log("Error:",err);
      const errMsg=err?.response?.data?.message
      toast.error(errMsg || "Something went wrong! try again later");
    }
  };
  if (jobs.length == 0 && loading) {
    return <LoadingSpinner />;
  }

  return <div>JobSeekerDashboard</div>;
};

export default JobSeekerDashboard;
