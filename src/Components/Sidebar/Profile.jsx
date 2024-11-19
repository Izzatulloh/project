import { ProfileContainer } from "./style"
import noImg from "../../assets/images/noUser.webp";
const Profile = () => {
    return (
        <ProfileContainer>
            <ProfileContainer.Image src={noImg} />
            <div>
                <ProfileContainer.Name>Izzatulloh</ProfileContainer.Name>
                <ProfileContainer.Email>Izzatulloh@gmail.com</ProfileContainer.Email>

            </div>
        </ProfileContainer>
    )
}

export default Profile