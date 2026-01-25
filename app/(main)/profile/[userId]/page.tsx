import ProfilePlaceholder from "@/components/ProfilePlaceholder/ProfilePlaceholder";
import ToolsGrid from "@/components/ToolsGrid/ToolsGrid";
import UserProfile from "@/components/UserProfile/UserProfile";

const ProfilePage = () => {
  return (
    <div>
      <h2>ProfilePage</h2>
      <UserProfile />
      <ToolsGrid />
      <ProfilePlaceholder />
    </div>
  );
};

export default ProfilePage;
