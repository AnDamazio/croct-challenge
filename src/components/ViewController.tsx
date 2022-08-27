import { useCroct } from "@croct/plug-react";
import { ReactElement, useCallback, useState } from "react";
import Button from "./UI/Button";
import ButtonGroup from "./UI/ButtonGroup";
import OutlineBadge from "./UI/OutlineBadge";

const ViewController = (): ReactElement => {
  const [userPersona, setUserPersona] = useState(
    localStorage.getItem("persona")
  );

  const croct = useCroct();

  const savePersona = (persona: string) =>
    localStorage.setItem("persona", persona);

  const setPersona = useCallback(
    (persona: string) => {
      croct.user.edit().set("custom.persona", persona).save();
      setUserPersona(persona);
      savePersona(persona);
      window.location.reload();
    },
    [croct]
  );

  const setPersonaDeveloper = () => setPersona("developer");

  const setPersonaMarketer = () => setPersona("marketer");

  const setPersonaGrowthHacker = () => setPersona("growth-hacker");

  return (
    <>
      <OutlineBadge name="views" className="mt-10" />
      <ButtonGroup>
        <Button
          onClick={setPersonaDeveloper}
          type="button"
          className={userPersona === "developer" && "btn-active"}
        >
          Developer
        </Button>
        <Button
          onClick={setPersonaMarketer}
          type="button"
          className={userPersona === "marketer" && "btn-active"}
        >
          Marketer
        </Button>
        <Button
          onClick={setPersonaGrowthHacker}
          type="button"
          className={userPersona === "growth-hacker" && "btn-active"}
        >
          Growth Hacker
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ViewController;
