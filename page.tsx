
import { prisma } from '@/lib/db';
export const dynamic = 'force-dynamic';
export default async function Dashboard(){
  const [total, fulfilled, pending] = await Promise.all([
    prisma.request.count(),
    prisma.request.count({ where: { status: 'FULFILLED' } }),
    prisma.request.count({ where: { status: { in: ['NEW','MATCHED','IN_PROGRESS'] } } })
  ]);
  const recent = await prisma.request.findMany({ orderBy: { createdAt: 'desc' }, take: 10 });
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Transparency Dashboard</h1>
      <div className="grid sm:grid-cols-3 gap-4 mt-4">
        <div className="rounded-2xl border bg-white p-4"><div className="text-xs text-slate-500">Total Requests</div><div className="text-3xl font-bold">{total}</div></div>
        <div className="rounded-2xl border bg-white p-4"><div className="text-xs text-slate-500">Fulfilled</div><div className="text-3xl font-bold">{fulfilled}</div></div>
        <div className="rounded-2xl border bg-white p-4"><div className="text-xs text-slate-500">Pending</div><div className="text-3xl font-bold">{pending}</div></div>
      </div>
      <h2 className="text-lg font-semibold mt-6">Recent Requests</h2>
      <ul className="mt-2 divide-y">
        {recent.map((r:any) => (
          <li key={r.id} className="py-2 text-sm"><b>{r.category}</b> - {r.location || '-'} - <span className="text-slate-600">{r.details}</span></li>
        ))}
      </ul>
    </div>
  );
}
