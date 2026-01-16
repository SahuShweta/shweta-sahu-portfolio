import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";

interface ProfilePhotoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const ProfilePhoto = ({ size = "lg", className = "" }: ProfilePhotoProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-28 h-28 md:w-36 md:h-36",
    lg: "w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72",
  };

  const glowSizes = {
    sm: "blur-sm",
    md: "blur-lg",
    lg: "blur-xl",
  };

  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated gradient border - spinning */}
      <div className={`absolute -inset-1.5 bg-gradient-to-r from-purple via-pink to-cyan rounded-full animate-spin-slow opacity-80 ${glowSizes[size]} group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500`} />
      
      {/* Secondary glow effect */}
      <div className={`absolute -inset-3 bg-gradient-to-r from-purple/40 via-pink/40 to-cyan/40 rounded-full ${glowSizes[size]} opacity-60 group-hover:opacity-90 transition-opacity duration-500`} />
      
      {/* Photo container */}
      <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-background shadow-2xl`}>
        <img
          src={profilePhoto}
          alt="Shweta Sahu"
          className="w-full h-full object-cover"
        />
        
        {/* Glassmorphism overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Decorative dots */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-cyan rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default ProfilePhoto;
