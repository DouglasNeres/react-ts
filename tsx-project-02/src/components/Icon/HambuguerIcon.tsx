type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export function HambuguerIcon({ width=24, height=24, fill = '#33333' }: Props) {
  return (
    <div style={{ width, height }}>

      <svg style={{width: 'inherit', height: 'inherit'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="5" y1="7" x2="19" y2="7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="5" y1="12" x2="19" y2="12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="5" y1="17" x2="19" y2="17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </div>
  )
}