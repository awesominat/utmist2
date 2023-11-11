

export default function LinkButton(props: {
  buttonText: string;
  redirectPath: string;
}) {
  return (
    <a
      href={props.redirectPath}
      className="flex flex-col justify-center rounded-md bg-utmist-purple shadow-md text-[2.2vh] text-center w-[69.7vw] h-[8.9vh] ml-[15vw] lg:w-[19.7vw] lg:h-[5.6vh] lg:ml-[17.7vw]"
    >
      <div className="mx-auto">
      {props.buttonText}
      </div>

    </a>
  );
}
