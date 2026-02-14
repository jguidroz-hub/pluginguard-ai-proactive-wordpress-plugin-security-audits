export function DashboardSkeleton() {
  return (
    <div className="animate-pulse space-y-4 p-8">
      <div className="h-8 bg-gray-200 rounded w-1/4" />
      <div className="grid grid-cols-3 gap-4">
        {[1,2,3].map(i => <div key={i} className="h-32 bg-gray-200 rounded" />)}
      </div>
    </div>
  )
}
