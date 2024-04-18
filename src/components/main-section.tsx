import PeopleTable from "./table";

const MainSection = () => {
  return (
    <div className="mt-[18rem]">
      <div className="text-[12px] px-5">
        <p className="w-[42rem] text-left">
          This is to certify that the person/persons specified below is/are the
          legal heir/heirs of late Shri{" "}
          <span className="font-bold">DAMBUDHA THELA</span> son of Shri MAKHU
          THELA ,of village/town <span className="font-bold">BHATIPADA</span>{" "}
          P.S. <span className="font-bold">TITILAGARH</span> Tahasil{" "}
          <span className="font-bold mr-1">Titlagarh</span>
          in the district of <span className="font-bold">BALANGIR</span> in the
          state of Odisha.
        </p>

        <p className="mt-4 text-left">
          This certificate is being granted only for the purpose specified in
          the Odisha Miscellaneous Certificate Rules, 2019
        </p>
      </div>

      <PeopleTable />

      {/* QR Code */}
      <img className="absolute top-[70%] left-5 h-[10rem] w-[10rem]" src="/assets/qr-code.png" />

      {/* sign section */}
      <>
        <div className="absolute top-[80%] right-10 text-[10px]">
          <p>Signature of the Revenue Officer</p>
          <p className="font-bold">14/07/2023</p>
        </div>
        <div className="text-slate-500 absolute top-[77%] right-[3rem] text-[8px]">
          <p>Digitally signed by LALIT BAG</p>
          <p>Date: 2023.07.14 11:01:28 + 05:30</p>
        </div>
      </>

      {/* bottom section */}
      <div className="absolute bottom-0 left-0 text-[10px] flex flex-col items-start text-left px-4 mb-2">
        <p className="absolute bottom-[6rem] text-center w-full">
          **** This is a Digitally Signed Document And Does Not Require
          Signature ****
        </p>
        <ul>
          <li>
            NOTE: (i) It is a digitally signed electronically generated
            certificate and therefore needs no ink-signed signature.
          </li>
          <li>
            (ii) This Certificate is issued as per section 4, 5,& 6 of
            Information Technology Act 2000 and its subsequent amendments in
            2008 and as per Revenue & Disaster Management Department
            Notification number IMU-13/10-4251/R&DM.
          </li>
          <li>
            For any Query or Verification , Agency /Department / Office may
            visit{" "}
            <a
              href="https://edistrict.odisha.gov.in/"
              className="text-blue-600"
            >
              https://edistrict.odisha.gov.in/
            </a>
          </li>
          <li>(iv) Tampering of this Certificate will attract penal action.</li>
        </ul>
      </div>
    </div>
  );
};

export default MainSection;
