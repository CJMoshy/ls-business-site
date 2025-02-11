export default function Blurb({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div className="relative top-5 left-10 mb-10 w-10/12 h-2/6 bg-[#131313] rounded-xl drop-shadow-[-25px_35px_10px_rgba(0,0,0,0.75)] text-white">
      {children ? children : <>Lorem ipsum dolor</>}
    </div>
  );
}
