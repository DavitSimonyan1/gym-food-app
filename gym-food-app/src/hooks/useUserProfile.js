import { useLocalStorage } from "./useLocalStorage";

// Initial profile values
const initialProfile = {
  age: "",
  height: "",
  weight: "",
  gender: "",
  activityLevel: "",
};

// Custom hook for managing user profile
export const useUserProfile = () => {
  // Use useLocalStorage to persist profile
  const [userProfile, setUserProfile] = useLocalStorage(
    "userProfile",
    initialProfile
  );

  // Update specific profile field
  const updateProfile = (field, value) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  // Update entire profile
  const updateFullProfile = (newProfile) => {
    setUserProfile(newProfile);
  };

  // Reset profile to initial values
  const resetProfile = () => {
    setUserProfile(initialProfile);
  };

  // Check if profile is completely filled
  const isProfileComplete = () => {
    return Object.values(userProfile).every((value) => value !== "");
  };

  // Get individual profile fields
  const getProfileField = (field) => {
    return userProfile[field] || "";
  };

  // Profile data validation
  const validateProfile = () => {
    const errors = {};

    // Age validation
    const age = parseInt(userProfile.age);
    if (!age || age < 10 || age > 120) {
      errors.age = "Age must be between 10 and 120 years";
    }

    // Height validation
    const height = parseInt(userProfile.height);
    if (!height || height < 100 || height > 250) {
      errors.height = "Height must be between 100 and 250 cm";
    }

    // Weight validation
    const weight = parseFloat(userProfile.weight);
    if (!weight || weight < 20 || weight > 300) {
      errors.weight = "Weight must be between 20 and 300 kg";
    }

    // Gender validation
    if (
      !userProfile.gender ||
      !["male", "female"].includes(userProfile.gender)
    ) {
      errors.gender = "Please select your gender";
    }

    // Activity level validation
    const validActivityLevels = [
      "sedentary",
      "light",
      "moderate",
      "active",
      "veryActive",
    ];
    if (
      !userProfile.activityLevel ||
      !validActivityLevels.includes(userProfile.activityLevel)
    ) {
      errors.activityLevel = "Please select your activity level";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };

  return {
    userProfile,
    updateProfile,
    updateFullProfile,
    resetProfile,
    isProfileComplete: isProfileComplete(),
    getProfileField,
    validateProfile,
  };
};
