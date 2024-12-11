import { TbNorthStar } from "react-icons/tb";

function Intro() {
  return (
    <>
      <h1 className="max-w-96 text-3xl font-bold">
        Got Ideas?
        <TbNorthStar className="inline-block" /> We've got the skills. Let's
        team up.
      </h1>
      <p className="my-6 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>
    </>
  );
}

export default Intro;
