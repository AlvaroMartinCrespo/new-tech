import { CircularProgress } from '@nextui-org/progress';
export default function Loading({ title }) {
  return (
    <section className="flex justify-center items-center gap-4 h-screen text-white">
      <CircularProgress aria-label="Loading..." />
      <span>{title}</span>
    </section>
  );
}
