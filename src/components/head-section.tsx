const HeadSection = () => {
  return (
    <div>
      <img
        src="/assets/odisha-logo.png"
        className="absolute top-10 left-[50%] translate-x-[-50%] h-20 w-20"
      />
      <img
        src="/assets/profile-pic.png"
        className="absolute top-8 right-10 h-32 w-[6.5rem]"
      />

      <div className="absolute top-36 left-[50%] -translate-x-[50%] flex flex-col items-center text-[10px]">
        <p className="font-bold">FORM No. II</p>
        <p className="font-semibold italic">(See Rule 3)</p>
        <p className="font-bold">GOVERNMENT OF ODISHA</p>
        <p>
          Office of the Tahasildar <span className="font-bold">Titlagarh</span>
        </p>
        <p>
          Miscellaneous Certificate Case No{" "}
          <span className="font-bold">E-LHC/2023/93962</span>
        </p>
        <p className="font-bold">LEGAL HEIR CERTIFICATE</p>
      </div>
      <div className="absolute top-[16rem] left-[50%] -translate-x-[50%] h-[1px] w-[95%] bg-black" />
    </div>
  );
};

export default HeadSection;
