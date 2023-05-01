import { LoginLeftPart } from "../../components/organisms/LoginLeftPart";
import { SignUpRightPart } from "../../components/organisms/SignUpRightPart";
import SignUpTemplate from "../../components/templates/SingUpTemplate";

const SignUpPage = () => {
  return (
    <>
      <SignUpTemplate
        leftpart={
          <LoginLeftPart
            piclink="../../Assets/loginIcons/SignUpImage.svg"
            picname="signup-img"
          />
        }
        rightpart={<SignUpRightPart />}
      />
    </>
  );
};

export default SignUpPage;
