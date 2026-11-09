const P: Record<string, React.ReactNode> = {
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.7a2 2 0 0 1 1.7 2z" />,
  message: <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.1-5.7A8.4 8.4 0 1 1 21 11.5z" />,
  check: <path d="M20 6 9 17l-5-5" />,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z" /><path d="M2 21c0-3 1.9-5.4 5.1-6 2.4-.5 4.9-2 5.9-3" /></>,
  tree: <><path d="M12 22v-7" /><path d="M8 15h8l-2.5-3.5H16L12 3 8 11.5h2.5z" /></>,
  drop: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 5.8 12 3c-.5 2.8-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z" />,
  mountain: <path d="m8 3 4 8 5-5 5 15H2z" />,
  rake: <><path d="M12 2v13" /><path d="M5 15h14" /><path d="M5 15v6M9 15v6M12 15v6M15 15v6M19 15v6" /></>,
  layers: <><path d="m12 2 10 5-10 5L2 7z" /><path d="m2 12 10 5 10-5" /><path d="m2 17 10 5 10-5" /></>,
  flame: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4.1 2-6 .5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z" />,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  brush: <><path d="M9.1 15.5 3 21.5h5.4c2.7 0 4.6-2.3 4.1-5a3.8 3.8 0 0 0-3.4-1z" /><path d="m21.6 2.5-9.9 12.1-3-3L20.8 1.7a.6.6 0 0 1 .8.8z" /></>,
  roller: <><rect x="2" y="3" width="17" height="6" rx="2" /><path d="M19 6h3v6h-10v3" /><rect x="10" y="15" width="4" height="7" rx="1" /></>,
  home: <><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22v-8h6v8" /></>,
  sparkle: <path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3z" />,
  cabinet: <><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M12 2v20M9.5 12h.01M14.5 12h.01" /></>,
  badge: <><circle cx="12" cy="8" r="6" /><path d="M15.5 13 17 22l-5-3-5 3 1.5-9" /></>,
  mower: <><path d="M3 4h3l3 11h9" /><circle cx="7" cy="19" r="2.5" /><circle cx="17" cy="19" r="2.5" /><path d="M9 11h9l1 4" /></>,
  scissors: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M8.1 8.1 20 20M8.1 15.9 20 4" /></>,
  truck: <><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" /><path d="M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.6a1 1 0 0 0-.2-.6l-3.5-4.4a1 1 0 0 0-.8-.4H14" /><circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" /></>,
};
export default function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.85} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{P[name]}</svg>;
}
export function Stars({ count = 5, className = "h-5 w-5" }: { count?: number; className?: string }) {
  return <span className="inline-flex text-star" role="img" aria-label={`${count} out of 5 stars`}>{Array.from({ length: 5 }, (_, i) => <svg key={i} viewBox="0 0 24 24" fill={i < count ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.5} className={className} aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1z" /></svg>)}</span>;
}
