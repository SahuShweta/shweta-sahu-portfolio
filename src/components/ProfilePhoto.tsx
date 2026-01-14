import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";

interface ProfilePhotoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const ProfilePhoto = ({ size = "lg", className = "" }: ProfilePhotoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-24 h-24 md:w-32 md:h-32",
    lg: "w-40 h-40 md:w-52 md:h-52",
  };

  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated gradient border */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-purple via-pink to-cyan rounded-full animate-spin-slow opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300`} />
      
      {/* Glow effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple/30 via-pink/30 to-cyan/30 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
      
      {/* Photo container */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-2 border-background`}>
        <img
          src={profilePhoto}
          alt="Shweta Sahu"
          className="w-full h-full object-cover"
        />
        
        {/* Glassmorphism overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;
