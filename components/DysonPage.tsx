import { Disclaimer } from "./Disclaimer";
import { DysonNav } from "./DysonNav";

export function DysonPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <DysonNav />
      <h2>{title}</h2>
      {intro ? <p className="lede">{intro}</p> : null}
      {children}
      <Disclaimer />
    </>
  );
}
