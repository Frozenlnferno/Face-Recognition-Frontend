const Navigation = ({ signOut }) => {
    return (
        <nav className="flex justify-end">
            <p className="text-lg text-black p-3 hover:opacity-70 underline cursor-pointer"
                onClick={ signOut }>
                Sign Out
            </p>
        </nav>
    )
}

export default Navigation;