export interface CardProps {
  children: React.ReactNode;
  spaced?: boolean;
  shouldFit?: boolean;
}

export function Card({ children, spaced, shouldFit }: CardProps){
  return (
    <>
      <div className={`card ${spaced ? 'card--spaced': '' } ${shouldFit ? 'card--full-width': '' }`}>
        { children }
      </div>
    </>
  )
}