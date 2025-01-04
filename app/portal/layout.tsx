export default function LoginLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className="flex justify-center items-center h-screen bg-blue-400">
            {/* Include shared UI here e.g. a header or sidebar */}
            <div className="mx-auto w-72 md:w-80 bg-white rounded-lg">
                {children}
            </div>
        </section>
    )
}