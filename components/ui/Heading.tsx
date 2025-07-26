

export default function Heading({children} : {children: React.ReactNode}) {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-2xl font-bold my-10">
        {children}
      </h1>
    </div>

  )
}
