
export default async function DashboardSections({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

  return (
    <main>
      {children}
    </main>
  );
}
