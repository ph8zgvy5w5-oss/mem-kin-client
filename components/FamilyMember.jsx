function FamilyMember({ user }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-lg font-bold">
        {user.name.charAt(0).toUpperCase()}
      </div>

      <h3 className="text-lg font-semibold">
        {user.name}
      </h3>

      <p className="text-sm text-gray-500">
        {user.role}
      </p>
    </div>
  )
}

export default FamilyMember