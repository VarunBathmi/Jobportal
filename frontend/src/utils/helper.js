export const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

export const validatePassword = (password) => {
    if (!password.trim()) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters long";
    if(!/(?=.*[a-z])/.test(password)) return "Password must contain at least one lowercase letter";
    if(!/(?=.*[A-Z])/.test(password)) return "Password must contain at least one uppercase letter";
    if(!/(?=.*\d)/.test(password)) return "Password must contain at least one number";
    if(!/(?=.*[@$!%*?&])/.test(password)) return "Password must contain at least one special character (@$!%*?&)";
    return "";
  };

  export const validateavatar = (file) => {
    if (!file) return ""; //avatar is optional, so no error if not provided
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) return "Only JPEG, PNG, JPG GIF files are allowed";
    const maxSizeInBytes = 5 * 1024 * 1024;
    if (file.size > maxSizeInBytes) return "File size must not exceed 5MB";
    return "";
  };