import { LoginLeftPart } from "../../components/organisms/LoginLeftPart";
import { LoginRightPart } from "../../components/organisms/LoginRightPart";
import { LoginTemplate } from "../../components/templates/LoginTemplate";

export const LoginPage = () => {
  return (
    <>
      <LoginTemplate
        leftpart={
          <LoginLeftPart
            piclink="../../Assets/loginIcons/Business Analysis 3D Illustration_login.svg"
            picname="Business Analysis"
          />
        }
        rightpart={<LoginRightPart />}
      />
    </>
  );
};
