import classNames from "classnames"

type Props = {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'default' | 'dark' | 'primary' | 'light';
    onClick?: VoidFunction;
    children: React.ReactNode
}

export function Button({type = 'button', variant, onClick,children }: Props){
    let bgColor = 'text-black'
    if (variant === 'primary') bgColor = 'bg-primary hover:bg-primaryLight active:bg-primaryDark transition-all text-white'
    if (variant === 'light') bgColor = 'bg-primaryLight text-white'
    if (variant === 'dark') bgColor = 'bg-primaryDark text-white'

    return(
        <button type={type} 
        onClick={onClick}
        className={classNames("py-2 px-4 rounded-md text-md", bgColor)}>
            {children}
        </button>
    )
}