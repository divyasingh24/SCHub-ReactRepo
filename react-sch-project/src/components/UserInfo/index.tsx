import { createRoot } from "react-dom/client";
import { User } from "../../model/User";
import UserInfo from "./UserInfo";

interface Context {
  user: User;
}

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);

  return {
    render(context: Context) {
      root.render(
        <UserInfo
        user={context.user}
        />
      );
    },

    unmount() {
      root.unmount();
    },
  };
}